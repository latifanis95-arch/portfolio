import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Activity, Award, Map, Package, UserCheck, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const DetailSection = ({ title, icon: Icon, children }) => (
  <motion.section 
    className="mb-12 p-6 bg-card dark:bg-slate-800/50 rounded-xl shadow-xl border border-border dark:border-slate-700/50"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-6">
      <Icon className="h-8 w-8 mr-4 text-teal-500 dark:text-teal-400" />
      <h2 className="text-2xl md:text-3xl font-semibold text-gradient-teal-green">{title}</h2>
    </div>
    <div className="text-muted-foreground dark:text-slate-300 space-y-3">
      {children}
    </div>
  </motion.section>
);

const LcThermicExperiencePage = () => {
  const navigate = useNavigate();
  const lcThermicSchemaUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/c8f15e6d-9ba2-451a-bf17-90feb63694f8/e90dde288e8868195873fea970af0dd2.png";

  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 20 }
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
      <Button 
        variant="outline" 
        onClick={() => navigate('/experiences')} 
        className="mb-8 group"
      >
        <ArrowLeft size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
        Retour aux Expériences
      </Button>

      <header className="text-center mb-16">
        <Wrench size={64} className="mx-auto mb-6 text-teal-500 dark:text-teal-400" />
        <h1 className="text-4xl md:text-5xl font-bold text-gradient-teal-green mb-4">Mon Expérience chez LC Thermic</h1>
        <p className="text-xl text-muted-foreground">Logistique de chantier et gestion CVC</p>
      </header>

      <DetailSection title="Activités Principales" icon={Activity}>
        <p>Chez LC Thermic, une entreprise spécialisée en CVC (Chauffage, Ventilation, Climatisation), mes activités principales étaient axées sur la logistique de chantier :</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Coordination des approvisionnements spécifiques pour les chantiers (chaudières, radiateurs, pompes à chaleur, etc.).</li>
          <li>Gestion des livraisons directes sur site et suivi des équipements.</li>
          <li>Intégration du stock de pièces détachées et de matériel courant dans l'ERP.</li>
          <li>Mise en place d'outils de traçabilité (codes-barres, scanners) pour le matériel.</li>
          <li>Optimisation des flux logistiques internes de l'entrepôt de l'agence.</li>
          <li>Participation à la réorganisation du service après-vente (SAV) pour la gestion des pièces.</li>
        </ul>
      </DetailSection>

      <DetailSection title="Mes Principales Réussites" icon={Award}>
        <p>Parmi mes contributions significatives chez LC Thermic :</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Intégration réussie du stock physique dans l’ERP, améliorant la visibilité et la gestion.</li>
          <li>Déploiement d'un système de traçabilité par code-barres et scanners, réduisant les pertes et les erreurs.</li>
          <li>Réorganisation des flux logistiques internes de l’entrepôt, optimisant l'espace et les temps de préparation.</li>
          <li>Contribution à la réduction de la valorisation des stocks obsolètes ou excédentaires.</li>
          <li>Participation active à la réorganisation complète du service après-vente (SAV) pour une meilleure gestion des pièces et des interventions.</li>
        </ul>
      </DetailSection>

      <DetailSection title="Schéma de l'entrepôt & Articles en Stock" icon={Map}>
        <p>L'entrepôt de LC Thermic est conçu pour supporter les opérations de chantier CVC, avec un stock de matériel courant et de pièces détachées.</p>
        <div className="mt-4 p-4 bg-background dark:bg-slate-700/30 rounded-lg border border-border dark:border-slate-600/50">
          <h4 className="text-lg font-semibold text-primary-foreground dark:text-slate-200 mb-2">Description des articles en stock :</h4>
          <p className="mb-2"><strong>Matériel CVC :</strong></p>
          <ul className="list-disc list-inside ml-4 text-sm space-y-1">
            <li>Chaudières (gaz, fioul) et leurs composants</li>
            <li>Radiateurs et sèches-serviettes</li>
            <li>Pompes à chaleur et unités de climatisation</li>
            <li>Accessoires de plomberie (raccords, vannes, tuyauterie cuivre/PER)</li>
            <li>Quincaillerie spécifique CVC (fixations, supports)</li>
            <li>Outillage pour techniciens</li>
          </ul>
          <p className="mt-3 mb-2"><strong>Pièces détachées SAV :</strong></p>
          <ul className="list-disc list-inside ml-4 text-sm space-y-1">
            <li>Composants électroniques pour chaudières</li>
            <li>Joints, filtres, thermostats</li>
            <li>Pièces spécifiques aux modèles installés</li>
          </ul>
        </div>
        <p className="mt-3">Voici le schéma de l'entrepôt, illustrant l'organisation des zones : réception, stockage matériel CVC, zone pièces SAV, préparation pour chantiers, et expédition/retour matériel.</p>
        <div className="my-4 p-3 text-center bg-card dark:bg-slate-800/30 border border-border dark:border-slate-700/50 rounded-md">
          <img  alt="Schéma de l'entrepôt LC Thermic" className="w-full h-auto rounded-md my-2" src={lcThermicSchemaUrl} />
        </div>
      </DetailSection>

      <DetailSection title="Mon Rôle au sein de l'Entité" icon={UserCheck}>
        <p>Chez LC Thermic, mon rôle d'Assistant Supply Chain était centré sur le support logistique direct aux opérations de chantier et au service après-vente. Je devais assurer que les techniciens disposaient du bon matériel, au bon moment et au bon endroit.</p>
        <p className="mt-2">Cela impliquait une forte coordination avec les conducteurs de travaux, les techniciens SAV et les fournisseurs. J'ai activement participé à la modernisation des outils et des processus logistiques pour améliorer l'efficacité, réduire les coûts et garantir la satisfaction client à travers une meilleure disponibilité des pièces et équipements.</p>
      </DetailSection>

    </motion.div>
  );
};

export default LcThermicExperiencePage;