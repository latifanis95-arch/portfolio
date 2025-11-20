import React from 'react';
import { motion } from 'framer-motion';
import { Package, Network, Users, DatabaseZap, ArrowRightCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SkillCard = ({ icon, title, levels, id }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="skill-item p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-start mb-4">
        <div className="mr-4 p-3 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary-foreground">{title}</h3>
        </div>
      </div>
      <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside mb-4">
        {levels.map(level => <li key={level}>{level}</li>)}
      </ul>
      <Button variant="outline" onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="w-full group">
        {`Naviguer vers ${title}`}
        <ArrowRightCircle size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  );
};

const SkillDetailSection = ({ id, title, situations, levels, learnings }) => {
  return (
    <motion.section 
      id={id} 
      className="py-12 md:py-16 bg-card rounded-xl shadow-lg mt-12 section-fade-in"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-3 gradient-text">Détail de la compétence : {title}</h3>
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-2 text-primary-foreground">Situations Professionnelles</h4>
          <p className="text-muted-foreground">{situations}</p>
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-2 text-primary-foreground">Niveaux de Maîtrise</h4>
          <ul className="space-y-1 text-muted-foreground list-disc list-inside">
            {levels.map(level => <li key={level}>{level}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2 text-primary-foreground">Apprentissages Critiques</h4>
          <ul className="space-y-1 text-muted-foreground list-disc list-inside">
            {learnings.map(learning => <li key={learning}>{learning}</li>)}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Skills = () => {
  const skillsOverviewData = [
    { 
      id: 'skillDetail1', 
      icon: <Package className="h-8 w-8" />, 
      title: 'Élaborer des solutions logistiques et de transport', 
      levels: ['Identifier les besoins et contraintes', 'Concevoir des solutions adaptées'] 
    },
    { 
      id: 'skillDetail2', 
      icon: <Network className="h-8 w-8" />, 
      title: 'Organiser et coordonner les opérations des chaînes logistiques', 
      levels: ['Planifier les flux', 'Coordonner les acteurs', 'Suivre les opérations'] 
    },
    { 
      id: 'skillDetail3', 
      icon: <Users className="h-8 w-8" />, 
      title: 'Manager les ressources des unités logistiques et de transport', 
      levels: ['Gérer les équipes', 'Optimiser les moyens', 'Suivre les budgets'] 
    },
    { 
      id: 'skillDetail4', 
      icon: <DatabaseZap className="h-8 w-8" />, 
      title: 'Maîtriser les outils numériques et les outils d’aide à la décision', 
      levels: ['Utiliser les SI logistiques', 'Analyser les données'] 
    },
  ];

  const skillsDetailedData = [
    {
      id: 'skillDetail1',
      title: 'Élaborer des solutions logistiques et de transport',
      situations: 'Analyse des besoins clients, conception de schémas directeurs, optimisation des réseaux de distribution, choix de solutions de traçabilité.',
      levels: ['Identifier les besoins et contraintes des clients et de l’entreprise.', 'Concevoir des solutions logistiques et de transport adaptées et innovantes.'],
      learnings: [
        'Analyser un cahier des charges fonctionnel.',
        'Proposer des scénarios d’organisation logistique.',
        'Évaluer la performance économique et environnementale des solutions.',
        'Choisir des modes de transport et des prestataires pertinents.',
        'Intégrer les aspects réglementaires et de sécurité.',
        'Présenter et argumenter les solutions proposées.'
      ]
    },
    {
      id: 'skillDetail2',
      title: 'Organiser et coordonner les opérations des chaînes logistiques nationales et internationales',
      situations: 'Planification de la demande, gestion des approvisionnements, coordination des opérations de transport multimodal, gestion des formalités douanières.',
      levels: [
        'Planifier les flux de marchandises et d’informations.',
        'Coordonner les différents acteurs internes et externes de la chaîne logistique.',
        'Suivre et contrôler le déroulement des opérations.'
      ],
      learnings: [
        'Mettre en œuvre un plan de transport et de stockage.',
        'Gérer les aléas et les non-conformités.',
        'Utiliser les outils de suivi et de traçabilité (TMS, WMS).',
        'Communiquer efficacement avec les partenaires (fournisseurs, clients, transporteurs).',
        'Maîtriser les Incoterms et les documents de transport.',
        'Optimiser les processus de réception, préparation de commandes et expédition.',
        'Gérer les stocks et les inventaires.',
        'Assurer le respect des délais et de la qualité de service.',
        'Mettre en place des indicateurs de performance (KPIs).',
        'Contribuer à l’amélioration continue des processus.'
      ]
    },
    {
      id: 'skillDetail3',
      title: 'Manager les ressources des unités logistiques et de transport',
      situations: 'Encadrement d’équipes, gestion de la performance, optimisation des coûts, négociation avec les fournisseurs.',
      levels: [
        'Gérer les équipes opérationnelles.',
        'Optimiser l’utilisation des moyens matériels et humains.',
        'Suivre et maîtriser les budgets alloués.'
      ],
      learnings: [
        'Animer et motiver une équipe.',
        'Organiser le travail et répartir les tâches.',
        'Évaluer les compétences et identifier les besoins de formation.',
        'Gérer les plannings et les absences.',
        'Prévenir et gérer les conflits.',
        'Analyser les coûts logistiques et proposer des axes d’amélioration.',
        'Participer à la sélection et à l’évaluation des prestataires.'
      ]
    },
    {
      id: 'skillDetail4',
      title: 'Maîtriser les outils numériques et les outils d’aide à la décision',
      situations: 'Utilisation d’ERP, TMS, WMS, Excel avancé, Power BI pour l’analyse et le reporting.',
      levels: [
        'Utiliser les systèmes d’information logistique (ERP, TMS, WMS).',
        'Analyser les données logistiques pour la prise de décision.'
      ],
      learnings: [
        'Extraire et traiter des données issues des SI.',
        'Utiliser des fonctionnalités avancées d’Excel (TCD, macros simples).',
        'Créer des tableaux de bord et des indicateurs de performance.',
        'Modéliser des processus logistiques simples.',
        'Identifier les opportunités d’amélioration grâce à l’analyse de données.',
        'Se tenir informé des évolutions technologiques (IoT, IA en logistique).',
        'Assurer la qualité et la fiabilité des données.'
      ]
    }
  ];


  return (
    <section id="skills" className="py-20 md:py-28 bg-background section-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Mes Compétences</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Découvrez les compétences clés que j'ai développées au cours de ma formation et de mes expériences, alignées sur le référentiel du BUT GLT.
          </p>
          <div className="bg-card p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-primary-foreground mb-3">Référentiel de Compétences BUT GLT</h2>
            <p className="text-base text-muted-foreground">Les compétences sont évaluées sur plusieurs niveaux, reflétant une maîtrise progressive des savoir-faire professionnels.</p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {skillsOverviewData.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </motion.div>

        {skillsDetailedData.map((skill) => (
          <SkillDetailSection key={skill.id} {...skill} />
        ))}

      </div>
    </section>
  );
};

export default Skills;