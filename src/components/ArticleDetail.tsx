import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ArticleDetailProps {
  title: string;
  content: string;
  date: string;
  tags: string[];
  onClose: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({
  title,
  content,
  date,
  tags,
  onClose
}) => {
  // 按 Escape 鍵關閉文章
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 bg-background-primary bg-opacity-95 z-50 overflow-y-auto custom-scrollbar cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <div className="absolute top-4 right-4 text-xs text-text-tertiary flex items-center gap-2">
        <span>點擊空白處關閉</span>
        <button 
          className="bg-background-secondary hover:bg-background-highlight transition-colors rounded-full p-1 focus:outline-none"
          onClick={onClose}
          aria-label="關閉文章"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 flex flex-col">
        <div 
          className="max-w-3xl mx-auto w-full bg-background-secondary rounded-lg p-6 md:p-8 shadow-lg cursor-default relative"
          onClick={(e) => e.stopPropagation()} // 阻止事件冒泡，點擊文章內容區域不會關閉
        >
          <div className="flex justify-between items-start mb-6">
            <span className="text-sm text-text-tertiary">{date}</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">{title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-background-primary text-text-tertiary"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div 
            className="article-content text-text-secondary custom-scrollbar"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleDetail; 