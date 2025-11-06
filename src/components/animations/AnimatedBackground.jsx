import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ 
        zIndex: -1,  // Explicitly set z-index
        isolation: 'isolate'  // Create new stacking context
      }}
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-950/30 to-purple-950/30" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(0, 217, 255, 0.15), transparent 50%)',
        }}
        animate={{
          x: ['-10%', '10%', '-10%'],
          y: ['-10%', '10%', '-10%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.12), transparent 50%)',
        }}
        animate={{
          x: ['10%', '-10%', '10%'],
          y: ['10%', '-10%', '10%'],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Mesh grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};
