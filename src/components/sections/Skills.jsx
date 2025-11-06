import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealSection } from '../animations/RevealSection';
import { useRef } from 'react';

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'laptop-code',
      color: 'from-cyan-400 to-blue-500',
      borderColor: 'cyan',
      skills: [
        { name: 'HTML5 / CSS3', percentage: 95, icon: 'html5' },
        { name: 'JavaScript / TypeScript', percentage: 90, icon: 'js-square' },
        { name: 'React.js', percentage: 95, icon: 'react' },
        { name: 'React Native', percentage: 85, icon: 'mobile' },
        { name: 'Angular', percentage: 80, icon: 'angular' },
        { name: 'Tailwind CSS', percentage: 95, icon: 'palette' },
        { name: 'Bootstrap', percentage: 90, icon: 'bootstrap' },
      ],
    },
    {
      title: 'Backend',
      icon: 'server',
      color: 'from-purple-400 to-pink-500',
      borderColor: 'purple',
      skills: [
        { name: 'PHP / Laravel', percentage: 90, icon: 'php' },
        { name: 'Node.js', percentage: 85, icon: 'node-js' },
        { name: 'Java / Spring Boot', percentage: 85, icon: 'java' },
        { name: 'Spring Framework', percentage: 85, icon: 'spring' },
        { name: 'Spring Security', percentage: 80, icon: 'lock' },
        { name: 'Spring Data JPA', percentage: 80, icon: 'database' },
        { name: 'J2EE', percentage: 75, icon: 'code' },
        { name: 'REST APIs', percentage: 90, icon: 'network-wired' },
        { name: 'C Programming', percentage: 75, icon: 'c' },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: 'database',
      color: 'from-green-400 to-emerald-500',
      borderColor: 'green',
      skills: [
        { name: 'MySQL', percentage: 90, icon: 'database' },
        { name: 'PostgreSQL', percentage: 85, icon: 'database' },
        { name: 'PhpMyAdmin', percentage: 85, icon: 'database' },
        { name: 'AWS (S3, RDS, RedShift)', percentage: 80, icon: 'aws' },
        { name: 'AWS Aurora', percentage: 75, icon: 'cloud' },
        { name: 'Cloud Services', percentage: 80, icon: 'cloud' },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: 'tools',
      color: 'from-yellow-400 to-orange-500',
      borderColor: 'yellow',
      skills: [
        { name: 'Git / GitHub', percentage: 90, icon: 'git' },
        { name: 'Docker', percentage: 80, icon: 'docker' },
        { name: 'DevOps', percentage: 75, icon: 'cogs' },
        { name: 'CI/CD Pipeline', percentage: 80, icon: 'rocket' },
        { name: 'Deployment', percentage: 85, icon: 'arrow-up' },
        { name: 'Laragon / XAMPP', percentage: 85, icon: 'server' },
      ],
    },
    {
      title: 'Design & UI/UX',
      icon: 'palette',
      color: 'from-pink-400 to-rose-500',
      borderColor: 'pink',
      skills: [
        { name: 'Figma', percentage: 80, icon: 'figma' },
        { name: 'Adobe XD', percentage: 75, icon: 'adobe' },
      ],
    },
    {
      title: 'Project Management',
      icon: 'chart-bar',
      color: 'from-indigo-400 to-blue-600',
      borderColor: 'indigo',
      skills: [
        { name: 'Jira', percentage: 85, icon: 'jira' },
        { name: 'Trello', percentage: 88, icon: 'trello' },
        { name: 'GitHub Projects', percentage: 85, icon: 'github' },
        { name: 'Scrum / Agile', percentage: 85, icon: 'users' },
      ],
    },
    {
      title: 'Architecture & Patterns',
      icon: 'cube',
      color: 'from-teal-400 to-cyan-600',
      borderColor: 'teal',
      skills: [
        { name: 'OOP (Object-Oriented)', percentage: 90, icon: 'cube' },
        { name: 'MVC Architecture', percentage: 90, icon: 'layer-group' },
        { name: 'DAO Pattern', percentage: 85, icon: 'network-wired' },
        { name: 'DTO Pattern', percentage: 85, icon: 'exchange-alt' },
      ],
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden" ref={containerRef}>
      {/* ===== ENHANCED ANIMATED BACKGROUND ===== */}
      
      {/* Large Gradient Orb 1 */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ y }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Large Gradient Orb 2 */}
      <motion.div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Skill Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['</>','{ }','[ ]','::','->'].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/10 text-5xl font-mono font-bold"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 2) * 50}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              opacity: [0.05, 0.15, 0.05],
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
              <i className="fas fa-code text-6xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" />
            </motion.div>

            <motion.h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
              Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
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
              Comprehensive expertise across full-stack development, cloud services, and modern technologies
            </motion.p>
          </div>
        </RevealSection>

        {/* Skills Grid - 2 columns on desktop for better layout */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={itemVariants}>
              <motion.div
                className="group relative bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/20 rounded-2xl p-8 overflow-hidden h-full"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(0, 217, 255, 0.5)',
                  y: -10
                }}
              >
                {/* Animated Background Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Rotating Border Glow */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-20 group-hover:opacity-40`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}
                      animate={{
                        boxShadow: [
                          `0 0 10px rgba(0, 217, 255, 0.3)`,
                          `0 0 20px rgba(0, 217, 255, 0.6)`,
                          `0 0 10px rgba(0, 217, 255, 0.3)`,
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    >
                      <i className={`fas fa-${category.icon} text-2xl text-white`} />
                    </motion.div>

                    <div>
                      <h3 className={`text-2xl font-orbitron font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{category.skills.length} Skills</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.05 + skillIndex * 0.05 }}
                      >
                        {/* Skill Name */}
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                          <motion.span
                            className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-bold text-sm`}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.1 }}
                          >
                            {skill.percentage}%
                          </motion.span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2.5 bg-gray-800 rounded-full overflow-hidden">
                          {/* Background gradient */}
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,
                              delay: categoryIndex * 0.05 + skillIndex * 0.05,
                              ease: 'easeOut'
                            }}
                          >
                            {/* Shimmer Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                          </motion.div>

                          {/* Glow Effect */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${category.color} blur opacity-0`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%`, opacity: 0.4 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,
                              delay: categoryIndex * 0.05 + skillIndex * 0.05,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${category.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-3xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.1, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <RevealSection delay={0.6}>
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: 'graduation-cap', value: 'Full Stack', label: 'Expertise' },
              { icon: 'rocket', value: '50+', label: 'Technologies' },
              { icon: 'star', value: '7', label: 'Categories' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="relative bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-6 text-center"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(0, 217, 255, 0.5)' }}
              >
                <motion.i
                  className={`fas fa-${stat.icon} text-3xl text-cyan-400 mb-3`}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </RevealSection>
      </div>
    </section>
  );
};

export default Skills;
