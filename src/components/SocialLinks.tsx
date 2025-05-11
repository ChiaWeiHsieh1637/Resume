import React from 'react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { platform: 'GitHub', url: 'https://github.com/', icon: 'github' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/', icon: 'linkedin' },
    { platform: 'Instagram', url: 'https://www.instagram.com/', icon: 'instagram' },
    { platform: 'Medium', url: 'https://medium.com/', icon: 'medium' }
  ];

  return (
    <div className="p-6 rounded-lg bg-[#112240]">
      <h3 className="text-xl mb-4 text-[#ccd6f6]">社群連結</h3>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((link) => (
          <a 
            key={link.platform}
            href={link.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
            aria-label={link.platform}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#64ffda] hover:bg-[#64ffda]/10">
              <span className="text-[#64ffda]">{link.platform.charAt(0)}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks; 