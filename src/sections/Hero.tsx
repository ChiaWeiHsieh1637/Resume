import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Name from '../components/Name';
import Navigation from '../components/Navigation';
import SocialLinks from '../components/SocialLinks';
import About from '../components/About';
import Experience from '../components/Experience';
import MobileNavigation from '../components/MobileNavigation';
import ScrollToTop from '../components/ScrollToTop';

// 動畫變體
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  }
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  }
};

const Hero: React.FC = () => {
    // 滾動進度指示器
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

    return (
        <>
            {/* 移動端漢堡菜單導航 - 只在小屏幕顯示 */}
            <div className="lg:hidden">
                <MobileNavigation />
            </div>

            {/* 滾動進度指示器 */}
            <motion.div 
                className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
                style={{ scaleX }}
            />

            <motion.div 
                className="min-h-screen bg-background-primary text-text-primary py-12 px-4 sm:px-6 md:py-16 md:px-8 lg:px-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        className="flex flex-col lg:flex-row gap-8 lg:gap-16"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* 左半部分 - 桌面版顯示為側邊欄，移動端顯示為頂部區域 */}
                        <motion.div 
                            className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start lg:h-screen lg:max-h-[calc(100vh-12rem)]"
                            variants={itemVariants}
                        >
                            <div className="lg:pr-8 space-y-6 lg:space-y-10 mb-12 lg:mb-0">
                                <motion.div variants={itemVariants}>
                                    <Name />
                                </motion.div>
                                {/* 在桌面版顯示導航 */}
                                <div className="hidden lg:block">
                                    <motion.div 
                                        variants={itemVariants}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <Navigation />
                                    </motion.div>
                                    <motion.div 
                                        variants={itemVariants}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <SocialLinks />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 右半部分 - 主要內容區域 */}
                        <motion.div 
                            className="lg:w-2/3 space-y-16 md:space-y-24"
                            variants={containerVariants}
                        >
                            <motion.div
                                variants={fadeInUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <About />
                            </motion.div>
                            <motion.div
                                variants={fadeInUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <Experience />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* 移動端顯示底部社交鏈接 */}
                    <div className="lg:hidden mt-12 pt-8 border-t border-background-secondary">
                        <SocialLinks />
                    </div>
                </div>
            </motion.div>

            {/* 返回頂部按鈕 */}
            <ScrollToTop />
        </>
    );
};

export default Hero;
