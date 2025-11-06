import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const SkillBar = ({ name, percentage, color = 'cyan' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-gray-300">{name}</span>
        <span className={`text-${color}-400`}>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r from-${color}-500 to-${color}-400 rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{
            duration: 2,
            ease: [0.23, 1, 0.32, 1],
            delay: 0.2,
          }}
        />
      </div>
    </div>
  );
};
