import { useEffect, useRef, useState } from "react";

/**
 * Hook para animar elementos quando entram na viewport.
 * Baseado em IntersectionObserver — sem dependências externas.
 *
 * @param threshold - Percentual do elemento visível para disparar (0.0 a 1.0)
 * @param rootMargin - Margem ao redor da viewport (ex: "-50px")
 * @param once - Se true, anima apenas uma vez (padrão: true)
 */
export function useScrollAnimation(
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
  once = true
) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

/**
 * Hook para contador animado — incrementa de 0 até `end` quando visível.
 *
 * @param end - Valor final do contador
 * @param duration - Duração da animação em ms (padrão: 2000)
 * @param isVisible - Se o elemento está visível (use com useScrollAnimation)
 */
export function useAnimatedCounter(
  end: number,
  duration = 2000,
  isVisible = false
) {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(startValue + (end - startValue) * eased);

      setCount(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isVisible, end, duration]);

  return count;
}
