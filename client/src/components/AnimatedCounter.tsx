import { useRef } from "react";
import { useScrollAnimation, useAnimatedCounter } from "@/hooks/useScrollAnimation";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Componente de contador animado que incrementa de 0 até `end`
 * quando o elemento entra na viewport.
 */
export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  className,
  style,
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const count = useAnimatedCounter(end, duration, isVisible);

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={className}
      style={style}
    >
      {prefix}{count}{suffix}
    </span>
  );
}
