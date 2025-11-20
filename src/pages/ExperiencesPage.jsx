import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Lightbulb, Users, HeartHandshake, Bus, ArrowRight } from 'lucide-react';
import ProfessionalExperienceSection from '@/components/experience/ProfessionalExperienceSection';
import AcademicProjectsSection from '@/components/experience/AcademicProjectsSection';
import ContentSection from '@/components/experience/ContentSection';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ExperiencesPage = () => {
  const [activeSection, setActiveSection] = useState('professional');
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const location = useLocation();

  const heroContent = {
    professional: {
      title: "Parcours Professionnel",
      subtitle: "De la gestion des flux à la stratégie supply chain, découvrez comment j'ai transformé les défis logistiques en opportunités de croissance pour les entreprises.",
      cta: "Explorer mes expériences",
      image: "https://horizons-cdn.hostinger.com/c8f15e6d-9ba2-451a-bf17-90feb63694f8/20382a8e4b4adcfaf7c25c0963d93d08.png",
      alt: "Logos des entreprises Ecolivery, LC Thermic et Lidl."
    },
    academic: {
      title: "Projets & Réalisations",
      subtitle: "Explorez une sélection de projets concrets, allant de l'optimisation de processus à l'implémentation d'outils digitaux, qui illustrent ma capacité à innover et à obtenir des résultats.",
      cta: "Découvrir mes projets",
      image: "https://horizons-cdn.hostinger.com/c8f15e6d-9ba2-451a-bf17-90feb63694f8/868a2af1901a3181a2fccf632c102641.png",
      alt: "Espace de travail isométrique avec des écrans affichant des analyses de données et des tableaux de bord de projet."
    }
  };

  const handleScrollTo = id => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('experience-hero');
      if (heroElement) {
        setShowFloatingNav(window.scrollY > heroElement.offsetHeight * 0.8);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      if (id === 'academic-projects-and-notion' || id.startsWith('project')) {
        setActiveSection('academic');
        setTimeout(() => handleScrollTo(id), 100);
      } else {
        setActiveSection('professional');
        setTimeout(() => handleScrollTo(id), 100);
      }
    } else {
      setActiveSection('professional');
    }
  }, [location]);

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const professionalExperiencesSC = [
    {
      title: "Chef de Projet Supply Chain",
      company: "Lidl International",
      dates: "Septembre 2025 - Actuel",
      description: "Gestion de projets d'intégration et de développement d'outils logistiques à l'échelle internationale, contribuant à l'optimisation des chaînes d'approvisionnement globales.",
      missions: "Coordination d'équipes multiculturelles; Analyse des besoins métiers; Déploiement de nouvelles solutions logicielles; Suivi des performances et ajustements.",
      icon: Briefcase
    },
    {
      title: "Assistant du Responsable Logistique",
      company: "LC Thermic (Groupe KS Holding)",
      dates: "Septembre 2024 - Septembre 2025",
      description: "Optimisation des processus logistiques et gestion des approvisionnements pour les chantiers CVC, en étroite collaboration avec les équipes opérationnelles et la direction.",
      missions: "Supervision des flux de marchandises; Gestion des stocks et des inventaires; Négociation avec les fournisseurs; Mise en place d'indicateurs de performance.",
      icon: Briefcase
    },
    {
      title: "Assistant Logistique",
      company: "Ecolivery (Groupe KS Holding)",
      dates: "Septembre 2023 - Septembre 2024",
      description: "Gestion opérationnelle des flux logistiques, optimisation des stocks et coordination des approvisionnements pour la centrale d'achat, participant activement à l'amélioration continue.",
      missions: "Gestion des commandes fournisseurs; Suivi des livraisons et réceptions; Analyse des écarts de stock; Participation à l'organisation des entrepôts.",
      icon: Briefcase
    }
  ];
  
  const otherExperiences = [
    {
      title: "Agent des Services Hospitaliers (ASH)",
      company: "CHIPS (Centre hospitalier intercommunal de Poissy-Saint Germain en Laye)",
      dates: "Juillet 2023 - Présent (Contrat Étudiant)",
      description: "Contribution au bien-être des patients et au maintien d'un environnement hospitalier propre et sécurisé.",
      missions: "Approvisionnement du matériel de nettoyage;Assistance aux patients;Bio-nettoyage des salles.",
      learnings: "Développement de l'empathie, de la résilience et de la gestion du stress.",
      icon: HeartHandshake
    },
    {
      title: "Accompagnateur de Bus de Nuit",
      company: "JS Services pour Transdev",
      dates: "Août 2023 - Septembre 2024 (Contrat Étudiant)",
      description: "Assurer la sécurité et la tranquillité des passagers sur les lignes de bus nocturnes.",
      missions: "Médiation et gestion des conflits avec les passagers (personnes en état d'ivresse, sans-abris, etc.);Assistance au conducteur pour assurer la fluidité et la sécurité du trajet;Maintien d'un environnement calme et sécurisé à bord.",
      learnings: "Écoute active, maintien d'un environnement sécurisé, gestion de situations complexes.",
      icon: Bus
    }
  ];

  const currentContent = heroContent[activeSection];
  const sectionIdMap = {
    professional: 'professional-content',
    academic: 'academic-projects-and-notion'
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}>
      <header id="experience-hero" className="relative bg-black/40 dark:bg-gray-900/40 pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 relative h-64 md:h-80 lg:h-[450px] w-full">
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentContent.image}
                  src={currentContent.image}
                  alt={currentContent.alt}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-contain rounded-3xl"
                />
              </AnimatePresence>
            </div>
            
            <div className="order-1 lg:order-2 text-center lg:text-left lg:pl-12">
               <div className="flex justify-center lg:justify-start gap-2 mb-6">
                <Button variant={activeSection === 'professional' ? 'default' : 'outline'} onClick={() => setActiveSection('professional')} className="rounded-full transition-all">
                  <Briefcase className="mr-2 h-4 w-4" /> Mes Expériences
                </Button>
                <Button variant={activeSection === 'academic' ? 'default' : 'outline'} onClick={() => setActiveSection('academic')} className="rounded-full transition-all">
                  <Lightbulb className="mr-2 h-4 w-4" /> Projets
                </Button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{currentContent.title}</h1>
                  <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">{currentContent.subtitle}</p>
                  <Button size="lg" onClick={() => handleScrollTo(sectionIdMap[activeSection])} className="group">
                    {currentContent.cta}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      <main>
        <AnimatePresence mode="wait">
          {activeSection === 'professional' && (
            <ContentSection sectionId="professional-content" className="bg-black/40 dark:bg-gray-900/40">
              <ProfessionalExperienceSection professionalExperiencesSC={professionalExperiencesSC} otherExperiences={otherExperiences} />
            </ContentSection>
          )}

          {activeSection === 'academic' && (
            <ContentSection sectionId="academic-content" className="bg-black/40 dark:bg-gray-900/40">
              <AcademicProjectsSection />
            </ContentSection>
          )}
        </AnimatePresence>
      </main>
      
      <AnimatePresence>
        {showFloatingNav && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-2 rounded-full shadow-2xl border border-border"
          >
            <div className="flex items-center gap-1">
              <Button
                variant={activeSection === 'professional' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => { setActiveSection('professional'); handleScrollTo(sectionIdMap['professional']); }}
                className="rounded-full"
                aria-label="Mes Expériences"
                title="Mes Expériences"
              >
                <Briefcase size={18} />
              </Button>
              <Button
                variant={activeSection === 'academic' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => { setActiveSection('academic'); handleScrollTo(sectionIdMap['academic']); }}
                className="rounded-full"
                aria-label="Projets"
                title="Projets"
              >
                <Lightbulb size={18} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExperiencesPage;