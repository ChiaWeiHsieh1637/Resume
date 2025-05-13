import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navItems = [
    { id: 'about', label: '關於我', path: '#about' },
    { id: 'experience', label: '工作經歷', path: '#experience' },
    { id: 'projects', label: '作品集', path: '#projects' },
    { id: 'blog', label: '部落格', path: '#blog' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="mb-8">
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ul className="space-y-3">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.id} 
              className="text-lg"
              variants={itemVariants}
              custom={index}
            >
              <motion.div className="flex items-center">
                {item.path.startsWith('#') ? (
                  <motion.a 
                    href={item.path} 
                    className="flex items-center text-text-primary hover:text-accent transition-colors"
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.span 
                      className="text-accent mr-2"
                      whileHover={{ rotate: 10 }}
                    >▹</motion.span>
                    <span className="relative overflow-hidden group">
                      {item.label}
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </motion.a>
                ) : (
                  <Link to={item.path}>
                    <motion.div 
                      className="flex items-center text-text-primary hover:text-accent transition-colors"
                      whileHover={{ 
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.span 
                        className="text-accent mr-2"
                        whileHover={{ rotate: 10 }}
                      >▹</motion.span>
                      <span className="relative overflow-hidden group">
                        {item.label}
                        <motion.span 
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </motion.div>
                  </Link>
                )}
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navigation; 