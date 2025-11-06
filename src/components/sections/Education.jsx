import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealSection } from '../animations/RevealSection';
import { useRef } from 'react';

// Import education logos
import youCodeLogo from '../../assets/images/youcode.jpg';
import cadiAyyad from '../../assets/images/cadi-ayyad.jpg';
import fssmLogo from '../../assets/images/fssm-log.jpeg';
import sidiAbdellah from '../../assets/images/sidi-abdellah.jpeg';

const Education = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);


  // Updated with your real education
  const education = [
    {
      degree: 'YouCode',
      institution: 'UM6P (Université Mohammed VI Polytechnique)',
      period: '2024 - 2026 (In Progress)',
      location: 'Safi, Morocco',
      description: 'Intensive full-stack development. Training in modern web technologies, software engineering practices, and professional development.',
      logo: youCodeLogo,
      grade: 'In Progress',
      highlights: [
        'Full Stack Web Development',
        'React & Modern Frameworks',
        'Backend Development',
        'Agile & Scrum Methodology',
      ],
    },
    {
      degree: 'Diplôme Universitaire de Gestion (DEUG)',
      institution: 'Université Cadi Ayyad',
      period: '2021 - 2023',
      location: 'Marrakech, Morocco',
      description: 'University diploma in Management and Economics with focus on business fundamentals and organizational management.',
      logo: cadiAyyad,
      grade: 'Completed',
      highlights: [
        'Management Fundamentals',
        'Economics & Business',
        'Organizational Studies',
        'Business Analytics',
      ],
    },
    {
      degree: 'Sciences Biologiques',
      institution: 'Faculté des Sciences Semlalia (FSSM)',
      period: '2020 - 2021',
      location: 'Marrakech, Morocco',
      description: 'Higher education in Biological Sciences with comprehensive study of biology, chemistry, and related disciplines.',
      logo: fssmLogo,
      grade: 'Completed',
      highlights: [
        'Biological Sciences',
        'Chemistry & Laboratory Work',
        'Life Sciences Research',
        'Scientific Methodology',
      ],
    },
    {
      degree: 'Baccalauréat en Sciences de la Vie et de la Terre (SVT)',
      institution: 'Lycée Sidi Abdellah Ghiat',
      period: '2019 - 2020',
      location: 'Morocco',
      description: 'Secondary education qualification in Life and Earth Sciences, establishing foundational knowledge in natural sciences.',
      logo: sidiAbdellah,
      grade: 'Completed',
      highlights: [
        'Life Sciences (SVT)',
        'Earth Sciences',
        'Biology Fundamentals',
        'Scientific Principles',
      ],
    },
  ];

  // Updated with your real certifications
  const certifications = [
    {
      name: 'AWS Cloud Technical Essentials',
      provider: 'Amazon Web Services',
      year: 'July 2025',
      icon: 'aws',
      color: 'from-orange-400 to-yellow-500',
      skills: 'Cloud Infrastructure',
    },
    {
      name: 'Architecting Solutions on AWS',
      provider: 'Amazon Web Services',
      year: 'July 2025',
      icon: 'aws',
      color: 'from-orange-400 to-yellow-500',
      skills: 'Cloud Architecture',
    },
    {
      name: 'Migrating to the AWS Cloud',
      provider: 'Amazon Web Services',
      year: 'May 2025',
      icon: 'aws',
      color: 'from-orange-400 to-yellow-500',
      skills: 'Cloud Migration',
    },
    {
      name: 'Object Oriented Programming in Java',
      provider: 'UC San Diego - Rady School',
      year: 'July 2025',
      icon: 'java',
      color: 'from-red-400 to-orange-500',
      skills: 'OOP, Java',
    },
  ];

  const skills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'System Design', level: 90 },
    { name: 'Team Collaboration', level: 88 },
    { name: 'Communication', level: 85 },
  ];

  return (
    <section id="education" className="py-20 px-6 relative overflow-hidden" ref={containerRef}>
      {/* ===== ENHANCED ANIMATED BACKGROUND LAYERS ===== */}
      
      {/* Large Gradient Orb 1 - Top Right */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ y }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Large Gradient Orb 2 - Bottom Left */}
      <motion.div
        className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.7, 0.5],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Gradient Orb 3 - Center */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: ['0%', '30%', '-30%', '0%'],
          y: ['0%', '-30%', '30%', '0%'],
          scale: [1, 1.3, 0.9, 1],
          opacity: [0.2, 0.5, 0.3, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '80px 80px'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating Academic Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['📚', '🎓', '📖', '✏️', '🏆'].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl opacity-10"
            style={{
              left: `${15 + i * 18}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              opacity: [0.05, 0.15, 0.05],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Animated Dots Network */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d9ff" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <motion.line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="url(#grad1)"
          strokeWidth="2"
          animate={{
            y1: ['-10%', '110%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </svg>

      {/* ===== END ANIMATED BACKGROUND ===== */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <RevealSection>
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4"
              animate={{
                y: [-10, 0, -10],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <i className="fas fa-graduation-cap text-6xl text-purple-400" />
            </motion.div>

            <motion.h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
              Education & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
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
              Academic background and professional certifications
            </motion.p>
          </div>
        </RevealSection>

        {/* Education Cards */}
        <div className="mb-16 space-y-8">
          {education.map((edu, index) => (
            <RevealSection key={edu.degree} delay={index * 0.15}>
              <motion.div
                className="group relative bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/20 rounded-3xl p-8 md:p-10 overflow-hidden"
                whileHover={{ 
                  scale: 1.02, 
                  borderColor: 'rgba(0, 217, 255, 0.5)',
                  y: -10
                }}
              >
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Rotating Border Effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-10 group-hover:opacity-30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />

                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                  {/* University Logo */}
                  <motion.div
                    className="flex-shrink-0 w-32 h-32 rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/20 mx-auto md:mx-0 bg-gray-800"
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
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div>
                          <motion.h3 
                            className="text-2xl md:text-3xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2"
                            whileHover={{ x: 5 }}
                          >
                            {edu.degree}
                          </motion.h3>
                          <p className="text-xl text-purple-400 mb-2">{edu.institution}</p>
                          
                          <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                            <motion.span 
                              className="flex items-center gap-1"
                              whileHover={{ scale: 1.1, color: '#00d9ff' }}
                            >
                              <i className="fas fa-calendar text-cyan-400" />
                              {edu.period}
                            </motion.span>
                            <motion.span 
                              className="flex items-center gap-1"
                              whileHover={{ scale: 1.1, color: '#a855f7' }}
                            >
                              <i className="fas fa-map-marker-alt text-purple-400" />
                              {edu.location}
                            </motion.span>
                          </div>
                        </div>

                        {/* Grade Badge */}
                        <motion.div
                          className={`px-4 py-2 bg-gradient-to-r ${edu.period.includes('In Progress') ? 'from-green-500/20 to-emerald-500/20 border-green-500/30' : 'from-cyan-500/20 to-purple-500/20 border-cyan-500/30'} border rounded-full`}
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className={edu.period.includes('In Progress') ? 'text-green-400' : 'text-cyan-400'} style={{ fontWeight: 'semibold' }}>
                            {edu.grade}
                          </span>
                        </motion.div>
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                        <i className="fas fa-star text-yellow-400" />
                        Key Highlights:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {edu.highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-300 p-2 rounded-lg bg-cyan-500/5 border border-cyan-500/10"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            whileHover={{ 
                              x: 5,
                              backgroundColor: 'rgba(0, 217, 255, 0.1)',
                              borderColor: 'rgba(0, 217, 255, 0.3)'
                            }}
                          >
                            <motion.i
                              className="fas fa-check-circle text-cyan-400 flex-shrink-0"
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                            />
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </RevealSection>
          ))}
        </div>

        {/* Certifications Grid */}
        <RevealSection delay={0.4}>
          <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-lg border-2 border-purple-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
              animate={{
                backgroundPosition: ['0px 0px', '30px 30px'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <div className="relative z-10">
              <motion.h3 
                className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-8 flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.i
                  className="fas fa-certificate text-purple-400"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Professional Certifications
                </span>
              </motion.h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="group relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-xl p-6 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring' }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      borderColor: 'rgba(168, 85, 247, 0.5)',
                      boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)'
                    }}
                  >
                    {/* Gradient Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      {/* Icon */}
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0`}
                        animate={{
                          boxShadow: [
                            '0 0 10px rgba(168, 85, 247, 0.3)',
                            '0 0 20px rgba(168, 85, 247, 0.6)',
                            '0 0 10px rgba(168, 85, 247, 0.3)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                      >
                        <i className={`fab fa-${cert.icon} text-2xl text-white`} />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-purple-400 text-sm mb-1">{cert.provider}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                          <i className="fas fa-calendar-check text-cyan-400" />
                          <span>{cert.year}</span>
                        </div>
                        <span className="inline-block px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs rounded">
                          {cert.skills}
                        </span>
                      </div>

                      {/* Verified Badge */}
                      <motion.div
                        className="absolute top-4 right-4"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <i className="fas fa-badge-check text-green-400 text-xl" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Soft Skills Section */}
              <div className="mt-12">
                <h4 className="text-2xl font-orbitron font-bold text-center text-cyan-400 mb-6">
                  Core Competencies
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-purple-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeOut' }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default Education;
