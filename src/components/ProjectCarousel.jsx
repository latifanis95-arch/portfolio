import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink, ScanBarcode, Warehouse, ArrowRightLeft, PackageSearch, Wrench, Brain, ChevronLeft, ChevronRight, Building2, TrendingUp, Settings, Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectCarousel = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const projectsData = [
    {
      id: "project-codebarre",
      title: 'Intégration Scanners & Code-barres',
      entity: "KS Holding",
      description: 'Amélioration de la traçabilité et de l\'efficacité opérationnelle.',
      tags: ['ERP', 'Scanners', 'Traçabilité'],
      learnMoreLink: '/projects-gallery#project-codebarre',
      resourcesLink: '#',
      icon: <ScanBarcode className="h-10 w-10 text-blue-400 mb-3" />
    },
    {
      id: "ecolivery-demenagement",
      title: "Déménagement d'entrepôt",
      entity: "Ecolivery",
      description: "Planification et exécution du déménagement complet d'un entrepôt.",
      tags: ['Logistique', 'Gestion de Projet'],
      learnMoreLink: '/projects-gallery#ecolivery-demenagement',
      resourcesLink: '#',
      icon: <Truck className="h-10 w-10 text-blue-400 mb-3" />
    },
    {
      id: "ecolivery-ite",
      title: "Démarrage activité ITE",
      entity: "Ecolivery",
      description: "Lancement d'une nouvelle gamme de produits d'Isolation Thermique.",
      tags: ['Nouveau Produit', 'Stock'],
      learnMoreLink: '/projects-gallery#ecolivery-ite',
      resourcesLink: '#',
      icon: <Building2 className="h-10 w-10 text-blue-400 mb-3" />
    },
    {
      id: "ecolivery-reduction-stock",
      title: "Réduction Valorisation Stock",
      entity: "Ecolivery",
      description: "Analyse et optimisation des niveaux de stock pour réduire les coûts.",
      tags: ['Optimisation', 'Finance'],
      learnMoreLink: '/projects-gallery#ecolivery-reduction-stock',
      resourcesLink: '#',
      icon: <TrendingUp className="h-10 w-10 text-blue-400 mb-3" />
    },
    {
      id: "ecolivery-gestion-appro",
      title: "Création Gestion Approvisionnements",
      entity: "Ecolivery",
      description: "Développement d'un système structuré pour les approvisionnements.",
      tags: ['Processus', 'Fournisseurs'],
      learnMoreLink: '/projects-gallery#ecolivery-gestion-appro',
      resourcesLink: '#',
      icon: <Settings className="h-10 w-10 text-blue-400 mb-3" />
    },
    {
      id: "lcthermic-integration-stock",
      title: "Intégration Stock sur ERP",
      entity: "LC Thermic",
      description: "Migration et intégration des données de stock dans le nouveau système ERP.",
      tags: ['ERP', 'Données', 'Migration'],
      learnMoreLink: '/projects-gallery#lcthermic-integration-stock',
      resourcesLink: '#',
      icon: <Warehouse className="h-10 w-10 text-blue-400 mb-3" />
    },
    {
      id: "lcthermic-reorganisation-flux",
      title: "Réorganisation Flux Entrepôt",
      entity: "LC Thermic",
      description: "Optimisation des flux physiques pour améliorer l'efficacité.",
      tags: ['Logistique', 'Lean'],
      learnMoreLink: '/projects-gallery#lcthermic-reorganisation-flux',
      resourcesLink: '#',
      icon: <ArrowRightLeft className="h-10 w-10 text-blue-400 mb-3" />
    },
    {
      id: "lcthermic-reduction-stock",
      title: "Réduction Valorisation Stock",
      entity: "LC Thermic",
      description: "Stratégies pour diminuer la valeur du stock immobilisé.",
      tags: ['Stock', 'Finance', 'Analyse'],
      learnMoreLink: '/projects-gallery#lcthermic-reduction-stock',
      resourcesLink: '#',
      icon: <PackageSearch className="h-10 w-10 text-blue-400 mb-3" />
    },
    {
      id: "lcthermic-reorganisation-sav",
      title: "Réorganisation Logistique SAV",
      entity: "LC Thermic",
      description: "Amélioration des processus logistiques pour le service après-vente.",
      tags: ['SAV', 'Service Client'],
      learnMoreLink: '/projects-gallery#lcthermic-reorganisation-sav',
      resourcesLink: '#',
      icon: <Wrench className="h-10 w-10 text-blue-400 mb-3" />
    },
    {
      id: "lcthermic-prevision-demande",
      title: "Outil Prévision Demande",
      entity: "LC Thermic",
      description: "Développement d'un outil pour anticiper la demande future des produits.",
      tags: ['Prévision', 'Data', 'Statistiques'],
      learnMoreLink: '/projects-gallery#lcthermic-prevision-demande',
      resourcesLink: '#',
      icon: <Brain className="h-10 w-10 text-blue-400 mb-3" />
    }
  ];


  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
     api.on("reInit", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);


  return (
    <section id="projects-carousel" className="py-20 md:py-28 bg-transparent section-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-blue-purple"
          >
            Mes Projets Clés
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-300 max-w-3xl mx-auto px-4"
          >
            {t('homeProjects.subtitle')}
          </motion.p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true, 
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto relative"
        >
          <CarouselContent>
            {projectsData.map((project) => (
              <CarouselItem key={project.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-800/70 p-4 rounded-xl shadow-xl flex flex-col h-full hover:shadow-blue-500/20 dark:hover:shadow-blue-400/30 transition-shadow duration-300 border border-white/10"
                  >
                    <div className="flex items-center justify-center mb-4 mt-2">
                       {project.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gradient-blue-purple mb-1 text-center">{project.title}</h3>
                    <p className="text-xs text-slate-400 mb-2 text-center">Entité: {project.entity}</p>
                    <p className="text-slate-300 text-sm mb-4 text-center flex-grow px-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5 justify-center">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2.5 py-1 bg-blue-900/40 text-blue-300 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full sm:w-auto flex-grow sm:flex-grow-0 whitespace-nowrap text-xs"
                        size="sm"
                      >
                        <Link to={project.learnMoreLink}>
                          <ExternalLink size={14} className="mr-1.5" /> En savoir plus
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-gray-700 text-gray-300 hover:bg-gray-700 w-full sm:w-auto flex-grow sm:flex-grow-0 whitespace-nowrap text-xs"
                        size="sm"
                      >
                        <a href={project.resourcesLink} target="_blank" rel="noopener noreferrer">
                          <BookOpen size={14} className="mr-1.5" /> Ressources
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {projectsData.length > 1 && (
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center space-x-4 p-2 bg-slate-700/80 rounded-full shadow-md backdrop-blur-sm">
              <Button variant="ghost" size="icon" onClick={scrollPrev} className="rounded-full h-8 w-8 text-white hover:bg-white/10">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex space-x-1.5">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      index === current - 1 ? 'bg-white scale-125 w-3' : 'bg-slate-400/50 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <Button variant="ghost" size="icon" onClick={scrollNext} className="rounded-full h-8 w-8 text-white hover:bg-white/10">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </Carousel>

        <div className="text-center mt-24 sm:mt-20 md:mt-24">
          <Button
            variant="default"
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-base px-8 py-3 shadow-lg hover:shadow-xl"
            asChild
          >
            <Link to="/projects-gallery">Voir la Galerie des Projets</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;