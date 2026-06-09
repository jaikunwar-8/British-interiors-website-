import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number; // duration in ms
  delay?: number; // delay in ms
  distance?: string; // transition offset distance
  threshold?: number;
  once?: boolean;
  id?: string;
  key?: React.Key;
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  duration = 300,
  delay = 0,
  distance = '3%',
  threshold = 0.1,
  once = true,
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && el) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // trigger shortly before element completely hits viewport
      }
    );

    observer.observe(el);

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [threshold, once]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `translateY(${distance})`;
        case 'down':
          return `translateY(-${distance})`;
        case 'left':
          return `translateX(${distance})`;
        case 'right':
          return `translateX(-${distance})`;
        default:
          return 'none';
      }
    }
    return 'translate(0, 0)';
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={ref} className={className} style={style} {...rest}>
      {children}
    </div>
  );
}
