import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: '天下科技股份有限公司',
      position: '軟體工程師／資深前端工程師',
      period: '2019-2020',
      description: [
        '負責公司主要產品的前端開發和維護',
        '參與軟體開發到上線全部過程',
        '使用後端C#，前端Vue.js，API串接...等等全部開發過程',
        '指導新人學習開發'
      ]
    },
    {
      company: '懋騰股份有限公司',
      position: '前端工程師',
      period: '2016 - 2017',
      description: [
        '開發並維護多個客戶的網站和應用',
        '實現RFID的運作',
        '優化前端性能和加載時間',
        '參與產品開發到網頁上架全部過程'
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div id="experience" className="mb-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        工作經歷
      </motion.h2>
      <motion.div 
        className="space-y-6 md:space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="border-l-2 border-accent pl-4 pb-2"
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-xs sm:text-sm text-accent mb-1">{exp.period}</div>
            <h3 className="text-lg sm:text-xl font-medium text-text-primary">{exp.position}</h3>
            <div className="text-base sm:text-lg text-text-primary mb-2">{exp.company}</div>
            <ul className="space-y-1 sm:space-y-2 text-text-secondary text-sm sm:text-base">
              {exp.description.map((item, i) => (
                <li key={i} className="flex">
                  <span className="text-accent mr-2 flex-shrink-0">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience; 