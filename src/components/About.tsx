import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Vue', 'Next.js', 'HTML & CSS', 'Tailwind CSS', 'Node.js', 'Git', 'Vibe Coding'];

  // 文本動畫變體
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // 技能列表動畫變體
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div id="about" className="mb-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        關於我
      </motion.h2>
      <div className="text-text-secondary space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg">
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          您好！我是謝嘉偉，一名充滿熱情的前端工程師，專注於打造美觀且高效能的網頁體驗。
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          我喜歡將設計與技術結合，創造既美觀又實用的數位產品。我擅長使用 React、TypeScript 和現代前端框架開發響應式網站和應用程式。
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          除了技術能力外，我還重視與設計師和後端工程師的協作，確保產品從概念到實現的每個階段都能保持一致的品質。
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-4 font-medium"
        >
          以下是我熟悉的技術：
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 md:mt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill} 
              className="flex items-center"
              variants={skillVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span 
                className="text-accent mr-2"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >▹</motion.span>
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About; 