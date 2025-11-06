import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealSection } from '../animations/RevealSection';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'a9720z7RdUEaAqtV7');
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_aissbsb',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_y2rsy14',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'a9720z7RdUEaAqtV7'
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'envelope',
      title: 'Email',
      value: 'hamzaalhadouchi@gmail.com',
      link: 'mailto:hamzaalhadouchi@gmail.com',
      color: 'from-red-400 to-pink-500',
    },
    {
      icon: 'phone',
      title: 'Phone',
      value: '+212 684 553 285',
      link: 'tel:+212684553285',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: 'map-marker-alt',
      title: 'Location',
      value: 'Morocco',
      link: null,
      color: 'from-blue-400 to-cyan-500',
    },
  ];

  const socialLinks = [
    { icon: 'github', url: 'https://github.com/hamzalhdouchi', label: 'GitHub', color: '#333' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/Hamza-Lhadouchi', label: 'LinkedIn', color: '#0077b5' },
    { icon: 'instagram', url: 'https://instagram.com', label: 'Instagram', color: '#e4405f' },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden" ref={containerRef}>
      {/* ===== ENHANCED ANIMATED BACKGROUND LAYERS ===== */}
      
      {/* Large Gradient Orb 1 */}
      <motion.div
        className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ y }}
        animate={{
          scale: [1, 1.3, 1],
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
        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Email Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['📧','💌','✉️','📬'].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl opacity-10"
            style={{
              left: `${10 + i * 25}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -60, 0],
              rotate: [0, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 12 + i * 2,
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
              <i className="fas fa-paper-plane text-6xl text-cyan-400" />
            </motion.div>

            <motion.h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </motion.h2>
            
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            <motion.p
              className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Let's collaborate and bring your ideas to life
            </motion.p>
          </div>
        </RevealSection>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side - Contact Info & Social */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Info Cards */}
            <RevealSection delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl font-orbitron font-bold text-cyan-400 mb-6">
                  Contact Information
                </h3>
                
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="group relative bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 rounded-xl p-6 overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.03,
                      borderColor: 'rgba(0, 217, 255, 0.5)',
                      y: -5
                    }}
                  >
                    {/* Gradient Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <div className="relative z-10 flex items-center gap-4">
                      <motion.div
                        className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${info.color} rounded-xl`}
                        animate={{
                          boxShadow: [
                            '0 0 10px rgba(0, 217, 255, 0.3)',
                            '0 0 20px rgba(0, 217, 255, 0.6)',
                            '0 0 10px rgba(0, 217, 255, 0.3)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      >
                        <i className={`fas fa-${info.icon} text-white text-2xl`} />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm mb-1">{info.title}</p>
                        {info.link ? (
                          <motion.a
                            href={info.link}
                            className="text-white text-lg hover:text-cyan-400 transition-colors font-medium"
                            whileHover={{ x: 5 }}
                          >
                            {info.value}
                          </motion.a>
                        ) : (
                          <p className="text-white text-lg font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </RevealSection>

            {/* Social Media Links */}
            <RevealSection delay={0.4}>
              <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-orbitron font-bold text-purple-400 mb-6 text-center">
                  Connect With Me
                </h3>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, type: 'spring' }}
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        borderColor: social.color,
                        backgroundColor: `${social.color}20`,
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className={`fab fa-${social.icon} text-2xl text-gray-400 group-hover:text-cyan-400`} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Availability Badge */}
            <RevealSection delay={0.6}>
              <motion.div
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 rounded-xl p-6 text-center"
                animate={{
                  borderColor: ['rgba(34, 197, 94, 0.3)', 'rgba(34, 197, 94, 0.6)', 'rgba(34, 197, 94, 0.3)'],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="flex items-center justify-center gap-3 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-green-400 font-semibold text-lg">Available for Work</span>
                </motion.div>
                <p className="text-gray-400 text-sm">Response within 24 hours</p>
              </motion.div>
            </RevealSection>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-3">
            <RevealSection delay={0.3}>
              <motion.div
                className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500/30 rounded-3xl p-8 md:p-10 overflow-hidden"
                whileHover={{ borderColor: 'rgba(0, 217, 255, 0.5)' }}
              >
                {/* Rotating Border Glow */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />

                <div className="relative z-10">
                  <h3 className="text-3xl font-orbitron font-bold text-cyan-400 mb-6">
                    Send Me a Message
                  </h3>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                        <i className="fas fa-user mr-2 text-cyan-400" />
                        Your Name
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-black/50 border-2 border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-all"
                        whileFocus={{ scale: 1.01, borderColor: 'rgba(0, 217, 255, 0.8)' }}
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                        <i className="fas fa-envelope mr-2 text-cyan-400" />
                        Your Email
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-black/50 border-2 border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-all"
                        whileFocus={{ scale: 1.01, borderColor: 'rgba(0, 217, 255, 0.8)' }}
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Subject Input */}
                    <div>
                      <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                        <i className="fas fa-tag mr-2 text-cyan-400" />
                        Subject
                      </label>
                      <motion.input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-black/50 border-2 border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-all"
                        whileFocus={{ scale: 1.01, borderColor: 'rgba(0, 217, 255, 0.8)' }}
                        placeholder="Project Inquiry"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                        <i className="fas fa-comment-alt mr-2 text-cyan-400" />
                        Your Message
                      </label>
                      <motion.textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-5 py-4 bg-black/50 border-2 border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-all resize-none"
                        whileFocus={{ scale: 1.01, borderColor: 'rgba(0, 217, 255, 0.8)' }}
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-8 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-lg relative overflow-hidden ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                      whileHover={!isSubmitting ? { scale: 1.02, y: -3 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ x: '-100%', opacity: 0.3 }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <motion.i
                              className="fas fa-spinner"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane" />
                            Send Message
                            <motion.i
                              className="fas fa-arrow-right"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                          </>
                        )}
                      </span>
                    </motion.button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center"
                      >
                        <i className="fas fa-check-circle mr-2" />
                        Message sent successfully! I'll get back to you soon.
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center"
                      >
                        <i className="fas fa-exclamation-circle mr-2" />
                        Failed to send message. Please try again or email directly.
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
