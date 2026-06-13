/** Shared motion tokens — Framer-like smooth reveals & transitions */

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeInOutSmooth = [0.22, 1, 0.36, 1] as const;
export const easeOutSharp = [0.4, 0, 0.2, 1] as const;

export const smoothTween = {
  duration: 0.85,
  ease: easeOutExpo,
} as const;

export const quickTween = {
  duration: 0.45,
  ease: easeInOutSmooth,
} as const;

export const springSmooth = {
  type: "spring" as const,
  stiffness: 120,
  damping: 22,
  mass: 0.92,
};

export const springSnappy = {
  type: "spring" as const,
  stiffness: 180,
  damping: 20,
  mass: 0.85,
};

export const viewportOnce = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -8% 0px" as const,
};

export const fadeBlurUp = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: smoothTween,
  },
};

export const fadeBlurUpReduced = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOutExpo },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

export const crossfade = {
  duration: 0.65,
  ease: easeInOutSmooth,
} as const;
