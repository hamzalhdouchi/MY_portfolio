import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'github', url: 'https://github.com/hamzalhdouchi', label: 'GitHub' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/Hamza-Lhadouchi', label: 'LinkedIn' },
    { icon: 'phone', url: 'tel:+212684553285', label: 'Phone' },
    { icon: 'envelope', url: 'mailto:hamzalhadouchi@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-cyan-500/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Hamza Lhadouchi
            </h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400"
                whileHover={{
                  scale: 1.2,
                  color: '#00d9ff',
                  rotate: [0, -10, 10, -10, 0],
                }}
                aria-label={social.label}
              >
                <i className={`fa${social.icon === 'github' || social.icon === 'linkedin' ? 'b' : 's'} fa-${social.icon}`} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-gray-500"
        >
          <p>&copy; {currentYear} Hamza Lhadouchi. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
