import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero'; 
import HomeAboutSection from '@/components/HomeAboutSection';
import HomeExperienceSection from '@/components/HomeExperienceSection';
import SkillsSection from '@/components/SkillsSection'; 
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import About from '@/components/About';
import SkillsPage from '@/pages/SkillsPage'; 
import ExperiencesPage from '@/pages/ExperiencesPage';
import EcoliveryExperiencePage from '@/pages/experiences/EcoliveryExperiencePage';
import LcThermicExperiencePage from '@/pages/experiences/LcThermicExperiencePage';
import LidlExperiencePage from '@/pages/experiences/LidlExperiencePage';
import SkillElaborerSolutions from '@/pages/skills/SkillElaborerSolutions';
import SkillOrganiserChaine from '@/pages/skills/SkillOrganiserChaine';
import SkillManagerRessources from '@/pages/skills/SkillManagerRessources';
import SkillMaitriserDigital from '@/pages/skills/SkillMaitriserDigital';
import { AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import GlassmorphismCard from '@/components/GlassmorphismCard';
import ProjectCarousel from '@/components/ProjectCarousel';

const HomePageContent = ({ setActiveSection }) => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 300;

        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
          }
        });
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setActiveSection(''); 
    }
  }, [location, setActiveSection]);

  return (
    <>
      <Hero /> 
      <div className="p-4 md:p-8">
        <GlassmorphismCard>
          <HomeAboutSection />
        </GlassmorphismCard>
      </div>
      <div className="p-4 md:p-8">
        <GlassmorphismCard animationType="barcode">
          <HomeExperienceSection />
        </GlassmorphismCard>
      </div>
      <div className="p-4 md:p-8">
        <GlassmorphismCard animationType="truck">
          <SkillsSection />
        </GlassmorphismCard>
      </div>
      <div className="p-4 md:p-8">
        <GlassmorphismCard animationType="conveyor">
           <ProjectCarousel />
        </GlassmorphismCard>
      </div>
       <div className="p-4 md:p-8">
        <GlassmorphismCard animationType="dashboard">
           <Contact />
        </GlassmorphismCard>
      </div>
    </>
  );
};


const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section-fade-in');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [location, language]); 

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <div className="min-h-screen bg-transparent text-white">
      <AnimatedGradientBackground />
      <div className="relative z-10">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <AnimatePresence mode="wait">
          <main>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePageContent setActiveSection={setActiveSection} />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/experiences" element={<ExperiencesPage />} />
              
              <Route path="/experiences/ecolivery" element={<EcoliveryExperiencePage />} />
              <Route path="/experiences/lc-thermic" element={<LcThermicExperiencePage />} />
              <Route path="/experiences/lidl" element={<LidlExperiencePage />} />
              <Route path="/skills/elaborer-solutions" element={<SkillElaborerSolutions />} />
              <Route path="/skills/organiser-chaine" element={<SkillOrganiserChaine />} />
              <Route path="/skills/manager-ressources" element={<SkillManagerRessources />} />
              <Route path="/skills/maitriser-digital" element={<SkillMaitriserDigital />} />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default App;