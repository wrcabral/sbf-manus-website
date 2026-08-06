import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  icon: string;
}

const STATS: Stat[] = [
  { value: 15, suffix: "+", label: "Anos de Experiência", icon: "fa-calendar-check" },
  { value: 180, suffix: "+", label: "Empresas Atendidas", icon: "fa-building" },
  { value: 98, suffix: "%", label: "Clientes Satisfeitos", icon: "fa-star" },
  { value: 2.3, suffix: "M+", prefix: "R$", label: "Em Impostos Economizados", icon: "fa-piggy-bank" },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const isDecimal = target % 1 !== 0;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
}

function StatItem({ stat, started }: { stat: Stat; started: boolean }) {
  const count = useCountUp(stat.value, 1800, started);
  const isDecimal = stat.value % 1 !== 0;

  return (
    <div
      className="flex flex-col items-center text-center"
      style={{
        padding: "24px 16px",
        borderRadius: 16,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(186,152,99,0.12)",
        flex: 1,
        minWidth: 0,
      }}
    >
      <i
        className={`fas ${stat.icon}`}
        style={{ color: "rgba(186,152,99,0.6)", fontSize: 18, marginBottom: 10 }}
      />
      <p
        className="sbf-stat-number"
        style={{
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          lineHeight: 1,
          marginBottom: 4,
        }}
      >
        {stat.prefix && <span style={{ fontSize: "0.6em", marginRight: 2 }}>{stat.prefix}</span>}
        {isDecimal ? count.toFixed(1) : count}
        <span style={{ fontSize: "0.65em" }}>{stat.suffix}</span>
      </p>
      <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.8125rem", lineHeight: 1.4, margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4"
      style={{ gap: 12 }}
    >
      {STATS.map((stat) => (
        <StatItem key={stat.label} stat={stat} started={started} />
      ))}
    </div>
  );
}
