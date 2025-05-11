import React from 'react';
import { motion } from 'framer-motion';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { platform: 'GitHub', url: 'https://github.com/', icon: 'github' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/', icon: 'linkedin' },
    { platform: 'Instagram', url: 'https://www.instagram.com/', icon: 'instagram' },
    { platform: 'Medium', url: 'https://medium.com/', icon: 'medium' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    }
  };

  return (
    <div className="mb-8">
      <motion.h3 
        className="text-xl mb-4 text-text-primary"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        社群連結
      </motion.h3>
      <motion.div 
        className="flex flex-wrap gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map((link) => (
          <motion.a 
            key={link.platform}
            href={link.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label={link.platform}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="flex items-center justify-center w-10 h-10 rounded-full border border-accent hover:bg-accent/10"
              whileHover={{ 
                boxShadow: "0 0 8px rgba(100, 255, 218, 0.5)"
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.span 
                className="text-accent"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {link.platform.charAt(0)}
              </motion.span>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default SocialLinks; 