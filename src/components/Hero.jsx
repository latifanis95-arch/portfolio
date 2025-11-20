
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { UserCircle, Brain, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import BinaryIconRain from '@/components/BinaryIconRain';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white section-fade-in overflow-hidden p-4 md:p-8">
      <div className="w-full h-full absolute inset-0 animated-card-border">
          <div className="absolute inset-0 bg-black/70 dark:bg-black/80 -z-10"></div>
          <BinaryIconRain />
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
              <div className="w-full space-y-6 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <span className="inline-block px-4 py-1.5 text-sm font-medium bg-blue-500/30 dark:bg-blue-700/40 text-blue-100 dark:text-blue-200 rounded-full mb-4 backdrop-blur-sm border border-blue-400/50">{t('hero.badge')}</span>
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gradient-blue-purple" dangerouslySetInnerHTML={{ __html: t('hero.title') }} />

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg md:text-xl text-gray-200 dark:text-gray-300 max-w-3xl mx-auto">
                  {t('hero.subtitle')}
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-4 pt-4 justify-center">
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-3" size="lg">
                    <Link to="/about">
                      <UserCircle size={18} className="mr-2" />
                      {t('hero.cta.profile')}
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="group border-gray-200 text-gray-100 hover:bg-white/10 dark:border-gray-400 dark:text-gray-200 dark:hover:bg-white/5 backdrop-blur-sm text-base shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-8 py-3" asChild>
                    <Link to="/skills">
                      <Brain size={18} className="mr-2" />
                      {t('hero.cta.skills')}
                    </Link>
                  </Button>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex items-center gap-6 pt-6 justify-center">
                  <a href="https://www.linkedin.com/in/anis-latif-142a85266/" target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:latifanis.pro@gmail.com" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-100 transition-colors" aria-label="Email">
                    <Mail size={20} />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
