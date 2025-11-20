import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Briefcase, Mountain } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const proImage = "https://horizons-cdn.hostinger.com/c8f15e6d-9ba2-451a-bf17-90feb63694f8/6f863c553471c125093b40640a822122.png";
const persoImage = "https://horizons-cdn.hostinger.com/c8f15e6d-9ba2-451a-bf17-90feb63694f8/318773d982f5a80cc2cf2651faadb6cc.png";

const AboutHero = () => {
  const { t } = useLanguage();
  const [hoveredView, setHoveredView] = useState(null);
  const [mobileActiveView, setMobileActiveView] = useState('split');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleMobileToggle = (view) => {
    if (mobileActiveView === view) {
      setMobileActiveView('split');
    } else {
      setMobileActiveView(view);
    }
  };

  return (
    <header className="relative w-full h-screen text-white overflow-hidden" id="about-hero">
      {/* Desktop Split View Background */}
      <div className="hidden md:block absolute inset-0">
        {/* Default Split State */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hoveredView ? 0 : 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Pro Side (Left) */}
          <div 
            className="absolute left-0 top-0 h-full w-1/2"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
            }}
          >
            <img 
              src={proImage} 
              alt={t('aboutHero.proAlt')} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Perso Side (Right) */}
          <div 
            className="absolute right-0 top-0 h-full w-1/2"
            style={{
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
            }}
          >
            <img 
              src={persoImage} 
              alt={t('aboutHero.persoAlt')}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Pro Fullscreen on Hover */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredView === 'pro' ? 1 : 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ pointerEvents: hoveredView === 'pro' ? 'auto' : 'none' }}
        >
          <motion.img 
            src={proImage} 
            alt={t('aboutHero.proAltFullscreen')}
            className="w-full h-full object-cover"
            animate={{ 
              scale: hoveredView === 'pro' ? 1 : 1.05,
              filter: hoveredView === 'pro' ? 'brightness(1.15)' : 'brightness(1)'
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Perso Fullscreen on Hover */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredView === 'perso' ? 1 : 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ pointerEvents: hoveredView === 'perso' ? 'auto' : 'none' }}
        >
          <motion.img 
            src={persoImage} 
            alt={t('aboutHero.persoAltFullscreen')}
            className="w-full h-full object-cover"
            animate={{ 
              scale: hoveredView === 'perso' ? 1 : 1.05,
              filter: hoveredView === 'perso' ? 'brightness(1.2) saturate(1.1)' : 'brightness(1)'
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-black"
          animate={{ opacity: hoveredView ? 0.35 : 0.5 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Mobile Stacked View Background */}
      <div className="md:hidden absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: mobileActiveView === 'split' ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Perso Top */}
          <div 
            className="absolute top-0 left-0 right-0 h-1/2"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
            }}
          >
            <img 
              src={persoImage} 
              alt={t('aboutHero.persoAlt')}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Pro Bottom */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1/2"
            style={{
              clipPath: 'polygon(0 15%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          >
            <img 
              src={proImage} 
              alt={t('aboutHero.proAlt')}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Pro Fullscreen Mobile */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: mobileActiveView === 'pro' ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={proImage} 
            alt={t('aboutHero.proAltFullscreen')}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(1.15)' }}
          />
        </motion.div>

        {/* Perso Fullscreen Mobile */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: mobileActiveView === 'perso' ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={persoImage} 
            alt={t('aboutHero.persoAltFullscreen')}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(1.2) saturate(1.1)' }}
          />
        </motion.div>

        {/* Mobile Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full container mx-auto px-4 text-center"
        onMouseLeave={() => setHoveredView(null)}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">
            {t('aboutHero.title')}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 drop-shadow-md">
            {t('aboutHero.subtitle')}
          </p>
        </motion.div>

        {/* Desktop Buttons */}
        <motion.div
          className="hidden md:flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Button
            onMouseEnter={() => setHoveredView('pro')}
            onClick={() => scrollToSection('professional-profile')}
            size="lg"
            className={cn(
              "px-8 py-6 text-lg bg-white/10 backdrop-blur-sm transition-all duration-300 border border-white/20",
              "hover:bg-purple-600 hover:border-purple-500 hover:text-white hover:shadow-xl",
              hoveredView && hoveredView !== 'pro' ? 'opacity-40' : 'opacity-100'
            )}
          >
            <Briefcase className="h-5 w-5 mr-3" /> {t('aboutHero.proButton')}
          </Button>
          <Button
            onMouseEnter={() => setHoveredView('perso')}
            onClick={() => scrollToSection('personal-life')}
            size="lg"
            className={cn(
              "px-8 py-6 text-lg bg-white/10 backdrop-blur-sm transition-all duration-300 border border-white/20",
              "hover:bg-teal-500 hover:border-teal-400 hover:text-white hover:shadow-xl",
              hoveredView && hoveredView !== 'perso' ? 'opacity-40' : 'opacity-100'
            )}
          >
            <Mountain className="h-5 w-5 mr-3" /> {t('aboutHero.persoButton')}
          </Button>
        </motion.div>

        {/* Mobile Buttons */}
        <motion.div
          className="md:hidden flex flex-col gap-3 w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Button
            onClick={() => {
              handleMobileToggle('pro');
              scrollToSection('professional-profile');
            }}
            size="lg"
            className={cn(
              "w-full py-6 text-base transition-all duration-300",
              mobileActiveView === 'pro' 
                ? 'bg-purple-600 text-white shadow-lg' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white'
            )}
          >
            <Briefcase className="h-5 w-5 mr-3" /> {t('aboutHero.proButton')}
          </Button>
          <Button
            onClick={() => {
              handleMobileToggle('perso');
              scrollToSection('personal-life');
            }}
            size="lg"
            className={cn(
              "w-full py-6 text-base transition-all duration-300",
              mobileActiveView === 'perso' 
                ? 'bg-teal-500 text-white shadow-lg' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white'
            )}
          >
            <Mountain className="h-5 w-5 mr-3" /> {t('aboutHero.persoButton')}
          </Button>
        </motion.div>
      </div>
    </header>
  );
};

export default AboutHero;