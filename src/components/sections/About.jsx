import { motion, useTransform, useScroll } from 'framer-motion';
import { RevealSection } from '../animations/RevealSection';
import { useState, useRef } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const stats = [
    { 
      value: '2+', 
      label: 'Years Experience',
      icon: 'calendar-check',
      color: 'from-cyan-400 to-blue-500',
      description: 'Professional Development'
    },
    { 
      value: '50+', 
      label: 'Projects Completed',
      icon: 'code-branch',
      color: 'from-purple-400 to-pink-500',
      description: 'Successful Deliveries'
    },
    { 
      value: '7+', 
      label: 'Happy Clients',
      icon: 'users',
      color: 'from-green-400 to-emerald-500',
      description: 'Worldwide Partners'
    },
    { 
      value: '100%', 
      label: 'Success Rate',
      icon: 'award',
      color: 'from-yellow-400 to-orange-500',
      description: 'Quality Assurance'
    },
  ];

  const skills = [
    { name: 'Frontend Development', percentage: 95, icon: 'laptop-code' },
    { name: 'Backend Development', percentage: 90, icon: 'server' },
    { name: 'UI/UX Design', percentage: 85, icon: 'palette' },
    { name: 'Problem Solving', percentage: 98, icon: 'lightbulb' },
  ];

  const achievements = [
    { icon: 'trophy', title: 'Best Developer Award 2024', org: 'Tech Summit' },
    { icon: 'certificate', title: 'AWS Certified Solutions Architect', org: 'Amazon' },
    { icon: 'medal', title: 'Top Rated Freelancer', org: 'Upwork' },
    { icon: 'star', title: '5.0 Client Rating', org: 'Fiverr' },
  ];

  const tabs = [
    { id: 'about', label: 'About Me', icon: 'user' },
    { id: 'skills', label: 'Skills', icon: 'code' },
    { id: 'achievements', label: 'Achievements', icon: 'trophy' },
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden" ref={containerRef}>
      {/* ===== ENHANCED ANIMATED BACKGROUND LAYERS ===== */}
      
      {/* Large Gradient Orb 1 - Top Left */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ y }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Large Gradient Orb 2 - Bottom Right */}
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Gradient Orb 3 - Center */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/8 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: ['-50%', '-45%', '-55%', '-50%'],
          y: ['-50%', '-45%', '-55%', '-50%'],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated Mesh Grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 217, 255, 0.05), transparent 70%)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* ===== END ANIMATED BACKGROUND ===== */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <RevealSection>
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <i className="fas fa-user-circle text-6xl text-cyan-400" />
            </motion.div>
            
            <motion.h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </motion.h2>
            
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            
            <motion.p
              className="mt-4 text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Passionate developer crafting exceptional digital experiences
            </motion.p>
          </div>
        </RevealSection>

        {/* Interactive Tabs */}
        <RevealSection delay={0.2}>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`fas fa-${tab.icon}`} />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </RevealSection>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'about' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: 3D Card with Image */}
              <RevealSection delay={0.2}>
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Glowing border effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                  
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-3xl p-8 overflow-hidden">
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                      <motion.div
                        className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mb-6"
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(0, 217, 255, 0.5)',
                            '0 0 40px rgba(168, 85, 247, 0.8)',
                            '0 0 20px rgba(0, 217, 255, 0.5)',
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <i className="fas fa-code text-5xl text-white" />
                      </motion.div>

                      <h3 className="text-2xl font-orbitron font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Hamza Lhadouchi
                      </h3>
                      
                      <p className="text-gray-400 text-center">
                        Full Stack Developer | Tech Enthusiast
                      </p>

                      <div className="flex justify-center gap-4 pt-4">
                        <motion.div
                          className="px-4 py-2 bg-cyan-500/20 rounded-full text-sm"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 217, 255, 0.3)' }}
                        >
                          <i className="fas fa-map-marker-alt mr-2" />
                          Morocco
                        </motion.div>
                        <motion.div
                          className="px-4 py-2 bg-green-500/20 rounded-full text-sm"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 197, 94, 0.3)' }}
                        >
                          <i className="fas fa-circle text-green-400 text-xs mr-2" />
                          Available
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </RevealSection>

              {/* Right: Description */}
              <RevealSection delay={0.4}>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                      <motion.i
                        className="fas fa-rocket"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      My Journey
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      I am a passionate <span className="text-cyan-400 font-semibold">Full Stack Developer</span> with expertise in building modern, scalable web applications. I specialize in creating seamless user experiences and robust backend systems.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                      <motion.i
                        className="fas fa-lightbulb"
                        animate={{ rotate: [0, 20, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      My Approach
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean code, innovative solutions, and attention to detail. My goal is to deliver high-quality products that exceed expectations.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex gap-4 pt-4 flex-wrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.a
                      href="#contact"
                      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold flex items-center gap-2"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-download" />
                      Download CV
                    </motion.a>

                    <motion.a
                      href="#contact"
                      className="px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold flex items-center gap-2"
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        backgroundColor: 'rgba(0, 217, 255, 0.1)' 
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-envelope" />
                      Contact Me
                    </motion.a>
                  </motion.div>
                </div>
              </RevealSection>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <RevealSection key={skill.name} delay={index * 0.1}>
                  <motion.div
                    className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-xl p-6"
                    whileHover={{ scale: 1.02, borderColor: 'rgba(0, 217, 255, 0.5)' }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        <i className={`fas fa-${skill.icon} text-white text-xl`} />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                        <p className="text-cyan-400 text-sm">{skill.percentage}% Proficiency</p>
                      </div>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </RevealSection>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <RevealSection key={achievement.title} delay={index * 0.1}>
                  <motion.div
                    className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-xl p-6"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: 'rgba(168, 85, 247, 0.5)',
                      boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0"
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(251, 191, 36, 0.5)',
                            '0 0 40px rgba(251, 191, 36, 0.8)',
                            '0 0 20px rgba(251, 191, 36, 0.5)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <i className={`fas fa-${achievement.icon} text-2xl text-white`} />
                      </motion.div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-purple-400">{achievement.org}</p>
                      </div>
                    </div>
                  </motion.div>
                </RevealSection>
              ))}
            </div>
          )}
        </motion.div>

        {/* Stats Grid */}
        <RevealSection delay={0.6}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-xl p-6 text-center overflow-hidden group"
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: 'rgba(0, 217, 255, 0.5)',
                  y: -10
                }}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 200
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  className="mb-4"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <i className={`fas fa-${stat.icon} text-4xl text-cyan-400`} />
                </motion.div>

                {/* Value with counter animation */}
                <motion.div
                  className={`text-5xl font-orbitron font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <div className="text-gray-400 font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default About;
