import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg border-b border-cyan-500/20' : ''
      }`}
    >
      {/* Gradient Top Border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.1 }}
          >
            <motion.a
              href="#home"
              className="text-2xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                textShadow: [
                  '0 0 20px rgba(0,217,255,0)',
                  '0 0 30px rgba(0,217,255,0.6)',
                  '0 0 20px rgba(0,217,255,0)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              HL
            </motion.a>
            {/* Glow effect behind logo */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <motion.a
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-gray-300 hover:text-cyan-400 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.08,
                    backgroundColor: 'rgba(0, 217, 255, 0.1)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Hover Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 -z-10 rounded-lg"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">{item.name}</span>
                  {/* Underline animation */}
                  <motion.div
                    className="absolute bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-2xl text-cyan-400 relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`} />
            </motion.div>
            {/* Glow ring around button */}
            <motion.div
              className="absolute inset-0 rounded-full border border-cyan-500/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-2 pb-4 relative"
          >
            {/* Blur background gradient */}
            <motion.div
              className="absolute inset-0 -bottom-96 bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent rounded-b-3xl -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
                className="relative z-10"
              >
                <motion.a
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 transition-all border border-transparent hover:border-cyan-500/30 relative overflow-hidden group"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ 
                    x: 8,
                    backgroundColor: 'rgba(0, 217, 255, 0.1)',
                  }}
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 -z-10"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    {item.name}
                    <motion.i
                      className="fas fa-arrow-right text-xs opacity-0 group-hover:opacity-100"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </span>
                </motion.a>
              </motion.div>
            ))}

            {/* Divider */}
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-3"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: navItems.length * 0.08 + 0.1 }}
            />
          </motion.div>
        )}
      </div>

      {/* Floating particles on scroll */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{ left: `${i * 35 + 15}%` }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
