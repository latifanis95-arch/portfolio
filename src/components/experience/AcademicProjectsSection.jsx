import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, CheckSquare } from 'lucide-react'; // Import CheckSquare

import ProjectFilterBar from '@/components/experience/ProjectFilterBar';
import ProjectGridCard from '@/components/experience/ProjectGridCard';
import ProjectModal from '@/components/experience/ProjectModal';

const allProjectsData = [
  {
    id: "project-codebarre",
    title: "Intégration de scanners et codes-barres",
    impact: "réduction du temps de préparation de 70 %",
    summary: "Digitalisation de la traçabilité des stocks pour accélérer les inventaires et réduire les erreurs.",
    description: "Durant mon alternance, j'ai identifié un besoin d'amélioration de la traçabilité des actifs. J'ai mené ce projet de A à Z : choix du matériel, redéfinition des processus pour inclure le scan à chaque étape clé, formation des équipes et supervision du déploiement. Ce projet a permis de réduire significativement les erreurs de saisie, d'accélérer les inventaires et d'améliorer la visibilité globale des opérations.",
    image: "https://horizons-cdn.hostinger.com/c8f15e6d-9ba2-451a-bf17-90feb63694f8/545727d1c1d6d4599aff87fd28a26fc0.png",
    tags: ["ERP", "Digitalisation", "Traçabilité", "Gestion de projet"],
    company: "KS Holding",
    isFeatured: true,
    results: "Inventaires accélérés, erreurs de saisie réduites, visibilité globale des opérations améliorée."
  },
  {
    id: "ecolivery-demenagement",
    title: "Déménagement de l’entrepôt",
    impact: "En attente",
    summary: "Planification et exécution du transfert complet des stocks et équipements vers un nouveau site, sans rupture d'activité.",
    description: "J'ai coordonné la logistique complète du transfert des stocks, des équipements et du personnel vers un nouveau site d'exploitation, en élaborant un plan détaillé pour minimiser l'impact sur les opérations quotidiennes d'Ecolivery.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=450&fit=crop",
    tags: ["Gestion de projet", "Planification", "Logistique"],
    company: "Ecolivery",
  },
  {
    id: "ecolivery-ite",
    title: "Démarrage de l’activité ITE",
    impact: "libération de 18 % d’emplacement pour accueillir cette nouvelle activité",
    summary: "Mise en place des processus logistiques pour une nouvelle gamme de produits d'Isolation Thermique par l'Extérieur.",
    description: "Lancement d'une nouvelle gamme de produits (ITE). Ma mission était de mettre en place tous les processus de stockage, de préparation de commandes et de gestion des stocks spécifiques à ces nouveaux produits volumineux et fragiles.",
    image: "https://horizons-cdn.hostinger.com/c8f15e6d-9ba2-451a-bf17-90feb63694f8/6bd0275a169ca98c404434e94e05a2f0.png",
    tags: ["Optimisation", "Gestion de stock", "Entrepôt"],
    company: "Ecolivery",
  },
  {
    id: "ecolivery-reduction-stock",
    title: "Réduction de la valorisation du stock",
    impact: "-70 % de valeur de stock",
    summary: "Analyse des surstocks et mise en œuvre de stratégies pour réduire la valeur du stock immobilisé.",
    description: "J'ai mené une analyse approfondie via Excel pour identifier les surstocks et les articles à faible rotation. Sur cette base, j'ai proposé et mis en œuvre des stratégies de déstockage et d'amélioration des prévisions pour une meilleure rotation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=450&fit=crop",
    tags: ["Excel", "Analyse de données", "Gestion de stock"],
    company: "Ecolivery",
  },
  {
    id: "ecolivery-gestion-appro",
    title: "Création d'un système de gestion des approvisionnements",
    impact: "En attente",
    summary: "Développement et structuration d'un système de commande et de suivi des fournisseurs pour éviter les ruptures.",
    description: "Face à des ruptures de stock récurrentes, j'ai développé un système structuré pour la gestion des approvisionnements. Cela incluait la mise en place de processus de commande clairs, le suivi rigoureux des fournisseurs et la gestion proactive des niveaux de stock via notre ERP.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&h=450&fit=crop",
    tags: ["ERP", "Approvisionnement", "Gestion fournisseurs"],
    company: "Ecolivery",
  },
  {
    id: "lcthermic-integration-stock",
    title: "Intégration du stock sur l’ERP",
    impact: "En attente",
    summary: "Migration des données de stock vers un nouvel ERP pour fiabiliser la base article et former les équipes.",
    description: "J'ai participé activement à la migration des données de stock lors de la transition vers un nouvel ERP. Mon rôle était d'assurer la fiabilité des données et de former les utilisateurs finaux pour garantir une adoption rapide et efficace du nouvel outil.",
    image: "https://horizons-cdn.hostinger.com/c8f15e6d-9ba2-451a-bf17-90feb63694f8/ff34e674cadb611f84c59580f105d56c.png",
    tags: ["ERP", "Digitalisation", "Migration de données"],
    company: "LC Thermic",
  },
  {
    id: "lcthermic-reorganisation-flux",
    title: "Réorganisation des flux chantiers",
    impact: "+11 % de marge sur un chantier",
    summary: "Application des principes du Lean pour optimiser les cheminements et réduire les déplacements inutiles sur les chantiers.",
    description: "Après une analyse approfondie des flux physiques sur les chantiers, j'ai proposé un réaménagement des zones de stockage et de préparation. Inspiré des méthodes Lean, ce projet a permis de réduire les déplacements et les temps d'attente, améliorant ainsi l'efficacité globale.",
    image: "https://horizons-cdn.hostinger.com/c8f15e6d-9ba2-451a-bf17-90feb63694f8/d703ec1f9bc792b49108cbb97484884c.png",
    tags: ["Optimisation", "Lean", "Logistique d'entrepôt"],
    company: "LC Thermic",
  },
  {
    id: "lcthermic-reduction-stock-2",
    title: "Réduction de la valorisation du stock",
    impact: "En attente",
    summary: "Mise en œuvre d'actions correctives ciblées pour analyser et limiter le surstock chronique.",
    description: "Similaire au projet chez Ecolivery mais avec des enjeux différents, j'ai analysé les causes de surstock spécifiques à l'activité CVC de LC Thermic. J'ai mis en place des actions correctives et optimisé les paramètres de gestion des stocks pour diminuer durablement la valeur immobilisée.",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=800&h=450&fit=crop",
    tags: ["Analyse financière", "Gestion de stock", "Optimisation"],
    company: "LC Thermic",
  },
  {
    id: "lcthermic-reorganisation-sav",
    title: "Réorganisation de la chaîne logistique du SAV",
    impact: "En attente",
    summary: "Amélioration de la gestion des pièces détachées et des retours pour augmenter la satisfaction client.",
    description: "La logistique du SAV était un point critique. J'ai repensé les processus de gestion des pièces détachées, des retours clients et des interventions pour fluidifier les opérations et améliorer significativement la réactivité du service et la satisfaction client.",
    image: "https://horizons-cdn.hostinger.com/c8f15e6d-9ba2-451a-bf17-90feb63694f8/fbb2efb6681607b25a1f960dc2469e71.png",
    tags: ["SAV", "Service client", "Optimisation"],
    company: "LC Thermic",
  },
  {
    id: "lcthermic-prevision-demande",
    title: "Création d’un outil de prévision de la demande",
    impact: "consommations basées sur prévisions statistiques et non plus sur l’expérience",
    summary: "Développement d'un outil sur Excel pour anticiper les besoins en composants et optimiser les commandes.",
    description: "En utilisant les données de ventes historiques, j'ai développé un outil sur Excel avec des modèles statistiques simples pour créer un outil d'aide à la décision. Il permet d'anticiper la demande future et d'optimiser les commandes d'approvisionnement.",
    image: "https://horizons-cdn.hostinger.com/c8f15e6d-9ba2-451a-bf17-90feb63694f8/e4d4b04d72872b54b60f160fb63d7bce.png",
    tags: ["Prévision de la demande", "Excel", "Analyse de données"],
    company: "LC Thermic",
  }
];

