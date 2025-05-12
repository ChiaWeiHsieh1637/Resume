import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Vue', 'Next.js', 'HTML & CSS', 'Tailwind CSS', 'Sass/SCSS', 'C#', 'Node.js', 'Git', 'RESTful API', 'Vibe Coding'];
  
  // 將技能分成兩列
  const leftColumnSkills = skills.slice(0, Math.ceil(skills.length / 2));
  const rightColumnSkills = skills.slice(Math.ceil(skills.length / 2));
  
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
          我是一位開發者，熱衷於打造無障礙、精準的使用者介面，結合深思熟慮的設計與穩健的工程實作。
        </motion.p>
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          我喜歡將設計與技術結合，創造既美觀又實用的數位產品。我擅長使用 React、TypeScript 和現代前端框架開發響應式網站和應用程式，同時在效能與可用性上都經過精心打造的使用體驗。
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
          className="flex gap-4 mt-2 md:mt-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* 左列 */}
          <div className="flex-1 space-y-1">
            {leftColumnSkills.map((skill) => (
              <motion.div 
                key={skill} 
                className="flex items-center py-0.5"
                variants={skillVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span 
                  className="text-accent mr-1.5 flex-shrink-0"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >▹</motion.span>
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
          
          {/* 右列 */}
          <div className="flex-1 space-y-1">
            {rightColumnSkills.map((skill) => (
              <motion.div 
                key={skill} 
                className="flex items-center py-0.5"
                variants={skillVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span 
                  className="text-accent mr-1.5 flex-shrink-0"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >▹</motion.span>
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 