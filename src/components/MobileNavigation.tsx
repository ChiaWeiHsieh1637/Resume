import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { id: 'about', label: '關於我' },
    { id: 'experience', label: '工作經歷' },
    { id: 'projects', label: '專案' },
    { id: 'contact', label: '聯絡我' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ 
        behavior: 'smooth'
      });
    }, 500);
  };

  return (
    <>
      <motion.button
        className="fixed top-6 right-6 z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.span
          className="w-6 h-0.5 bg-accent block"
          animate={{ 
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0
          }}
        />
        <motion.span
          className="w-6 h-0.5 bg-accent block"
          animate={{ 
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -20 : 0 
          }}
        />
        <motion.span
          className="w-6 h-0.5 bg-accent block"
          animate={{ 
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0
          }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background-primary bg-opacity-95 z-40 flex items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.nav className="w-full px-10">
              <ul className="space-y-6 text-center">
                {navItems.map((item) => (
                  <motion.li 
                    key={item.id}
                    variants={itemVariants}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.button
                      className="text-2xl text-text-primary hover:text-accent transition-colors"
                      onClick={() => handleNavClick(item.id)}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation; 