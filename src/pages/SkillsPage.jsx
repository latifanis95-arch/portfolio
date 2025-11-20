import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Package, Network, Users, DatabaseZap, ChevronRight, CheckCircle, Zap, Server, BarChart3, Truck, Warehouse, FileCog } from 'lucide-react';

const SkillCard = ({ title, levels, icon, delay, linkTo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card dark:bg-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-3 text-xl md:text-2xl font-semibold text-gradient-blue-purple">{title}</h3>
      </div>
      <ul className="space-y-2 mb-6 text-sm text-muted-foreground flex-grow">
        {levels.map((level, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
            <span>{level}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant="outline" className="mt-auto group border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900">
        <Link to={linkTo}>
          Voir les détails
          <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </motion.div>
  );
};

const DevelopedSkillItem = ({ icon, text, example }) => (
  <motion.li 
    className="p-4 bg-background dark:bg-slate-700/70 rounded-lg shadow-md border border-border dark:border-gray-700"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="flex items-center mb-1.5">
      {icon}
      <span className="ml-3 text-base font-semibold text-primary-foreground dark:text-slate-100">{text}</span>
    </div>
    <p className="ml-[calc(18px+0.75rem)] text-xs text-muted-foreground dark:text-slate-300">{example}</p>
  </motion.li>
);

const SkillsPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const skillsData = [
    {
      title: 'Élaborer des solutions logistiques et de transport',
      levels: ['Identifier les besoins et contraintes', 'Concevoir des solutions adaptées'],
      icon: <Package size={28} className="text-blue-500 dark:text-blue-400" />,
      delay: 0.1,
      linkTo: '/skills/elaborer-solutions'
    },
    {
      title: 'Organiser et coordonner les opérations des chaînes logistiques',
      levels: ['Planifier les flux', 'Coordonner les acteurs', 'Suivre les opérations'],
      icon: <Network size={28} className="text-green-500 dark:text-green-400" />,
      delay: 0.2,
      linkTo: '/skills/organiser-chaine'
    },
    {
      title: 'Manager les ressources des unités logistiques et de transport',
      levels: ['Gérer les équipes', 'Optimiser les moyens', 'Suivre les budgets'],
      icon: <Users size={28} className="text-purple-500 dark:text-purple-400" />,
      delay: 0.3,
      linkTo: '/skills/manager-ressources'
    },
    {
      title: 'Maîtriser les outils numériques et les outils d’aide à la décision',
      levels: ['Utiliser les SI logistiques', 'Analyser les données'],
      icon: <DatabaseZap size={28} className="text-red-500 dark:text-red-400" />,
      delay: 0.4,
      linkTo: '/skills/maitriser-digital'
    },
  ];

  const supplyChainSkills = [
    { 
      icon: <Truck size={18} className="text-blue-500 dark:text-blue-400" />, 
      text: "Optimisation des flux de transport",
      example: "Ex: Réduire les coûts et délais de livraison en analysant les itinéraires et modes de transport."
    },
    { 
      icon: <Warehouse size={18} className="text-green-500 dark:text-green-400" />, 
      text: "Gestion des stocks et entreposage",
      example: "Ex: Mettre en place des stratégies de stock minimum pour éviter les ruptures et surstocks."
    },
    { 
      icon: <Zap size={18} className="text-red-500 dark:text-red-400" />, 
      text: "Amélioration continue des processus",
      example: "Ex: Identifier les goulots d'étranglement et proposer des solutions pour fluidifier les opérations."
    },
  ];

  const itSkills = [
    { 
      icon: <Server size={18} className="text-blue-500 dark:text-blue-400" />, 
      text: "Utilisation et paramétrage d'ERP",
      example: "Ex: Intégrer des données de stock dans SAP et adapter les modules aux besoins métiers."
    },
    { 
      icon: <BarChart3 size={18} className="text-green-500 dark:text-green-400" />, 
      text: "Analyse de données (Excel, Power BI)",
      example: "Ex: Créer des tableaux de bord pour suivre les KPI et aider à la prise de décision."
    },
    { 
      icon: <DatabaseZap size={18} className="text-purple-500 dark:text-purple-400" />, 
      text: "Digitalisation des processus logistiques",
      example: "Ex: Mettre en œuvre des solutions de scan (codes-barres) pour améliorer la traçabilité."
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      <header className="text-center mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient-blue-purple mb-4">Mes Compétences</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Découvrez les compétences clés que j'ai développées au cours de ma formation et de mes expériences, alignées sur le référentiel du BUT MLT.</p>
      </header>

      <section className="mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-gradient-blue-purple mb-10 text-center">Mes compétences les plus développées</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            className="p-6 md:p-8 bg-card dark:bg-slate-800/50 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-primary-foreground dark:text-slate-100 mb-6 text-center">Compétences en Supply Chain</h3>
            <ul className="space-y-4">
              {supplyChainSkills.map((skill, index) => (
                <DevelopedSkillItem key={index} icon={skill.icon} text={skill.text} example={skill.example} />
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="p-6 md:p-8 bg-card dark:bg-slate-800/50 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-primary-foreground dark:text-slate-100 mb-6 text-center">Compétences en Systèmes d'Information</h3>
            <ul className="space-y-4">
              {itSkills.map((skill, index) => (
                <DevelopedSkillItem key={index} icon={skill.icon} text={skill.text} example={skill.example} />
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gradient-blue-purple mb-3 text-center">Référentiel de Compétences BUT MLT</h2>
        <p className="text-center text-muted-foreground mb-10">Les compétences sont évaluées sur plusieurs niveaux, reflétant une maîtrise progressive des savoir-faire professionnels.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              levels={skill.levels}
              icon={skill.icon}
              delay={skill.delay}
              linkTo={skill.linkTo}
            />
          ))}
        </div>
      </section>

    </motion.div>
  );
};

export default SkillsPage;