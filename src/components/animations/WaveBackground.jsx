import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const WaveBackground = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Respect user's motion preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Wave layer configurations for depth
  const waves = [
    {
      duration: 20,
      opacity: 0.15,
      blur: 'blur-xl',
      delay: 0,
      yOffset: '0%',
    },
    {
      duration: 15,
      opacity: 0.1,
      blur: 'blur-2xl',
      delay: 2,
      yOffset: '10%',
    },
    {
      duration: 25,
      opacity: 0.08,
      blur: 'blur-3xl',
      delay: 4,
      yOffset: '20%',
    },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Static gradient fallback for reduced motion users */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-950/20 to-purple-950/20" />

      {/* Animated waves - disabled if user prefers reduced motion */}
      {!prefersReducedMotion && waves.map((wave, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 ${wave.blur}`}
          style={{
            background: `radial-gradient(ellipse 150% 100% at 50% ${wave.yOffset}, 
              rgba(0, 217, 255, ${wave.opacity}), 
              transparent 70%)`,
            willChange: 'transform',
          }}
          animate={{
            x: ['-25%', '25%', '-25%'],
            y: ['-10%', '10%', '-10%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: wave.duration,
            delay: wave.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle mesh grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          willChange: prefersReducedMotion ? 'auto' : 'transform',
        }}
        animate={prefersReducedMotion ? {} : {
          x: [0, 60],
          y: [0, 60],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};
