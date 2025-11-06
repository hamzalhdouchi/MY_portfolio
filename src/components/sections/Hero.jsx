import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const roles = [
    'Full Stack Developer',
    'Freelancer',
    'Tech Enthusiast',
    'Problem Solver',
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.23, 1, 0.32, 1] 
      },
    },
  };

  const socialLinks = [
    { icon: 'github', url: 'https://github.com/hamzalhdouchi', fab: true, color: '#00d9ff' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/hamza-lhadouchi', fab: true, color: '#0077b5' },
    { icon: 'phone', url: 'tel:+212684553285', fab: false, color: '#25d366' },
    { icon: 'envelope', url: 'mailto:hamzaalhadouchi@gmail.com', fab: false, color: '#ea4335' },
  ];

  // Updated skills from your CV
  const skills = ['React', 'Node.js', 'TypeScript', 'Laravel', 'MongoDB', 'Docker'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y, opacity }}
      >
        {/* Animated Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full mb-8"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm text-gray-300">Available for work</span>
        </motion.div>

        {/* Profile Image with Advanced 3D Effect */}
        <motion.div
          variants={itemVariants}
          className="relative w-56 h-56 mx-auto mb-8"
          style={{
            rotateY: mousePosition.x,
            rotateX: -mousePosition.y,
            transformStyle: 'preserve-3d',
          }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        >
          {/* Rotating rings */}
          <motion.div
            className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-4 border-2 border-purple-500/30 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />

          {/* Profile container */}
          <motion.div
            className="absolute inset-8 rounded-full border-4 border-cyan-500 overflow-hidden"
            animate={{
              boxShadow: [
                '0 0 20px rgba(0, 217, 255, 0.5)',
                '0 0 60px rgba(0, 217, 255, 0.8)',
                '0 0 40px rgba(168, 85, 247, 0.6)',
                '0 0 20px rgba(0, 217, 255, 0.5)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-cyan-500/40 to-transparent"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <i className="fas fa-user-astronaut text-7xl text-cyan-400 relative z-10" />
            </div>
          </motion.div>

          {/* Orbiting icons */}
          {[0, 120, 240].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center"
              style={{
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                rotate: [angle, angle + 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <motion.div
                style={{
                  x: '100px',
                }}
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <i className={`fas fa-${['code', 'rocket', 'star'][i]} text-white text-sm`} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Name with Advanced Gradient Animation */}
        <motion.div variants={itemVariants} className="mb-4">
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold">
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              HAMZA LHADOUCHI
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Rotating Role Title */}
        <motion.div
          variants={itemVariants}
          className="text-3xl md:text-5xl font-semibold mb-6 h-16 flex items-center justify-center"
        >
          <motion.span
            key={currentRole}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400"
          >
            {roles[currentRole]}
          </motion.span>
        </motion.div>

        {/* Updated Description from CV */}
        <motion.p 
          variants={itemVariants} 
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Fullstack Developer with experience in React, Laravel, and Java. Skilled in <span className="text-cyan-400 font-semibold">frontend and backend development</span> and <span className="text-purple-400 font-semibold">database design</span>
        </motion.p>

        {/* Skill Tags - Updated */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full text-sm font-medium text-gray-300"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              whileHover={{
                scale: 1.1,
                borderColor: 'rgba(0, 217, 255, 0.6)',
                backgroundColor: 'rgba(0, 217, 255, 0.1)',
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Enhanced Buttons with Ripple Effect */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <motion.a
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold overflow-hidden"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-white"
              initial={{ scale: 0, opacity: 0.5 }}
              whileHover={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <i className="fas fa-envelope" />
              Get In Touch
              <motion.i
                className="fas fa-arrow-right"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </span>
          </motion.a>

          <motion.a
            href="#projects"
            className="group relative px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold overflow-hidden"
            whileHover={{
              scale: 1.05,
              y: -5,
              borderColor: 'rgba(168, 85, 247, 0.8)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <i className="fas fa-code" />
              View Projects
              <motion.i
                className="fas fa-chevron-right"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </span>
          </motion.a>

        
        </motion.div>

        {/* Enhanced Social Icons */}
        <motion.div 
          variants={itemVariants} 
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.icon}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 text-2xl text-gray-400"
              whileHover={{
                scale: 1.2,
                borderColor: social.color,
                backgroundColor: `${social.color}20`,
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1 }}
            >
              <motion.div
                whileHover={{
                  rotate: [0, -15, 15, -15, 0],
                  color: social.color,
                }}
                transition={{ duration: 0.5 }}
              >
                <i className={`fa${social.fab ? 'b' : 's'} fa-${social.icon}`} />
              </motion.div>

              {/* Tooltip */}
              <motion.span
                className="absolute -top-10 bg-black/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 pointer-events-none"
                whileHover={{ opacity: 1, y: -5 }}
              >
                {social.icon.charAt(0).toUpperCase() + social.icon.slice(1)}
              </motion.span>
            </motion.a>
          ))}
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
        >
          {[
            { value: '2+', label: 'Months Exp.' },
            { value: '5+', label: 'Projects' },
            { value: '100%', label: 'Dedication' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative p-4 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + i * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 217, 255, 0.5)' }}
            >
              <motion.div
                className="text-3xl font-orbitron font-bold text-cyan-400 mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 + i * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
