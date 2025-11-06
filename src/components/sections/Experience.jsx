import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealSection } from '../animations/RevealSection';
import { useRef } from 'react';

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Updated with your internship data
  const experience = {
    company: 'AdLab Factory',
    position: 'Full Stack Developer Intern',
    period: '2024 - 2 Months',
    location: 'Morocco',
    description: 'Participated in designing, developing, and securing a comprehensive school management web platform for private Moroccan educational institutions. The system centralizes pedagogical, academic, and administrative processes into a single, ergonomic, secure, and online-accessible application.',
    logo: 'https://www.moncallcenter.ma/images/300/ca-dem7a8695a72kf67d9m219vj6gthjl06122024052450.jpg',
    skills: ['Laravel 9', 'MySQL 8', 'JavaScript', 'Bootstrap', 'Pusher', 'Google Maps API', 'Blade', 'Git'],
    achievements: [
      'Developed real-time messaging module between parents and teachers using Pusher',
      'Implemented driver geolocation system with Google Maps integration for bus tracking',
      'Refactored and optimized existing codebase for performance and security',
      'Built automated tests for dashboard functionality across all user roles',
      'Fixed critical bugs in absences, grades, and administrative modules',
      'Implemented XSS, CSRF, and SQL injection protection measures',
    ],
    responsibilities: [
      'Backend development with Laravel 9 and PHP (routes, controllers, role management)',
      'Database design and optimization with MySQL 8',
      'Frontend development with Blade templates, JavaScript, and Bootstrap',
      'Real-time communication implementation using Pusher',
      'Geolocation features with Google Maps JavaScript API',
      'Code review, testing, and security implementation',
      'Git version control and team collaboration',
      'Agile methodology with bi-weekly progress meetings',
    ],
  };

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden" ref={containerRef}>
      {/* ===== ENHANCED ANIMATED BACKGROUND LAYERS ===== */}
      
      {/* Large Gradient Orb 1 */}
      <motion.div
        className="absolute top-20 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ y }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Large Gradient Orb 2 */}
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-80, 80]) }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Code Symbols Floating */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['</>','{ }','[ ]','( )'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/10 text-5xl font-mono font-bold"
            style={{
              left: `${10 + i * 25}%`,
              top: `${15 + i * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* ===== END ANIMATED BACKGROUND ===== */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <RevealSection>
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <i className="fas fa-briefcase text-6xl text-cyan-400" />
            </motion.div>

            <motion.h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
              Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
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
              My internship experience as a Full Stack Developer
            </motion.p>
          </div>
        </RevealSection>

        {/* Single Experience Card - Featured */}
        <RevealSection delay={0.2}>
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="group relative bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/30 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-cyan-500/60 transition-all duration-500"
              whileHover={{ scale: 1.02, y: -10 }}
            >
              {/* Animated Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Rotating Border Glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Header with Logo */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                  {/* Company Logo */}
                  <motion.div
                    className="flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(0, 217, 255, 0.3)',
                        '0 0 40px rgba(168, 85, 247, 0.5)',
                        '0 0 20px rgba(0, 217, 255, 0.3)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <img
                      src={experience.logo}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Position Info */}
                  <div className="flex-1">
                    <motion.div
                      className="inline-block px-4 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm mb-3"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <i className="fas fa-circle text-green-400 text-xs mr-2 animate-pulse" />
                      Completed
                    </motion.div>

                    <motion.h3 
                      className="text-3xl md:text-4xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2"
                      whileHover={{ x: 5 }}
                    >
                      {experience.position}
                    </motion.h3>
                    
                    <p className="text-2xl text-purple-400 mb-3">{experience.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <motion.span 
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.1, color: '#00d9ff' }}
                      >
                        <i className="fas fa-calendar-alt text-cyan-400" />
                        {experience.period}
                      </motion.span>
                      <motion.span 
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.1, color: '#a855f7' }}
                      >
                        <i className="fas fa-map-marker-alt text-purple-400" />
                        {experience.location}
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {experience.description}
                </p>

                {/* Skills Tags */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                    <i className="fas fa-code text-cyan-400" />
                    Technologies & Tools:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                        whileHover={{
                          scale: 1.15,
                          backgroundColor: 'rgba(0, 217, 255, 0.2)',
                          borderColor: 'rgba(0, 217, 255, 0.6)',
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Two Column Layout for Achievements & Responsibilities */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                      <motion.i
                        className="fas fa-trophy"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {experience.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.i
                            className="fas fa-check-circle text-cyan-400 mt-1 flex-shrink-0"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                          />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                      <motion.i
                        className="fas fa-tasks"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      Core Responsibilities
                    </h4>
                    <div className="space-y-3">
                      {experience.responsibilities.map((responsibility, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.i
                            className="fas fa-arrow-right text-purple-400 mt-1 flex-shrink-0"
                            whileHover={{ x: 3 }}
                          />
                          <span>{responsibility}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full"
                animate={{
                  scale: [1.3, 1, 1.3],
                  opacity: [0.6, 0.3, 0.6],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </RevealSection>

        {/* Call to Action */}
        <RevealSection delay={0.6}>
          <div className="text-center mt-16">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-handshake text-2xl" />
              Let's Work Together
              <motion.i
                className="fas fa-arrow-right"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default Experience;
