import React from 'react';
import { motion } from 'framer-motion';

// 添加 Project 介面
interface Project {
  title: string;
  description: string;
  tech: string[];
  links: { text: string; url: string; icon: string; }[];
  image: string;
  installs?: string;
  stars?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: '金儀國際科技股份有限公司官網示範',
      description: '大幅改善讀取時間，大幅優化SEO設置，圖片懶加載優化，響應式設計，圖片壓縮處理',
      tech: ['HTML', 'Javascript', 'CSS'],
      links: [
        { text: '程式碼', url: 'https://github.com/ChiaWeiHsieh1637/king-i-clone', icon: 'github' },
        { text: '線上展示', url: 'https://king-i-clone.deno.dev/', icon: 'external' }
      ],
      image: '/king-i.webp'
    },
    {
      title: 'Ponti酒莊國際網站設計',
      description: '使用了React、Tailwind CSS、Framer Motion等技術，打造了一個現代化的國際網站，提供多語言支援，並且具有良好的SEO優化。',
      tech: ['React', 'Express', 'API', 'Styled Components', 'Tailwind CSS', 'Framer Motion'],
      links: [
        { text: '程式碼', url: 'https://github.com/Jameswilson7788/preview-test/', icon: 'github' },
        { text: '線上展示', url: 'https://jameswilson7788.github.io/preview-test/', icon: 'external' }
      ],
      image: '/panti.webp'
    },
   
  ];

  // 動畫變體
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  return (
    <div id="projects" className="mb-20 px-4 max-w-6xl mx-auto">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        精選作品
      </motion.h2>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="grid md:grid-cols-12 gap-6 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            {/* 項目圖片 - 永遠在左側 */}
            <div className="md:col-span-7">
              <div className="relative aspect-video bg-background-primary rounded-md overflow-hidden">
                {project.image && (
                  <>
                    <img 
                      src={project.image} 
                      alt={`${project.title} 預覽圖`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-accent opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
                  </>
                )}
              </div>
            </div>

            {/* 項目詳情 - 永遠在右側 */}
            <div className="md:col-span-5 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
                <a 
                  href={project.links.find(link => link.icon === 'external')?.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-200 flex items-center"
                >
                  {project.title}
                  <span className="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                      <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                    </svg>
                  </span>
                </a>
              </h3>
              
              {/* 項目描述卡片 */}
              <div className="p-5 rounded-md bg-background-primary shadow-md mb-4 text-text-secondary">
                <p>{project.description}</p>
              </div>
              
              {/* 技術標籤 */}
              <div className="flex flex-wrap gap-3 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs text-text-secondary">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* 資訊標籤 */}
              {(project.installs || project.stars) && (
                <div className="mb-4 flex items-center">
                  {project.installs && (
                    <span className="flex items-center text-text-secondary text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="mr-1" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                      </svg>
                      {project.installs} 安裝量
                    </span>
                  )}
                  {project.stars && (
                    <span className="flex items-center text-text-secondary text-sm ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="mr-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      {project.stars}
                    </span>
                  )}
                </div>
              )}
              
              {/* 連結 */}
              <div className="flex gap-4">
                {project.links.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    {link.icon === 'github' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                        <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <a 
          href="#more-projects" 
          className="inline-flex items-center text-accent hover:text-text-primary transition-colors duration-200"
        >
          持續製作中...
        </a>
      </motion.div>
    </div>
  );
};

export default Projects; 