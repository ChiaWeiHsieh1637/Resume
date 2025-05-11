import React from 'react';

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

  return (
    <div id="experience" className="p-6 rounded-lg bg-[#112240]">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ccd6f6]">工作經歷</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-[#64ffda] pl-4 pb-2">
            <div className="text-sm text-[#64ffda] mb-1">{exp.period}</div>
            <h3 className="text-xl font-medium text-[#e6f1ff]">{exp.position}</h3>
            <div className="text-lg text-[#ccd6f6] mb-2">{exp.company}</div>
            <ul className="space-y-2 text-[#8892b0]">
              {exp.description.map((item, i) => (
                <li key={i} className="flex">
                  <span className="text-[#64ffda] mr-2">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 