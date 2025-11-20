import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { 
    ArrowLeft, DatabaseZap, Users, ShieldCheck, Eye, FileInput, Shuffle, BarChartBig, Settings, Group, 
    School as University, Briefcase, Lightbulb, AlertCircle, Building, FileText as FileTextIcon, Search, Barcode, Wrench
} from 'lucide-react';

const SkillMaitriserDigital = () => {
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
      text: 'Analyser les besoins des acteurs et les données à exploiter nécessaires à la digitalisation',
      icon: <Search size={20} className="text-blue-500" />,
      context: 'Diagnostique Environnement connecté du groupe',
      institution: 'IUT Paris 8',
      details: 'Analyse approfondie des besoins des acteurs internes et de l’état d’avancement de la digitalisation des processus.'
    },
    {
      level: 1,
      text: 'Identifier les enjeux et les risques des solutions digitales (organisation, sécurité, protection des infos)',
      icon: <ShieldCheck size={20} className="text-green-500" />,
      context: 'Diagnostique Environnement connecté du groupe',
      institution: 'IUT Paris 8',
      details: 'Identification des enjeux et résistances des employés face à l’intégration de solutions d’IA.'
    },
    {
      level: 1,
      text: 'Effectuer une veille sur les technologies innovantes et la réglementation',
      icon: <Eye size={20} className="text-purple-500" />,
      context: 'Veille sur l\'IA / Outils de comptabilité Participation aux réunions',
      institution: 'KS Holding',
      details: 'Veille technologique sur l’IA, échanges avec le service informatique, et participation à l’intégration d’un outil comptable.'
    },
    {
      level: 1,
      text: 'Alimenter, extraire et exploiter les données des applications métiers',
      icon: <FileInput size={20} className="text-red-500" />,
      context: 'Process de réception / Flux chantier',
      institution: 'KS Holding',
      details: 'Extraction, manipulation et exploitation de données via ERP et Excel pour le suivi des flux chantier.'
    },
    {
      level: 2,
      text: 'Étudier la pertinence des solutions digitales et leurs alternatives',
      icon: <Shuffle size={20} className="text-yellow-500" />,
      context: 'Diagnostique Environnement connecté du groupe',
      institution: 'IUT Paris 8',
      details: 'Diagnostic digital détaillé de l’entreprise en alternance, avec proposition de solutions adaptées.'
    },
    {
      level: 2,
      text: 'Mesurer l’impact et l’apport des solutions digitales',
      icon: <BarChartBig size={20} className="text-indigo-500" />,
      context: 'Projet intégration Code Barre et Scanners',
      institution: 'LC Thermic',
      details: 'Mesure précise du temps consacré aux processus logistiques liés à l’entrepôt : inventaire, sortie, retour marchandises.'
    },
    {
      level: 2,
      text: 'Contribuer au paramétrage et à la personnalisation des applications',
      icon: <Settings size={20} className="text-orange-500" />,
      context: 'Intégration stock dans ERP',
      institution: 'LC Thermic',
      details: 'Intégration du stock informatique dans l’ERP, suivi d’une importante phase de paramétrage pour assurer une utilisation optimale.'
    },
    {
      level: 2,
      text: 'Accompagner les utilisateurs dans l’intégration et l’utilisation des solutions digitales',
      icon: <Users size={20} className="text-teal-500" />,
      context: 'Projet intégration Code Barre et Scanners',
      institution: 'LC Thermic',
      details: 'Accompagnement des équipes dans la transition vers les nouveaux processus liés au projet Code Barres et Scanners.'
    }
  ];

  const learningsByLevel = learningsData.reduce((acc, item) => {
    (acc[item.level] = acc[item.level] || []).push(item);
    return acc;
  }, {});

  const getContextIcon = (context) => {
    if (context.toLowerCase().includes('diagnostique')) return <Search size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('veille') || context.toLowerCase().includes('ia') || context.toLowerCase().includes('comptabilité')) return <Eye size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('process') || context.toLowerCase().includes('flux')) return <FileTextIcon size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('code barre') || context.toLowerCase().includes('scanners')) return <Barcode size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('digitalisation')) return <DatabaseZap size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase().includes('intégration stock') || context.toLowerCase().includes('erp')) return <DatabaseZap size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
    if (context.toLowerCase() === 'non applicable') return <AlertCircle size={14} className="mr-1 text-yellow-500 dark:text-yellow-400" />;
    return <Lightbulb size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
  };

  const getInstitutionIcon = (institution) => {
     if (institution.toLowerCase().includes('iut paris 8') || institution.toLowerCase().includes('iut')) return <University size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
     if (institution.toLowerCase().includes('ks holding') || institution.toLowerCase().includes('ecolivery') || institution.toLowerCase().includes('sae') || institution.toLowerCase().includes('lc thermic')) return <Briefcase size={14} className="mr-1 text-gray-500 dark:text-gray-400" />;
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
          Maîtriser les outils numériques et les outils d’aide à la décision
        </motion.h1>
        <motion.p 
          variants={cardVariants} custom={2} initial="hidden" animate="visible"
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
        >
          Utilisation d’ERP, TMS, WMS, Excel avancé, Power BI pour l’analyse et le reporting. (Compétence: Digitaliser)
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
            <span>Utiliser les systèmes d’information logistique (ERP, TMS, WMS).</span>
          </div>
          <div className="flex items-center p-3 bg-background dark:bg-slate-800 rounded-md border border-border dark:border-gray-700">
            <span className="text-xs font-semibold bg-green-500 text-white px-2 py-0.5 rounded-full mr-3">NIVEAU 2</span>
            <span>Analyser les données logistiques pour la prise de décision.</span>
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

export default SkillMaitriserDigital;