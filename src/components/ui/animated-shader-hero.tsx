"use client";

import { useEffect, useRef } from "react";

const hookahSmokeShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x, R.y)

float rnd(vec2 p) {
  p = fract(p * vec2(12.9898, 78.233));
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(in vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3. - 2. * f);
  float a = rnd(i);
  float b = rnd(i + vec2(1, 0));
  float c = rnd(i + vec2(0, 1));
  float d = rnd(i + vec2(1.));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float t = 0.0, a = 1.0;
  mat2 m = mat2(1., -0.5, 0.2, 1.2);
  for (int i = 0; i < 5; i++) {
    t += a * noise(p);
    p *= 2. * m;
    a *= 0.5;
  }
  return t;
}

float clouds(vec2 p) {
  float d = 1.0, t = 0.0;
  for (float i = 0.0; i < 3.0; i++) {
    float a = d * fbm(i * 10. + p.x * 0.2 + 0.2 * (1. + i) * p.y + d + i * i + p);
    t = mix(t, d, a);
    d = a;
    p *= 2. / (i + 1.);
  }
  return t;
}

void main(void) {
  vec2 uv = (FC - 0.5 * R) / MN;
  vec2 st = uv * vec2(2.0, 1.0);
  vec3 col = vec3(0.0);
  float bg = clouds(vec2(st.x + T * 0.35, -st.y));
  uv *= 1.0 - 0.22 * (sin(T * 0.16) * 0.5 + 0.5);

  for (float i = 1.0; i < 12.0; i++) {
    uv += 0.09 * cos(i * vec2(0.1 + 0.01 * i, 0.8) + i * i + T * 0.38 + 0.1 * uv.x);
    vec2 p = uv;
    float d = length(p);
    col += 0.00085 / max(d, 0.05) * (vec3(0.78, 0.9, 0.84) * (0.5 + 0.5 * sin(i + T * 0.2)));
    float b = noise(i + p + bg * 1.731);
    col += 0.0014 * b / length(max(p, vec2(b * p.x * 0.02, p.y))) * vec3(0.72, 0.86, 0.8);
    col = mix(col, vec3(bg * 0.14, bg * 0.2, bg * 0.17), d);
  }

  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(lum), col, 0.2);
  col = pow(col, vec3(0.85)) * 1.35;
  col = clamp(col, 0.0, 1.0);
  O = vec4(col, 1.0);
}`;

class WebGLRenderer {
  private canvas: HTMLCanvasElement;
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram | null = null;
  private vs: WebGLShader | null = null;
  private fs: WebGLShader | null = null;
  private buffer: WebGLBuffer | null = null;
  private shaderSource: string;

  private vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

  private vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const gl = canvas.getContext("webgl2", {
      alpha: false,
      antialias: false,
      preserveDrawingBuffer: true,
    });
    if (!gl) throw new Error("WebGL2 not supported");
    this.gl = gl;
    this.shaderSource = hookahSmokeShaderSource;
  }

  private compile(shader: WebGLShader, source: string) {
    const gl = this.gl;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(shader) || "Shader compile failed");
    }
  }

  reset() {
    const gl = this.gl;
    if (this.program) {
      if (this.vs) gl.deleteShader(this.vs);
      if (this.fs) gl.deleteShader(this.fs);
      gl.deleteProgram(this.program);
      this.program = null;
    }
  }

  setup() {
    const gl = this.gl;
    this.vs = gl.createShader(gl.VERTEX_SHADER)!;
    this.fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    this.compile(this.vs, this.vertexSrc);
    this.compile(this.fs, this.shaderSource);
    this.program = gl.createProgram()!;
    gl.attachShader(this.program, this.vs);
    gl.attachShader(this.program, this.fs);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(this.program) || "Program link failed");
    }
  }

  init() {
    const gl = this.gl;
    const program = this.program!;

    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    (program as WebGLProgram & Record<string, WebGLUniformLocation | null>).resolution =
      gl.getUniformLocation(program, "resolution");
    (program as WebGLProgram & Record<string, WebGLUniformLocation | null>).time =
      gl.getUniformLocation(program, "time");
  }

  resize(width: number, height: number) {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const bufferWidth = Math.max(1, Math.floor(width * dpr));
    const bufferHeight = Math.max(1, Math.floor(height * dpr));

    this.canvas.width = bufferWidth;
    this.canvas.height = bufferHeight;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.gl.viewport(0, 0, bufferWidth, bufferHeight);
  }

  render(now = 0) {
    const gl = this.gl;
    const program = this.program;
    if (!program) return;

    const uniforms = program as WebGLProgram & Record<string, WebGLUniformLocation | null>;

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

    gl.uniform2f(uniforms.resolution, this.canvas.width, this.canvas.height);
    gl.uniform1f(uniforms.time, now * 1e-3);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}

function useShaderBackground(containerRef: React.RefObject<HTMLDivElement | null>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const rendererRef = useRef<WebGLRenderer | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let mounted = true;

    try {
      rendererRef.current = new WebGLRenderer(canvas);
      rendererRef.current.setup();
      rendererRef.current.init();
    } catch (error) {
      console.warn("Hookah smoke shader unavailable:", error);
      return;
    }

    const resize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) return;
      rendererRef.current.resize(rect.width, rect.height);
    };

    const loop = (now: number) => {
      if (!mounted || !rendererRef.current) return;
      rendererRef.current.render(now);
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    resize();
    loop(0);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    window.addEventListener("resize", resize);

    return () => {
      mounted = false;
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      rendererRef.current?.reset();
    };
  }, [containerRef]);

  return canvasRef;
}

export function HookahSmokeBackground({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useShaderBackground(containerRef);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full touch-none opacity-[0.1]"
      />
    </div>
  );
}
