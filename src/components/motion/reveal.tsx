"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as React from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Direction the element animates in from. */
  direction?: "up" | "down" | "none";
  /** Render as a different element (defaults to div). */
  as?: "div" | "section" | "li" | "article";
}

/**
 * Discreet scroll-triggered reveal animation. Respects the user's
 * reduced-motion preference for accessibility.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const offset = direction === "up" ? 24 : direction === "down" ? -24 : 0;

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : offset },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
