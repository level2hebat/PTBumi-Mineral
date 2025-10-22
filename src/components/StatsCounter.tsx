'use client';
import react from 'react'
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

function CounterItem({ label, value, suffix = '', prefix = '' }: Stat) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-amber-500 mb-2">
        <span className="text-5xl md:text-6xl font-heading">
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </span>
      </div>
      <p className="text-gray-400">{label}</p>
    </motion.div>
  );
}

export function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      {stats.map((stat, index) => (
        <CounterItem key={index} {...stat} />
      ))}
    </div>
  );
}
