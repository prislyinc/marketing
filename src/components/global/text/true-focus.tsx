"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface TrueFocusProps {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const sizeClasses: Record<string, string> = {
  sm: "text-lg md:text-xl",
  md: "text-2xl md:text-3xl",
  lg: "text-4xl md:text-5xl",
  xl: "text-5xl md:text-6xl",
  "2xl": "text-6xl md:text-7xl",
};

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = "Compre Configure Comece",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  size = "lg",
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);
      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode && lastActiveIndex !== null) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div
      className="relative flex flex-wrap justify-center items-center gap-4 md:flex-nowrap"
      ref={containerRef}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        const isLast = index === words.length - 1;

        return (
          <span
            key={index}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className={`relative font-black cursor-pointer ${sizeClasses[size]} ${
              isLast ? "w-full md:w-auto text-center md:text-left" : ""
            }`}
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
            } as React.CSSProperties}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{ duration: animationDuration }}
        style={{
          "--border-color": borderColor,
          "--glow-color": glowColor,
        } as React.CSSProperties}
      >
        {["top-left", "top-right", "bottom-left", "bottom-right"].map(
          (corner) => (
            <span
              key={corner}
              className="absolute w-4 h-4 border-[3px] rounded-[3px]"
              style={{
                borderColor: "var(--border-color)",
                filter: "drop-shadow(0 0 4px var(--border-color))",
                ...(corner === "top-left" && {
                  top: -10,
                  left: -10,
                  borderRight: 0,
                  borderBottom: 0,
                }),
                ...(corner === "top-right" && {
                  top: -10,
                  right: -10,
                  borderLeft: 0,
                  borderBottom: 0,
                }),
                ...(corner === "bottom-left" && {
                  bottom: -10,
                  left: -10,
                  borderRight: 0,
                  borderTop: 0,
                }),
                ...(corner === "bottom-right" && {
                  bottom: -10,
                  right: -10,
                  borderLeft: 0,
                  borderTop: 0,
                }),
              }}
            />
          )
        )}
      </motion.div>
    </div>
  );
};

export default TrueFocus;
