import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import React from "react";

type Direction = "up" | "left" | "right" | "scale" | "fade";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  threshold?: number;
  duration?: number;
}

function getInitialTransform(direction: Direction): string {
  switch (direction) {
    case "left":  return "translateX(-40px)";
    case "right": return "translateX(40px)";
    case "scale": return "scale(0.92)";
    case "fade":  return "none";
    default:      return "translateY(36px)";
  }
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold,
  duration = 700,
}: AnimateInProps) {
  const [ref, inView] = useInView(threshold);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : getInitialTransform(direction),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
