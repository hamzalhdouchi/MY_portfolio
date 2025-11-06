import { motion } from 'framer-motion';
import { useMemo } from 'react';

export const ParticleSystem = ({ count = 50 }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: 'radial-gradient(circle, rgba(0, 217, 255, 0.8), transparent)',
          }}
          animate={{
            y: [-20, -40, -20],
            x: [10, -10, 15, 10],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.6, 0.8, 0.4, 0.7, 0.6],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
