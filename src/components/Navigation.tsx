import React from 'react';

const Navigation: React.FC = () => {
  const navItems = [
    { id: 'about', label: '關於我' },
    { id: 'experience', label: '工作經歷' },
    { id: 'projects', label: '專案' },
    { id: 'contact', label: '聯絡我' }
  ];

  return (
    <div className="mb-8 p-6 rounded-lg bg-[#112240]">
      <nav>
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.id} className="text-lg">
              <a 
                href={`#${item.id}`} 
                className="flex items-center text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
              >
                <span className="text-[#64ffda] mr-2">▹</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation; 