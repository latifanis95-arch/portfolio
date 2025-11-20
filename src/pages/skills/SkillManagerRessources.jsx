import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft, Users, Globe, CheckSquare, TrendingUp, Settings, BarChart3, FileSignature, ShieldAlert, GanttChartSquare, Target, ListTodo, Route, DraftingCompass, School as University, Briefcase, Lightbulb, AlertCircle, Building, FileText as FileTextIcon, ClipboardCheck, FileWarning, KeyRound as UsersRound, BarChartHorizontal, TabletSmartphone, Presentation, UserCheck, Goal } from 'lucide-react';

const SkillManagerRessources = () => {
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
      text: 'Intégrer les dimensions sociales, commerciales, comptables et financières',
      icon: <Globe size={20} className="text-blue-500" />,
      context: 'Cours Introduction au Management',
      institution: 'IUT Paris 8',
      details: 'Intégration des exigences de sécurité, gestion des coûts et respect rigoureux des procédures.'
    },
    {
      level: 1,
      text: 'Mettre en œuvre une démarche de projet',
      icon: <GanttChartSquare size={20} className="text-green-500" />,
      context: 'Cours Gestion de Projet',
      institution: 'IUT Paris 8',
      details: 'Formation à la gestion de projet structurée incluant définition des phases, objectifs clairs et suivi régulier.'
    },
    {
      level: 1,
      text: 'Identifier les objectifs, les contraintes et les éléments de décision d’un plan d’action',
      icon: <Target size={20} className="text-purple-500" />,
      context: 'Cours Gestion de Projet',
      institution: 'IUT Paris 8',
      details: 'Maîtrise de la méthode PDCA et analyse des facteurs clés de succès d’un plan d’action.'
    },
    {
      level: 1,
      text: 'Compléter les supports de suivi d’activité avec les indicateurs pertinents existants',
      icon: <ListTodo size={20} className="text-red-500" />,
      context: 'Indicateurs suivie de Projets Notion',
      institution: 'KS Holding',
      details: 'Suivi d’activité par indicateurs d’avancement, état des tâches, et gestion des coûts projet.'
    },
    {
      level: 2,
      text: 'Adopter une démarche qualité',
      icon: <ClipboardCheck size={20} className="text-yellow-500" />,
      context: 'création de signalétique dans le dépôt',
      institution: 'KS Holding',
      details: 'Mise en place de signalétique pour renforcer la sécurité au sein du dépôt.'
    },
    {
      level: 2,
      text: 'Contractualiser avec des prestataires internes ou externes ou avec des clients',
      icon: <FileSignature size={20} className="text-indigo-500" />,
      context: 'Contrat de prestation de transport pour chantier Sud',
      institution: 'KS Holding',
      details: 'Gestion externalisée du transport par contrat avec un prestataire faute de véhicules internes disponibles.'
    },
    {
      level: 2,
      text: 'Coordonner les différentes activités de la chaîne logistique et transport',
      icon: <Route size={20} className="text-pink-500" />,
      context: 'Coordination d\'un chantier et suivi des activités',
      institution: 'LC Thermic',
      details: 'Coordination complète des étapes logistiques du chantier, de la planification à l’analyse des performances.'
    },
    {
      level: 2,
      text: 'Intégrer la prévention, le management du risque et le traitement des litiges',
      icon: <FileWarning size={20} className="text-teal-500" />,
      context: 'Création d\'un dossier litige',
      institution: 'LC Thermic',
      details: 'Mise en place d’un dossier de suivi des litiges pour analyser les fournisseurs et relancer les actions correctives.'
    },
    {
      level: 2,
      text: 'Elaborer et utiliser des outils de gestion',
      icon: <Settings size={20} className="text-orange-500" />,
      context: 'Notion Gestion de projet',
      institution: 'KS Holding',
      details: 'Utilisation d’outils pour planifier projets, assigner tâches et respecter les échéances.'
    },
    {
      level: 3,
      text: 'Formaliser des processus',
      icon: <DraftingCompass size={20} className="text-cyan-500" />,
      context: 'Rédaction de Process d\'utilisation de la tablette',
      institution: 'KS Holding',
      details: 'Rédaction claire et structurée des processus logistiques selon leur ordre chronologique.'
    },
    {
      level: 3,
      text: 'Construire des outils d\'aide à la décision',
      icon: <BarChartHorizontal size={20} className="text-lime-500" />,
      context: 'Tableau de bord pour réduction de valorisation stock',
      institution: 'KS Holding',
      details: 'Élaboration d’un tableau de bord pour le suivi et l’optimisation des valorisations de stock.'
    },
    {
      level: 3,
      text: 'Manager les équipes et accompagner le changement',
      icon: <UsersRound size={20} className="text-fuchsia-500" />,
      context: 'former les équipes à l\'intégration des codes barres et scanners',
      institution: 'KS Holding',
      details: 'Accompagnement au changement réussi grâce à la démonstration des bénéfices de la digitalisation.'
    },
    {
      level: 3,
      text: 'Définir et mettre en œuvre des plans d\'amélioration',
      icon: <Goal size={20} className="text-rose-500" />,
      context: 'Réunion',
      institution: 'KS Holding',
      details: 'Entretien avec la direction pour définir un plan d’amélioration et des objectifs clairs avant la fin du contrat.'
    }
  ];

  const learningsByLevel = learningsData.reduce((acc, item) => {
    (acc[item.level] = acc[item.level] || []).push(item);
    return acc;
  }, {});

  const getContextIcon = (context) => {
    if (context.toLowerCase().includes('cours')) return <University size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('indicateurs') || context.toLowerCase().includes('projets notion') || context.toLowerCase().includes('gestion de projet')) return <FileTextIcon size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('signalétique') || context.toLowerCase().includes('dépôt')) return <Building size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('contrat') || context.toLowerCase().includes('prestation')) return <FileSignature size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('chantier') || context.toLowerCase().includes('coordination')) return <Route size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('litige')) return <FileWarning size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('process') || context.toLowerCase().includes('tablette')) return <TabletSmartphone size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('tableau de bord') || context.toLowerCase().includes('stock')) return <BarChartHorizontal size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('équipes') || context.toLowerCase().includes('scanners')) return <UserCheck size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('réunion') || context.toLowerCase().includes('amélioration')) return <Presentation size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    return <Lightbulb size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
  };

  const getInstitutionIcon = (institution) => {
     if (institution.toLowerCase().includes('iut')) return <University size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
     if (institution.toLowerCase().includes('ks holding') || institution.toLowerCase().includes('lc thermic')) return <Briefcase size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
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
          Manager les ressources des unités logistiques et de transport
        </motion.h1>
        <motion.p 
          variants={cardVariants} custom={2} initial="hidden" animate="visible"
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Encadrement d’équipes, gestion de la performance, optimisation des coûts, négociation avec les fournisseurs. (Compétence: Manager)
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
            <span>Gérer les équipes opérationnelles.</span>
          </div>
          <div className="flex items-center p-3 bg-background dark:bg-slate-800 rounded-md border border-border dark:border-gray-700">
            <span className="text-xs font-semibold bg-green-500 text-white px-2 py-0.5 rounded-full mr-3">NIVEAU 2</span>
            <span>Optimiser l’utilisation des moyens matériels et humains.</span>
          </div>
          <div className="flex items-center p-3 bg-background dark:bg-slate-800 rounded-md border border-border dark:border-gray-700">
            <span className="text-xs font-semibold bg-purple-500 text-white px-2 py-0.5 rounded-full mr-3">NIVEAU 3</span>
            <span>Suivre et maîtriser les budgets alloués.</span>
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
            {items && items.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item, index) => (
                  <motion.div
                    key={item.text}
                    variants={cardVariants} 
                    custom={index + 5 + levelIndex * (items?.length || 0) } 
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
            ) : (
              <motion.p 
                variants={cardVariants} 
                custom={levelIndex + 6} 
                initial="hidden" 
                animate="visible" 
                className="text-muted-foreground italic"
              >
                Les apprentissages critiques pour ce niveau seront ajoutés prochainement.
              </motion.p>
            )}
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

export default SkillManagerRessources;