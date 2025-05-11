import React from 'react';
import { motion } from 'framer-motion';
import Name from '../components/Name';
import Navigation from '../components/Navigation';
import SocialLinks from '../components/SocialLinks';
import About from '../components/About';
import Experience from '../components/Experience';

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
    return (
        <motion.div 
            className="min-h-screen bg-background-primary text-text-primary py-16 px-6 md:py-24 md:px-10 lg:px-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    className="flex flex-col lg:flex-row gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* 左半部分 */}
                    <motion.div 
                        className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start lg:h-screen lg:max-h-[calc(100vh-12rem)]"
                        variants={itemVariants}
                    >
                        <div className="lg:pr-8 space-y-10">
                            <motion.div variants={itemVariants}>
                                <Name />
                            </motion.div>
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
                    </motion.div>

                    {/* 右半部分 */}
                    <motion.div 
                        className="lg:w-2/3 space-y-24"
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
            </div>
        </motion.div>
    );
};

export default Hero;
