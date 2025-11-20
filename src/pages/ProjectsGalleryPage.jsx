import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ListChecks, ThumbsUp, ExternalLink, BookOpen, CheckSquare, ScanBarcode, Award, QrCode, Barcode, Warehouse, ArrowRightLeft, PackageSearch, Wrench, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index, cardVariants }) => (
  <motion.div
    key={project.id}
    id={project.id}
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="bg-card dark:bg-slate-800/50 p-6 rounded-xl shadow-lg flex flex-col"
  >
    <div className="mb-4">
      <img  
        alt={project.imageAltText}
        className="w-full h-56 object-cover rounded-lg mb-4 shadow-md"
        src={project.imageUrl || `https://source.unsplash.com/random/400x300/?${encodeURIComponent(project.imagePlaceholderText)}`}
       />
      <h3 className="text-2xl font-bold text-gradient-blue-purple mb-2">{project.title}</h3>
      <p className="text-sm text-muted-foreground mb-1">Entité: <span className="font-semibold text-primary-foreground dark:text-primary">{project.entity}</span></p>
      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
      <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.longDescription}</p>
    </div>
    
    <div className="mt-auto">
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Outils & Méthodes</h4>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, idx) => (
            <span key={idx} className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">{tool}</span>
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        <Button asChild variant="default" size="sm">
          <a href={project.learnMoreLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} className="mr-2" /> Voir Plus
          </a>
        </Button>
        <Button asChild variant="outline" size="sm">
           <a href={project.resourcesLink} target="_blank" rel="noopener noreferrer">
            <BookOpen size={16} className="mr-2" /> Ressources
          </a>
        </Button>
      </div>
    </div>
  </motion.div>
);


const ProjectsGalleryPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const featuredProject = {
    id: "project-codebarre",
    title: 'Intégration de Scanners et Code-barres',
    entity: "KS Holding (Transversal)",
    description: 'Amélioration de la traçabilité et de l\'efficacité grâce aux codes-barres.',
    longDescription: 'Durant mon alternance chez KS Holding, j\'ai identifié un besoin d\'amélioration de la traçabilité des actifs et des flux internes. J\'ai proposé et mené un projet d\'intégration de scanners et de codes-barres. Cela a impliqué le choix du matériel, la redéfinition des processus pour inclure le scan à chaque étape clé, la formation des équipes et la supervision du déploiement. Ce projet a permis de réduire significativement les erreurs de saisie, d\'accélérer les inventaires et d\'améliorer la visibilité globale des opérations.',
    tools: ['ERP', 'Scanners', 'Gestion de projet', 'Conduite du changement'],
    learnMoreLink: '#project-codebarre', 
    resourcesLink: '#',
    featuredStory: 'Ce projet d\'intégration de scanners et codes-barres est une grande fierté. Initialement, l\'idée n\'a pas suscité un grand enthousiasme, perçue comme un investissement supplémentaire avec des bénéfices incertains. Cependant, convaincu de son potentiel, j\'ai persévéré. J\'ai monté des démonstrations concrètes, chiffré les gains potentiels en temps et en réduction d\'erreurs, et expliqué patiemment les avantages. Progressivement, grâce à ces efforts et à la clarté des résultats attendus, j\'ai obtenu la validation de la direction. La concrétisation de ce projet, de l\'idée initiale à son déploiement réussi, a été une expérience extrêmement formatrice et gratifiante.'
  };

  const detailedProjectsData = [
    {
      id: "ecolivery-demenagement",
      title: "Déménagement de l'entrepôt",
      entity: "Ecolivery",
      description: "Planification et exécution du déménagement complet d'un entrepôt.",
      longDescription: "Coordination logistique du transfert de stocks, équipements et personnel vers un nouveau site, minimisant l'impact sur les opérations.",
      tools: ['Gestion de projet', 'Logistique', 'Planification'],
      imageAltText: "Entrepôt en cours de déménagement avec des étagères vides et des cartons empilés.",
      imagePlaceholderText: "warehouse moving boxes",
      imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
      learnMoreLink: '#',
      resourcesLink: '#'
    },
    {
      id: "ecolivery-ite",
      title: "Démarrage de l'activité ITE",
      entity: "Ecolivery",
      description: "Lancement d'une nouvelle gamme de produits d'Isolation Thermique par l'Extérieur.",
      longDescription: "Mise en place des processus de stockage, de préparation de commandes et de gestion des stocks spécifiques aux produits ITE.",
      tools: ['Gestion de produit', 'Logistique', 'Optimisation des stocks'],
      imageAltText: "Panneaux d'isolation thermique par l'extérieur empilés dans un entrepôt.",
      imagePlaceholderText: "thermal insulation panels",
      imageUrl: "https://images.unsplash.com/photo-1616047006789-b7af525920e8",
      learnMoreLink: '#',
      resourcesLink: '#'
    },
    {
      id: "ecolivery-reduction-stock",
      title: "Réduction de la valorisation de stock (Ecolivery)",
      entity: "Ecolivery",
      description: "Analyse et optimisation des niveaux de stock pour réduire les coûts.",
      longDescription: "Identification des surstocks, mise en place de stratégies de déstockage et amélioration des prévisions pour une meilleure rotation.",
      tools: ['Analyse de données', 'Gestion des stocks', 'Excel'],
      imageAltText: "Graphique montrant la réduction de la valorisation des stocks au fil du temps.",
      imagePlaceholderText: "stock value reduction chart",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      learnMoreLink: '#',
      resourcesLink: '#'
    },
    {
      id: "ecolivery-gestion-appro",
      title: "Création de la gestion des approvisionnements",
      entity: "Ecolivery",
      description: "Développement d'un système structuré pour la gestion des approvisionnements.",
      longDescription: "Mise en place de processus de commande, de suivi des fournisseurs et de gestion des niveaux de stock pour éviter les ruptures.",
      tools: ['Approvisionnement', 'Gestion des fournisseurs', 'ERP'],
      imageAltText: "Personne travaillant sur un ordinateur portable avec un tableau de bord de gestion des approvisionnements.",
      imagePlaceholderText: "procurement management dashboard",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      learnMoreLink: '#',
      resourcesLink: '#'
    },
    {
      id: "lcthermic-integration-stock",
      title: "Intégration du stock sur l'ERP",
      entity: "LC Thermic",
      description: "Migration et intégration des données de stock dans le nouveau système ERP.",
      longDescription: "Assurer la fiabilité des données de stock lors de la transition vers un nouvel ERP, incluant la formation des utilisateurs.",
      tools: ['ERP', 'Migration de données', 'Gestion de projet'],
      imageAltText: "Interface d'un système ERP affichant des informations sur les stocks.",
      imagePlaceholderText: "ERP stock management interface",
      imageUrl: "https://images.unsplash.com/photo-1611095562057-2e70d1e7c891",
      learnMoreLink: '#',
      resourcesLink: '#'
    },
    {
      id: "lcthermic-reorganisation-flux",
      title: "Repenser l'organisation des flux au sein de l'entrepôt",
      entity: "LC Thermic",
      description: "Optimisation des flux physiques pour améliorer l'efficacité de l'entrepôt.",
      longDescription: "Analyse des flux existants, réaménagement des zones de stockage et de préparation pour réduire les déplacements et les temps d'attente.",
      tools: ['Logistique d\'entrepôt', 'Optimisation des flux', 'Lean Management'],
      imageAltText: "Plan d'un entrepôt avec des flèches indiquant les flux de marchandises optimisés.",
      imagePlaceholderText: "warehouse flow optimization plan",
      imageUrl: "https://images.unsplash.com/photo-1568442659029-b041bc886f45",
      learnMoreLink: '#',
      resourcesLink: '#'
    },
    {
      id: "lcthermic-reduction-stock",
      title: "Réduction de la valorisation de stock (LC Thermic)",
      entity: "LC Thermic",
      description: "Stratégies pour diminuer la valeur du stock immobilisé.",
      longDescription: "Analyse des causes de surstock, mise en œuvre d'actions correctives et optimisation des paramètres de gestion des stocks.",
      tools: ['Gestion des stocks', 'Analyse financière', 'Optimisation'],
      imageAltText: "Pile de pièces de monnaie diminuant, symbolisant la réduction de la valeur du stock.",
      imagePlaceholderText: "stock value reduction coins",
      imageUrl: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
      learnMoreLink: '#',
      resourcesLink: '#'
    },
    {
      id: "lcthermic-reorganisation-sav",
      title: "Réorganisation de la chaîne logistique du SAV",
      entity: "LC Thermic",
      description: "Amélioration des processus logistiques pour le service après-vente.",
      longDescription: "Optimisation de la gestion des pièces détachées, des retours clients et des interventions pour améliorer la satisfaction client.",
      tools: ['Logistique SAV', 'Gestion des retours', 'Service client'],
      imageAltText: "Technicien réparant un appareil avec des pièces détachées bien organisées en arrière-plan.",
      imagePlaceholderText: "after sales service logistics",
      imageUrl: "https://images.unsplash.com/photo-1581092916380-9f5098f4f7e6",
      learnMoreLink: '#',
      resourcesLink: '#'
    },
    {
      id: "lcthermic-prevision-demande",
      title: "Création d'un outil de prévision de demande",
      entity: "LC Thermic",
      description: "Développement d'un outil pour anticiper la demande future des produits.",
      longDescription: "Utilisation de données historiques et de modèles statistiques pour créer un outil d'aide à la décision pour les prévisions de vente et d'approvisionnement.",
      tools: ['Prévision de la demande', 'Analyse de données', 'Excel', 'Statistiques'],
      imageAltText: "Graphique de prévision de la demande affiché sur un écran d'ordinateur.",
      imagePlaceholderText: "demand forecasting chart",
      imageUrl: "https://images.unsplash.com/photo-1630514902300-71a360d1a70d",
      learnMoreLink: '#',
      resourcesLink: '#'
    }
  ];

  const allProjects = [featuredProject, ...detailedProjectsData];

  const notionTips = [
    "Définissez clairement vos objectifs et livrables pour chaque projet.",
    "Utilisez des bases de données relationnelles pour lier tâches, notes et ressources.",
    "Créez des vues personnalisées (Kanban, Calendrier, Liste) pour suivre l'avancement.",
    "Automatisez les rappels et les notifications pour ne jamais manquer une échéance."
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
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient-blue-purple mb-4">Galerie de Projets</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Découvrez une sélection de projets qui illustrent ma capacité à analyser, concevoir et implémenter des solutions.</p>
      </header>

      <section id="featured-project" className="mb-20 md:mb-28 p-6 md:p-10 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 rounded-xl shadow-2xl text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center flex items-center justify-center text-white">
            <Award className="h-10 w-10 mr-3 text-yellow-400" /> Projet Phare
          </h2>
          <p className="text-sm text-center text-blue-200 dark:text-blue-300 mb-8">Le projet qui illustre le mieux ma persévérance et mon impact.</p>
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-2/5 h-64 lg:h-auto bg-black/20 dark:bg-black/30 rounded-lg shadow-xl flex items-center justify-center p-4">
              <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-[250px] mx-auto">
                  <ScanBarcode className="w-16 h-16 text-blue-300 opacity-80" />
                  <Barcode className="w-20 h-20 text-purple-300 opacity-90 transform rotate-90" />
                  <QrCode className="w-12 h-12 text-blue-200 opacity-70" />
                  <Barcode className="w-14 h-14 text-purple-200 opacity-60" />
                  <ScanBarcode className="w-16 h-16 text-blue-400 opacity-85" />
                  <QrCode className="w-10 h-10 text-purple-400 opacity-75" />
              </div>
            </div>
            <div className="w-full lg:w-3/5">
              <div className="flex items-center mb-3">
                <ScanBarcode className="h-8 w-8 mr-3 text-yellow-400" />
                <h3 className="text-2xl md:text-3xl font-semibold text-white">{featuredProject.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-1 text-blue-200 dark:text-blue-300">Entité: <span className="font-semibold">{featuredProject.entity}</span></p>
              <p className="text-blue-100 dark:text-blue-200 mb-4 text-md leading-relaxed">{featuredProject.featuredStory}</p>
              <p className="text-blue-100 dark:text-blue-200 mb-6 text-sm leading-relaxed">{featuredProject.longDescription}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-yellow-300 dark:text-yellow-200 mb-2">Outils & Méthodes</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tools.map((tool, idx) => (
                    <span key={idx} className="text-xs px-3 py-1.5 bg-white/20 dark:bg-white/10 text-white rounded-full">{tool}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button asChild variant="outline" className="bg-yellow-400 hover:bg-yellow-500 border-yellow-400 hover:border-yellow-500 text-blue-800 font-semibold" size="sm">
                  <Link to={featuredProject.learnMoreLink}>
                    <ExternalLink size={16} className="mr-2" /> Voir Plus
                  </Link>
                </Button>
                 <Button asChild variant="outline" className="border-white/50 hover:bg-white/10 text-white" size="sm">
                   <a href={featuredProject.resourcesLink} target="_blank" rel="noopener noreferrer">
                    <BookOpen size={16} className="mr-2" /> Ressources
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>


      <section id="detailed-projects" className="mb-20">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gradient-blue-purple flex items-center justify-center">
          <ListChecks className="h-8 w-8 mr-3 text-blue-600 dark:text-blue-400" /> Autres Projets Détaillés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {detailedProjectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} cardVariants={cardVariants} />
          ))}
        </div>
      </section>

      <section id="notion-management" className="mb-20 p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-indigo-900 rounded-xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gradient-blue-purple flex items-center justify-center">
          <CheckSquare className="h-8 w-8 mr-3 text-indigo-600 dark:text-indigo-400" /> Gestion de Projet avec Notion
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <p className="text-muted-foreground mb-4 leading-relaxed">Pour organiser mes projets universitaires et personnels, j'utilise Notion. Cet outil me permet de centraliser toutes les informations, de suivre l'avancement des tâches, de gérer les échéances et de collaborer efficacement.</p>
            <p className="text-muted-foreground leading-relaxed">Grâce à sa flexibilité, je peux créer des tableaux de bord personnalisés, des bases de données relationnelles pour mes recherches, et des calendriers pour une vision globale de mes engagements.</p>
          </div>
          <div className="w-full md:w-1/2">
            <img  
              alt="Interface de gestion de projet Notion avec des tableaux Kanban, des listes de tâches et des calendriers."
              className="rounded-lg shadow-lg object-contain w-full"
             src="https://images.unsplash.com/photo-1608403810239-ac22e2c3bac7" />
          </div>
        </div>
      </section>

      <section id="project-tips">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gradient-blue-purple flex items-center justify-center">
          <ThumbsUp className="h-8 w-8 mr-3 text-green-600 dark:text-green-400" /> Astuces de Gestion de Projet
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notionTips.map((tip, index) => (
            <motion.div
              key={tip}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-card dark:bg-slate-800/50 p-6 rounded-lg shadow-md flex items-start"
            >
              <Lightbulb className="h-6 w-6 mr-4 text-yellow-500 flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">{tip}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectsGalleryPage;