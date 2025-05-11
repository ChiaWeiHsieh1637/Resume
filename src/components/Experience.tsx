import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'ABC 科技',
      position: '資深前端工程師',
      period: '2022 - 至今',
      description: [
        '負責公司主要產品的前端開發和維護',
        '與設計團隊緊密合作改善用戶體驗',
        '進行代碼優化，提升應用性能',
        '指導初級開發人員和參與技術評審'
      ]
    },
    {
      company: 'XYZ 數位公司',
      position: '前端工程師',
      period: '2020 - 2022',
      description: [
        '開發並維護多個客戶的網站和應用',
        '實現響應式設計確保跨設備兼容性',
        '優化前端性能和加載時間',
        '參與從設計到實現的全過程'
      ]
    },
    {
      company: '創新工作室',
      position: '網頁開發實習生',
      period: '2019 - 2020',
      description: [
        '協助團隊開發公司網站和內部工具',
        '負責基礎前端功能和界面構建',
        '參與需求分析和用戶體驗改進',
        '學習並應用現代前端開發技術'
      ]
    }
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