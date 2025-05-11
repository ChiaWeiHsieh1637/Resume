import React from 'react';
import Name from '../components/Name';
import Navigation from '../components/Navigation';
import SocialLinks from '../components/SocialLinks';
import About from '../components/About';
import Experience from '../components/Experience';

const Hero: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] py-12 px-4 md:py-16 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* 左半部分 */}
                    <div className="lg:w-1/3 space-y-8">
                        <Name />
                        <Navigation />
                        <SocialLinks />
                    </div>

                    {/* 右半部分 */}
                    <div className="lg:w-2/3 space-y-8">
                        <About />
                        <Experience />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
