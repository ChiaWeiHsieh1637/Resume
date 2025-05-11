import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 打字機效果的Hook
const useTypewriter = (text: string, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed]);
  
  return displayText;
};

const Name: React.FC = () => {
  const firstName = useTypewriter('謝嘉瑋', 150);
  const engName = useTypewriter('Chia-Wei Hsieh', 100);
  
  return (
    <div className="mb-8 text-center lg:text-left">
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {firstName}<br/>
        {engName}
      </motion.h1>
      <motion.h2 
        className="text-xl sm:text-2xl md:text-3xl mt-2 text-text-secondary"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
      >
        前端工程師<br/>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl"
        >
          (front-end Stack Developer)
        </motion.span>
      </motion.h2>
    </div>
  );
};

export default Name; 