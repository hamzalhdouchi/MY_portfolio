import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loading = ({ isLoading = true, duration = 3 }) => {
  const [showLoader, setShowLoader] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, duration]);

  if (!showLoader) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated Logo/Icon */}
        <motion.div
          className="mb-8 flex justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-cyan-500/50"
            animate={{
              boxShadow: [
                '0 0 20px rgba(0, 217, 255, 0.5)',
                '0 0 40px rgba(168, 85, 247, 0.8)',
                '0 0 20px rgba(0, 217, 255, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <i className="fas fa-code text-4xl text-white" />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          HAMZA <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">LHADOUCHI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Full Stack Developer
        </motion.p>

        {/* Animated Loading Bars */}
        <div className="flex justify-center items-end gap-2 mb-8 h-12">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-2 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full"
              animate={{ height: ['8px', '32px', '8px'] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

        {/* Loading Message */}
        <motion.div className="flex items-center justify-center gap-2">
          <span className="text-sm text-gray-400">Loading</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm text-cyan-400 font-semibold"
          >
            •••
          </motion.span>
        </motion.div>

        {/* Floating Dots Animation */}
        <div className="mt-12 flex justify-center gap-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-cyan-400"
              animate={{
                y: [-8, 8, -8],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div className="mt-8 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: duration, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* Top Accent */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default Loading;
