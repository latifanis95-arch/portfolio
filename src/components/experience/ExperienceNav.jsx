import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Briefcase, Lightbulb } from 'lucide-react';

const SectionToggleButton = ({ sectionKey, activeSection, setActiveSection, children, icon: Icon }) => {
  const isActive = activeSection === sectionKey;
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="w-full sm:w-auto"
    >
      <Button
        onClick={() => setActiveSection(sectionKey)}
        size="lg"
        variant={isActive ? "default" : "outline"}
        className={`w-full sm:w-auto text-base md:text-lg py-3 px-6 md:py-4 md:px-8 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center
                    ${isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-transparent' 
                      : 'bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm'
                    }`}
      >
        {Icon && <Icon className={`mr-2.5 h-5 w-5`} />}
        {children}
      </Button>
    </motion.div>
  );
};

const ExperienceNav = ({ activeSection, setActiveSection }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
      <SectionToggleButton sectionKey="professional" activeSection={activeSection} setActiveSection={setActiveSection} icon={Briefcase}>
        Expériences Professionnelles
      </SectionToggleButton>
      <SectionToggleButton sectionKey="academic" activeSection={activeSection} setActiveSection={setActiveSection} icon={Lightbulb}>
        Projets Académiques & Personnels
      </SectionToggleButton>
    </div>
  );
};

export default ExperienceNav;