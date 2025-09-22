import React, { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface FadeInOnScrollProps {
  children: ReactNode;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 85%', 
            toggleActions: 'play none none none',
          },
        }
      );
    }, elementRef);

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export default FadeInOnScroll;