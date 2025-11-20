import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft, Network, SlidersHorizontal, ShoppingCart, Truck, Map, BarChart, GitFork, CheckCircle, Users, CalendarDays, Activity, Boxes, FileSpreadsheet, Briefcase, Link2, School as University, Lightbulb, AlertCircle, Building, FileCog, FileCheck2, FileText as FileTextIcon, LayoutGrid } from 'lucide-react';

const SkillOrganiserChaine = () => {
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
      text: 'Identifier les fonctions et métiers de la chaîne logistique', 
      icon: <Briefcase size={20} className="text-blue-500" />,
      context: 'Cours',
      institution: 'IUT Paris 8',
      details: 'Introduction complète aux fonctions et métiers de la chaîne logistique.'
    },
    { 
      level: 1, 
      text: 'Maîtriser les concepts de prévision de la demande', 
      icon: <Activity size={20} className="text-green-500" />,
      context: 'Cours',
      institution: 'IUT Paris 8',
      details: 'Maîtrise des méthodes et outils de prévision de la demande dans la distribution.'
    },
    { 
      level: 1, 
      text: 'Schématiser les flux physiques et d\'information', 
      icon: <GitFork size={20} className="text-purple-500" />,
      context: 'Cours',
      institution: 'IUT Paris 8',
      details: 'Schématisation des flux physiques et d’information en logistique internationale.'
    },
    { 
      level: 1, 
      text: 'Dimensionner les différentes zones logistiques', 
      icon: <Boxes size={20} className="text-red-500" />,
      context: 'Cours',
      institution: 'IUT Paris 8',
      details: 'Dimensionnement des zones logistiques adaptées aux flux internationaux.'
    },
    { 
      level: 2, 
      text: 'Choisir une stratégie d\'achat et d\'approvisionnement', 
      icon: <ShoppingCart size={20} className="text-yellow-500" />,
      context: 'Stocks mini Stock LC Thermic / Ecolivery',
      institution: 'Ecolivery / LC Thermic',
      details: 'Analyse et mise en place d’un stock minimum pour le SAV, garantissant disponibilité immédiate des articles à forte valeur.'
    },
    { 
      level: 2, 
      text: 'Planifier et ordonnancer la production', 
      icon: <CalendarDays size={20} className="text-indigo-500" />,
      context: 'Chantier Granges aux belles',
      institution: 'LC Thermic',
      details: 'Planification et coordination des préparations et livraisons quotidiennes des pièces nécessaires au chantier.'
    },
    { 
      level: 2, 
      text: 'Choisir un modèle de distribution', 
      icon: <Truck size={20} className="text-pink-500" />,
      context: 'Chantier Maison Pour tous',
      institution: 'LC Thermic',
      details: 'Étude comparative des coûts de livraison en semi-remorque versus camion complet.'
    },
    { 
      level: 2, 
      text: 'Organiser l\'activité des équipes et l\'adéquation charge/ capacité', 
      icon: <Users size={20} className="text-teal-500" />,
      context: 'Chantier Maison Pour tous',
      institution: 'LC Thermic',
      details: 'Évaluation des ressources nécessaires pour atteindre les objectifs hebdomadaires de production.'
    },
    { 
      level: 2, 
      text: 'Cartographier les flux physiques et d\'information', 
      icon: <Map size={20} className="text-orange-500" />,
      context: 'Cartographie Faite en cours',
      institution: 'IUT Paris 8',
      details: 'Cartographie détaillée des flux physiques et d’information chez LC Thermic.'
    },
    {
      level: 3,
      text: 'Modéliser les processus logistiques',
      icon: <FileCog size={20} className="text-cyan-500" />,
      context: 'Création et mise a jour des process',
      institution: 'KS Holding',
      details: 'Modélisation et mise à jour des processus logistiques pour la sortie des inventaires.'
    },
    {
      level: 3,
      text: 'Définir les critères d\'évaluation, leur pondération et arbitrer les solutions',
      icon: <FileCheck2 size={20} className="text-lime-500" />,
      context: 'Analyse des besoins de modification ERP',
      institution: 'LC Thermic',
      details: 'Élaboration d’un cahier des charges pondéré selon les critères d’importance pour les modifications ERP.'
    },
    {
      level: 3,
      text: 'Intégrer les éléments d\'un contrat logistique',
      icon: <FileTextIcon size={20} className="text-gray-500" />,
      context: 'Non applicable',
      institution: 'N/A',
      details: 'Pas d’information fournie pour cette preuve.'
    },
    {
      level: 3,
      text: 'Organiser les flux logistiques internes et externes',
      icon: <LayoutGrid size={20} className="text-fuchsia-500" />,
      context: 'Organisation de l\'entrepôt',
      institution: 'LC Thermic / Ecolivery',
      details: 'Organisation segmentée des flux logistiques par chantier, client et stock avec création de zones spécifiques pour nouveaux projets ITE.'
    }
  ];

  const learningsByLevel = learningsData.reduce((acc, item) => {
    (acc[item.level] = acc[item.level] || []).push(item);
    return acc;
  }, {});

  const getContextIcon = (context) => {
    if (context.toLowerCase().includes('cours')) return <University size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('chantier')) return <Building size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('stock')) return <Boxes size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('cartographie')) return <Map size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('process')) return <FileCog size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('erp')) return <FileCheck2 size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('entrepôt')) return <LayoutGrid size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase() === 'non applicable') return <AlertCircle size={14} className="mr-1 text-yellow-500 dark:text-yellow-400" />;
    return <Lightbulb size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
  };

  const getInstitutionIcon = (institution) => {
     if (institution.toLowerCase().includes('iut')) return <University size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
     if (institution.toLowerCase().includes('ecolivery') || institution.toLowerCase().includes('lc thermic') || institution.toLowerCase().includes('ks holding')) return <Briefcase size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
     if (institution.toLowerCase() === 'n/a') return <AlertCircle size={14} className="mr-1 text-yellow-500 dark:text-yellow-400" />;
     return <Building size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
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
          <RouterLink to="/skills">
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour aux compétences
          </RouterLink>
        </Button>
      </motion.div>

      <header className="text-center mb-12 md:mb-16">
        <motion.h1 
          variants={cardVariants} custom={1} initial="hidden" animate="visible"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-blue-purple mb-4"
        >
          Organiser et coordonner les opérations des chaînes logistiques nationales et internationales
        </motion.h1>
        <motion.p 
          variants={cardVariants} custom={2} initial="hidden" animate="visible"
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Planification de la demande, gestion des approvisionnements, coordination des opérations de transport multimodal, gestion des formalités douanières. (Compétence: Organiser)
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
            <span>Planifier les flux de marchandises et d’informations.</span>
          </div>
          <div className="flex items-center p-3 bg-background dark:bg-slate-800 rounded-md border border-border dark:border-gray-700">
            <span className="text-xs font-semibold bg-green-500 text-white px-2 py-0.5 rounded-full mr-3">NIVEAU 2</span>
            <span>Coordonner les différents acteurs internes et externes de la chaîne logistique.</span>
          </div>
          <div className="flex items-center p-3 bg-background dark:bg-slate-800 rounded-md border border-border dark:border-gray-700">
            <span className="text-xs font-semibold bg-purple-500 text-white px-2 py-0.5 rounded-full mr-3">NIVEAU 3</span>
            <span>Suivre et contrôler le déroulement des opérations.</span>
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
              className={`text-xl font-bold mb-6 pb-2 border-b-2 ${level === '1' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : level === '2' ? 'border-green-500 text-green-600 dark:text-green-400' : 'border-purple-500 text-purple-600 dark:text-purple-400'}`}
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

export default SkillOrganiserChaine;