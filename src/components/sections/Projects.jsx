import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealSection } from '../animations/RevealSection';
import { useRef } from 'react';

// Import your images
import teleexpertiseImg from '../../assets/images/medaviz-post-teleexpertise.jpg';
import deliveryImg from '../../assets/images/Courier-service_Delivery-service_headline-e1728031084239-600x338.jpg';
import bankImg from '../../assets/images/360_F_808994683_OUZEZt581lOYP0H2zGRXMZKJ5g87jkjx.jpg';
import restaurantImg from '../../assets/images/Besoins-clients-en-restauration.jpg';
import touriStayImg from '../../assets/images/visiter-le-maroc-1079x720.jpg';
import parkImg from '../../assets/images/Park.jpeg';

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const projects = [
    {
      title: 'Plateforme de Télé-expertise Médicale',
      description: 'Système de consultation médicale à distance permettant aux généralistes de solliciter l\'avis de spécialistes. Gestion des patients, consultations et expertise médicale avec traçabilité complète.',
      technologies: ['Java 8+', 'JSP', 'JPA/Hibernate', 'MySQL 8', 'Apache Tomcat'],
      image: teleexpertiseImg,
      category: 'Healthcare',
      github: 'https://github.com/hamzalhdouchi/Plateforme-de-tele-expertise-m-dicale.git',
    },
    {
      title: 'Smart Delivery Management System (SDMS)',
      description: 'Plateforme complète de gestion logistique pour SmartLogi. Gestion des collectes, stocks, planification des tournées et suivi des colis en temps réel avec traçabilité.',
      technologies: ['Spring Boot', 'PostgreSQL', 'MapStruct', 'Swagger', 'Maven'],
      image: deliveryImg,
      category: 'Logistics',
      github: 'https://github.com/hamzalhdouchi/SmartLogi-Delivery-Management-System-V-0.1.0.git',
    },
    {
      title: 'Bank Transaction Analysis & Anomaly Detection',
      description: 'Système bancaire complet pour analyse des transactions, détection d\'anomalies, identification des comptes inactifs et génération de rapports financiers détaillés.',
      technologies: ['Java 17', 'Stream API', 'PostgreSQL', 'JDBC', 'Maven'],
      image: bankImg,
      category: 'Finance',
      github: 'https://github.com/hamzalhdouchi/Banque_Brif3.git',
    },
    {
      title: 'Application Web Services Restauration',
      description: 'Plateforme digitale complète pour restaurant : commandes par table via QR code, paiements avancés, livraisons à domicile avec tracking en temps réel et réservations.',
      technologies: ['React.js', 'PHP 10', 'PostgreSQL', 'PayPal', 'REST API'],
      image: restaurantImg,
      category: 'Restaurant',
      github: 'https://github.com/hamzalhdouchi/FILL_rouge.git',
    },
    {
      title: 'TouriStay 2030',
      description: 'Plateforme de location d\'hébergements pour touristes au Mondial 2030. Gestion des annonces, recherche avancée, favoris, paiements sécurisés et modération administrative.',
      technologies: ['React.js', 'PHP 10', 'PostgreSQL', 'PayPal', 'REST API'],
      image: touriStayImg,
      category: 'Tourism',
      github: 'https://github.com/hamzalhdouchi/TouriStay-2030.git',
    },
    {
      title: 'Park\'It - Parking Management API',
      description: 'API REST complète pour gestion des parkings. Recherche de places disponibles, réservation, suivi des réservations et gestion d\'accès avec Laravel.',
      technologies: ['Laravel', 'PostgreSQL', 'REST API', 'Sanctum', 'PHP'],
      image: parkImg,
      category: 'IoT/Smart City',
      github: 'https://github.com/hamzalhdouchi/parking.git',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden" ref={containerRef}>
      {/* Background animations remain the same */}
      <motion.div
        className="absolute top-40 -left-20 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ y }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-40 -right-20 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: ['0%', '20%', '0%'],
          y: ['0%', '-20%', '0%'],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

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

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['</>','{}','[]','()','<>'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/10 text-4xl font-mono"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <RevealSection>
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4"
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <i className="fas fa-laptop-code text-6xl text-purple-400" />
            </motion.div>

            <motion.h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
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
              Explore my innovative projects and professional solutions
            </motion.p>
          </div>
        </RevealSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <RevealSection key={project.title} delay={index * 0.1}>
              <motion.div 
                className="group bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-xl overflow-hidden h-full hover:border-cyan-500/50 transition-all duration-300 relative flex flex-col"
                whileHover={{ scale: 1.03, y: -10 }}
              >
                {/* Project Image with Overlay */}
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/90 backdrop-blur-sm rounded-full text-xs font-semibold"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.category}
                  </motion.div>

                  {/* Hover Overlay with Links */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/90 to-purple-500/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-github text-xl text-white" />
                    </motion.a>
                    
                  </motion.div>
                </div>

                {/* Content - Flex Grow */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <motion.h3 
                    className="text-2xl font-orbitron font-bold text-cyan-400 mb-3"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: 'rgba(0, 217, 255, 0.2)',
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons - Always at Bottom */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 border-2 border-cyan-500 rounded-lg text-center font-semibold text-sm hover:bg-cyan-500/10 transition-colors text-white"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fab fa-github mr-2" />
                      Code
                    </motion.a>
                
                  </div>
                </div>

                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(0, 217, 255, 0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </RevealSection>
          ))}
        </div>

        {/* View All Projects Button */}
        <RevealSection delay={0.6}>
          <div className="text-center mt-16">
            <motion.a
              href="https://github.com/hamzalhdouchi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-lg text-white"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-github text-2xl" />
              View All Projects on GitHub
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

export default Projects;
