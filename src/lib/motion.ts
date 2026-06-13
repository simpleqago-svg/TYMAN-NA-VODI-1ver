/** Shared motion tokens — soft Framer-like motion */

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeInOutSmooth = [0.25, 0.1, 0.25, 1] as const;
export const easeOutSharp = [0.4, 0, 0.2, 1] as const;

export const smoothTween = {
  duration: 1.05,
  ease: easeInOutSmooth,
} as const;

export const quickTween = {
  duration: 0.55,
  ease: easeInOutSmooth,
} as const;

export const springSmooth = {
  type: "spring" as const,
  stiffness: 70,
  damping: 22,
  mass: 1.05,
};

export const springSnappy = {
  type: "spring" as const,
  stiffness: 120,
  damping: 24,
  mass: 0.95,
};

export const viewportOnce = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -5% 0px" as const,
};

export const fadeBlurUp = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: smoothTween,
  },
};

export const fadeBlurUpReduced = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOutExpo },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

export const crossfade = {
  duration: 0.75,
  ease: easeInOutSmooth,
} as const;
