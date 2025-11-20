import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, DollarSign, Users, ListChecks, Layers, FileText, BarChart3, School as University, Briefcase, MapPin, BookOpen, Lightbulb, AlertCircle } from 'lucide-react';

const SkillElaborerSolutions = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  const learningsData = [
    { 
      level: 1, 
      text: 'Identifier les activités, les contraintes, les marchés et leur environnement juridique et réglementaire', 
      icon: <Search size={20} className="text-blue-500" />,
      context: 'Cours',
      institution: 'IUT Paris 8',
      details: 'Cours complet sur les bases et enjeux du transport routier.'
    },
    { 
      level: 1, 
      text: 'Identifier les principaux éléments de coût d\'une activité de transport', 
      icon: <DollarSign size={20} className="text-green-500" />,
      context: 'Cours',
      institution: 'IUT Paris 8',
      details: 'Étude approfondie des coûts liés à une activité de transport routier.'
    },
    { 
      level: 1, 
      text: 'Définir les moyens humains, matériels', 
      icon: <Users size={20} className="text-purple-500" />,
      context: 'Cours',
      institution: 'IUT Paris 8',
      details: 'Définition précise des moyens humains et matériels nécessaires au transport.'
    },
    { 
      level: 1, 
      text: 'Définir les étapes de mise en œuvre d\'une opération', 
      icon: <ListChecks size={20} className="text-red-500" />,
      context: 'Cours',
      institution: 'IUT Paris 8',
      details: 'Description détaillée des étapes clés pour la mise en œuvre d’une opération de transport.'
    },
    { 
      level: 2, 
      text: 'Définir la chronologie des opérations et établir des scénari d\'organisation', 
      icon: <Layers size={20} className="text-yellow-500" />,
      context: 'Chantier Mandelieu la Napoule Plusieurs livraison',
      institution: 'Ecolivery',
      details: 'Livraison progressive de plus de 2000 matelas isolants, avec optimisation maximale des coûts de transport.'
    },
    { 
      level: 2, 
      text: 'Argumenter la pertinence et la faisabilité technique, commerciale et réglementaire des solutions', 
      icon: <FileText size={20} className="text-indigo-500" />,
      context: 'Chantier Mandelieu la Napoule Plusieurs livraison',
      institution: 'Ecolivery',
      details: 'Optimisation du chargement des camions réalisée grâce à des outils Excel avancés.'
    },
    { 
      level: 2, 
      text: 'Estimer les coûts et la rentabilité de la prestation', 
      icon: <BarChart3 size={20} className="text-pink-500" />,
      context: 'Chantier Mandelieu la Napoule Plusieurs livraison',
      institution: 'Ecolivery',
      details: 'Élaboration de devis et analyse comparative des coûts de transport internes.'
    },
    { 
      level: 2, 
      text: 'Exploiter les informations comptables et financières', 
      icon: <DollarSign size={20} className="text-teal-500" />,
      context: 'Chantier Mandelieu la Napoule Plusieurs livraison',
      institution: 'Ecolivery',
      details: 'Suivi budgétaire en collaboration avec les responsables opérationnels.'
    },
  ];

  const learningsByLevel = learningsData.reduce((acc, item) => {
    (acc[item.level] = acc[item.level] || []).push(item);
    return acc;
  }, {});

  const getContextIcon = (context) => {
    if (context.toLowerCase().includes('cours')) return <BookOpen size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('chantier')) return <Briefcase size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    return <Lightbulb size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
  };

  const getInstitutionIcon = (institution) => {
     if (institution.toLowerCase().includes('iut')) return <University size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
     if (institution.toLowerCase().includes('ecolivery')) return <Briefcase size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
     return <MapPin size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
  };


  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      <motion.div variants={cardVariants} custom={0} initial="hidden" animate="visible" className="mb-8">
        <Button asChild variant="outline" className="mb-8 group">
          <Link to="/skills">
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour aux compétences
          </Link>
        </Button>
      </motion.div>

      <header className="text-center mb-12 md:mb-16">
        <motion.h1 
          variants={cardVariants} custom={1} initial="hidden" animate="visible"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-blue-purple mb-4"
        >
          Élaborer des solutions logistiques et de transport
        </motion.h1>
        <motion.p 
          variants={cardVariants} custom={2} initial="hidden" animate="visible"
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Analyse des besoins clients, conception de schémas directeurs, optimisation des réseaux de distribution, choix de solutions de traçabilité. (Compétence: Transporter)
        </motion.p>
      </header>

      <motion.section 
        variants={cardVariants} custom={3} initial="hidden" animate="visible"
        className="mb-12 p-6 md:p-8 bg-card dark:bg-slate-800/50 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-gradient-blue-purple mb-6">Niveaux de Maîtrise Référentiel</h2>
        <div className="space-y-3 text-muted-foreground">
          <div className="flex items-center p-3 bg-background dark:bg-slate-800 rounded-md border border-border dark:border-gray-700">
            <span className="text-xs font-semibold bg-blue-500 text-white px-2 py-0.5 rounded-full mr-3">NIVEAU 1</span>
            <span>Identifier les besoins et contraintes des clients et de l’entreprise.</span>
          </div>
          <div className="flex items-center p-3 bg-background dark:bg-slate-800 rounded-md border border-border dark:border-gray-700">
            <span className="text-xs font-semibold bg-green-500 text-white px-2 py-0.5 rounded-full mr-3">NIVEAU 2</span>
            <span>Concevoir des solutions logistiques et de transport adaptées et innovantes.</span>
          </div>
        </div>
      </motion.section>

      <motion.section 
        variants={cardVariants} custom={4} initial="hidden" animate="visible"
        className="p-6 md:p-8 bg-card dark:bg-slate-800/50 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-gradient-blue-purple mb-8">Apprentissages Critiques Acquis</h2>
        {Object.entries(learningsByLevel).sort(([levelA], [levelB]) => parseInt(levelA) - parseInt(levelB)).map(([level, items], levelIndex) => (
          <div key={level} className="mb-10">
            <motion.h3 
              variants={cardVariants} 
              custom={levelIndex + 5} 
              initial="hidden" 
              animate="visible" 
              className={`text-xl font-bold mb-6 pb-2 border-b-2 ${level === '1' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-green-500 text-green-600 dark:text-green-400'}`}
            >
              Niveau {level}
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item, index) => (
                <motion.div
                  key={item.text}
                  variants={cardVariants} 
                  custom={index + 5 + levelIndex * items.length} 
                  initial="hidden" 
                  animate="visible"
                  className="flex flex-col p-4 bg-background dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-border dark:border-gray-700"
                >
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mr-3 mt-1">{item.icon}</div>
                    <p className="text-sm font-semibold text-primary-foreground dark:text-primary">{item.text}</p>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1 mt-auto pt-2 border-t border-border dark:border-gray-700/50">
                    <div className="flex items-center">
                      {getContextIcon(item.context)}
                      <span><strong>Contexte:</strong> {item.context}</span>
                    </div>
                    <div className="flex items-center">
                      {getInstitutionIcon(item.institution)}
                      <span><strong>Établissement/Entreprise:</strong> {item.institution}</span>
                    </div>
                    <p className="pt-1"><strong>Détails:</strong> {item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
        <div className="text-center mt-12">
           <Button variant="outline" size="lg" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white dark:border-red-400 dark:text-red-400 dark:hover:bg-red-400 dark:hover:text-slate-900 group">
            <AlertCircle size={18} className="mr-2 group-hover:animate-pulse" />
            Voir les preuves (Bientôt disponible)
          </Button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default SkillElaborerSolutions;