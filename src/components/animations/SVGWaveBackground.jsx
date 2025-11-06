import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const SVGWaveBackground = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 217, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
          </linearGradient>
          
          <linearGradient id="waveGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.25)" />
            <stop offset="100%" stopColor="rgba(0, 217, 255, 0.15)" />
          </linearGradient>

          {/* Blur filter */}
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>
        </defs>

        {/* Wave Layer 1 */}
        <motion.path
          d="M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z"
          fill="url(#waveGradient1)"
          filter="url(#blur)"
          opacity="0.6"
          animate={prefersReducedMotion ? {} : {
            d: [
              "M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z",
              "M0,450 Q360,350 720,450 T1440,450 L1440,800 L0,800 Z",
              "M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Wave Layer 2 */}
        <motion.path
          d="M0,500 Q360,450 720,500 T1440,500 L1440,800 L0,800 Z"
          fill="url(#waveGradient2)"
          filter="url(#blur)"
          opacity="0.4"
          animate={prefersReducedMotion ? {} : {
            d: [
              "M0,500 Q360,450 720,500 T1440,500 L1440,800 L0,800 Z",
              "M0,550 Q360,500 720,550 T1440,550 L1440,800 L0,800 Z",
              "M0,500 Q360,450 720,500 T1440,500 L1440,800 L0,800 Z",
            ],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Wave Layer 3 */}
        <motion.path
          d="M0,600 Q360,550 720,600 T1440,600 L1440,800 L0,800 Z"
          fill="url(#waveGradient1)"
          filter="url(#blur)"
          opacity="0.3"
          animate={prefersReducedMotion ? {} : {
            d: [
              "M0,600 Q360,550 720,600 T1440,600 L1440,800 L0,800 Z",
              "M0,650 Q360,600 720,650 T1440,650 L1440,800 L0,800 Z",
              "M0,600 Q360,550 720,600 T1440,600 L1440,800 L0,800 Z",
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        />
      </svg>
    </div>
  );
};
