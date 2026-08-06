import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AnimationType = "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "fadeIn";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

const animationStyles: Record<AnimationType, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
  fadeInUp: {
    hidden: { opacity: 0, transform: "translateY(32px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  fadeInLeft: {
    hidden: { opacity: 0, transform: "translateX(-32px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  fadeInRight: {
    hidden: { opacity: 0, transform: "translateX(32px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  scaleIn: {
    hidden: { opacity: 0, transform: "scale(0.92)" },
    visible: { opacity: 1, transform: "scale(1)" },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

/**
 * Componente wrapper que anima seus filhos quando entram na viewport.
 * Usa IntersectionObserver via useScrollAnimation hook.
 *
 * @example
 * <ScrollReveal animation="fadeInUp" delay={200}>
 *   <MyCard />
 * </ScrollReveal>
 */
export default function ScrollReveal({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 600,
  threshold = 0.12,
  className,
  style,
  as: Tag = "div",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation(threshold);
  const anim = animationStyles[animation];

  const combinedStyle: React.CSSProperties = {
    transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
    ...(isVisible ? anim.visible : anim.hidden),
    ...style,
  };

  return (
    // @ts-ignore
    <Tag ref={ref} className={className} style={combinedStyle}>
      {children}
    </Tag>
  );
}
