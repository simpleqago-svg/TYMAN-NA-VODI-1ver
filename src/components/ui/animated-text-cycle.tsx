"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeInOutSmooth, easeOutSharp, springSnappy } from "@/lib/motion";

interface AnimatedTextCycleProps {
  words: string[];
  interval?: number;
  className?: string;
  onIndexChange?: (index: number) => void;
}

const wordVariants = {
  hidden: {
    y: -20,
    opacity: 0,
    filter: "blur(8px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: easeInOutSmooth,
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    filter: "blur(8px)",
    transition: {
      duration: 0.35,
      ease: easeOutSharp,
    },
  },
};

export default function AnimatedTextCycle({
  words,
  interval = 5000,
  className = "",
  onIndexChange,
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState("auto");
  const measureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (measureRef.current) {
      const elements = measureRef.current.children;
      if (elements.length > currentIndex) {
        const newWidth = elements[currentIndex].getBoundingClientRect().width;
        setWidth(`${Math.ceil(newWidth + 4)}px`);
      }
    }
  }, [currentIndex, words]);

  useEffect(() => {
    onIndexChange?.(currentIndex);
  }, [currentIndex, onIndexChange]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  if (words.length === 0) return null;

  return (
    <span className="relative inline-block align-baseline">
      <span
        ref={measureRef}
        aria-hidden="true"
        className="pointer-events-none invisible absolute left-0 top-0 whitespace-nowrap"
      >
        {words.map((word, i) => (
          <span key={i} className={className}>
            {word}
          </span>
        ))}
      </span>

      <motion.span
        className="relative inline-block align-baseline overflow-hidden"
        animate={{
          width,
          transition: springSnappy,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={`inline-block ${className}`}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ whiteSpace: "nowrap" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </span>
  );
}
