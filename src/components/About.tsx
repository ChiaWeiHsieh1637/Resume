import React from 'react';

const About: React.FC = () => {
  return (
    <div id="about" className="mb-12 p-6 rounded-lg bg-[#112240]">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ccd6f6]">關於我</h2>
      <div className="text-[#8892b0] space-y-4">
        <p>
          您好！我是謝嘉偉，一名充滿熱情的前端工程師，專注於打造美觀且高效能的網頁體驗。
        </p>
        <p>
          我喜歡將設計與技術結合，創造既美觀又實用的數位產品。我擅長使用 React、TypeScript 和現代前端框架開發響應式網站和應用程式。
        </p>
        <p>
          除了技術能力外，我還重視與設計師和後端工程師的協作，確保產品從概念到實現的每個階段都能保持一致的品質。
        </p>
        <p>
          以下是我熟悉的技術：
        </p>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'HTML & CSS', 'Tailwind CSS', 'Node.js', 'Git'].map((skill) => (
            <div key={skill} className="flex items-center">
              <span className="text-[#64ffda] mr-2">▹</span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About; 