const allSkills = ["ERP", "Excel", "Digitalisation", "Gestion de stock", "SAV", "Optimisation", "Prévision de la demande", "Gestion de projet", "Logistique", "Traçabilité", "Planification", "Entrepôt", "Analyse de données", "Gestion fournisseurs", "Migration de données", "Lean", "Logistique d'entrepôt", "Analyse financière", "Service client" ];
const allCompanies = ["KS Holding", "Ecolivery", "LC Thermic"];

const AcademicProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  
  const filteredProjects = useMemo(() => {
    return allProjectsData
      .filter(project => {
        const searchMatch = searchTerm.length === 0 ||
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        const skillMatch = selectedSkills.length === 0 ||
          selectedSkills.every(skill => project.tags.includes(skill));

        const companyMatch = selectedCompanies.length === 0 ||
          selectedCompanies.includes(project.company);

        return searchMatch && skillMatch && companyMatch;
      })
      .sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
  }, [searchTerm, selectedSkills, selectedCompanies]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedSkills([]);
    setSelectedCompanies([]);
  };

  const exploreSimilar = useCallback((project) => {
    const projectSkills = project.tags.filter(tag => allSkills.includes(tag));
    
    setSelectedSkills(projectSkills);
    setSelectedCompanies([project.company]);
    setSearchTerm('');
    
    setSelectedProject(null);

    setTimeout(() => {
      const section = document.getElementById('academic-projects-and-notion');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, []);

  const handleTagClick = useCallback((tag) => {
    if(allSkills.includes(tag)) {
        setSelectedSkills(prev => prev.includes(tag) ? prev : [...prev, tag]);
    } else if (allCompanies.includes(tag)) {
        setSelectedCompanies(prev => prev.includes(tag) ? prev : [...prev, tag]);
    }
    setSelectedProject(null);

    setTimeout(() => {
        const section = document.getElementById('academic-projects-and-notion');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
  }, []);

  return (
    <>
      <section id="academic-projects-and-notion" className="mb-16 md:mb-20 scroll-mt-24">
        <ProjectFilterBar
          skills={Array.from(new Set(allProjectsData.flatMap(p => p.tags)))}
          companies={allCompanies}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
          selectedCompanies={selectedCompanies}
          onReset={handleResetFilters}
        />

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectGridCard 
                key={project.id} 
                project={project} 
                onOpenModal={() => setSelectedProject(project)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 text-muted-foreground"
          >
            <p className="font-semibold">Aucun projet ne correspond à vos filtres.</p>
            <p className="text-sm mt-2">Essayez de réinitialiser les filtres pour voir tous les projets.</p>
          </motion.div>
        )}

      </section>

      <motion.section id="notion-management" className="mt-20 p-8 bg-black/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl shadow-xl">
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
      </motion.section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
            onExploreSimilar={exploreSimilar}
            onTagClick={handleTagClick}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default AcademicProjectsSection;