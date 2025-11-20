import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Activity, Award, Map, Package, UserCheck, ArrowLeft } from 'lucide-react';
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
      <Icon className="h-8 w-8 mr-4 text-blue-500 dark:text-blue-400" />
      <h2 className="text-2xl md:text-3xl font-semibold text-gradient-blue-purple">{title}</h2>
    </div>
    <div className="text-muted-foreground dark:text-slate-300 space-y-3">
      {children}
    </div>
  </motion.section>
);

const EcoliveryExperiencePage = () => {
  const navigate = useNavigate();
  const ecoliverySchemaUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/c8f15e6d-9ba2-451a-bf17-90feb63694f8/1cbd8b707409994d86a6281bbb393540.png";

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
        <ShoppingCart size={64} className="mx-auto mb-6 text-blue-500 dark:text-blue-400" />
        <h1 className="text-4xl md:text-5xl font-bold text-gradient-blue-purple mb-4">Mon Expérience chez Ecolivery</h1>
        <p className="text-xl text-muted-foreground">Centrale d'achat et optimisation des flux</p>
      </header>

      <DetailSection title="Activités Principales" icon={Activity}>
        <p>Chez Ecolivery, mes activités principales tournaient autour de la gestion des flux pour une centrale d'achat. Cela incluait :</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Prévision de la demande pour divers matériaux (isolants, consommables).</li>
          <li>Gestion des approvisionnements auprès des fournisseurs.</li>
          <li>Optimisation des niveaux de stock pour répondre aux besoins des entités du groupe et des clients externes.</li>
          <li>Traitement des commandes clients et organisation des livraisons.</li>
          <li>Suivi des indicateurs de performance logistique (taux de service, rotation des stocks, etc.).</li>
        </ul>
      </DetailSection>

      <DetailSection title="Mes Principales Réussites" icon={Award}>
        <p>Quelques réussites notables durant mon passage chez Ecolivery :</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Organisation d’un déménagement d’entrepôt (prévu pour septembre 2024).</li>
          <li>Lancement d’une nouvelle activité ITE (Isolation Thermique par l’Extérieur), incluant la mise en place des flux et stocks associés.</li>
          <li>Contribution à la réduction de la valeur des stocks dormants.</li>
          <li>Mise en place d’un système structuré de gestion des approvisionnements.</li>
          <li>Création d’un outil Excel personnalisé pour la prévision de la demande.</li>
        </ul>
      </DetailSection>

      <DetailSection title="Schéma de l'entrepôt & Articles en Stock" icon={Map}>
        <p>L'entrepôt d'Ecolivery est organisé pour stocker et distribuer efficacement une gamme variée de produits.</p>
        <div className="mt-4 p-4 bg-background dark:bg-slate-700/30 rounded-lg border border-border dark:border-slate-600/50">
          <h4 className="text-lg font-semibold text-primary-foreground dark:text-slate-200 mb-2">Description des articles en stock :</h4>
          <p className="mb-2"><strong>Matériel Isolant :</strong></p>
          <ul className="list-disc list-inside ml-4 text-sm space-y-1">
            <li>Matelas isolants (laine de verre, laine de roche)</li>
            <li>Coquilles de laine de roche pour tuyauterie</li>
            <li>Panneaux d'isolation thermique par l'extérieur (ITE)</li>
            <li>Divers accessoires pour l'isolation (adhésifs, fixations)</li>
          </ul>
          <p className="mt-3 mb-2"><strong>Consommables :</strong></p>
          <ul className="list-disc list-inside ml-4 text-sm space-y-1">
            <li>Produits de quincaillerie générale pour le bâtiment</li>
            <li>Équipements de protection individuelle (EPI)</li>
            <li>Petit outillage</li>
          </ul>
        </div>
        <p className="mt-3">Voici le schéma de l'entrepôt, montrant les zones de réception, de stockage par type de produit (isolants, consommables), de préparation de commandes et d'expédition.</p>
        <div className="my-4 p-3 text-center bg-card dark:bg-slate-800/30 border border-border dark:border-slate-700/50 rounded-md">
          <img  alt="Schéma de l'entrepôt Ecolivery" className="w-full h-auto rounded-md my-2" src={ecoliverySchemaUrl} />
        </div>
      </DetailSection>

      <DetailSection title="Mon Rôle au sein de l'Entité" icon={UserCheck}>
        <p>En tant qu'Assistant Supply Chain chez Ecolivery, mon rôle était polyvalent et crucial pour assurer la fluidité des opérations. Je collaborais étroitement avec les équipes commerciales pour anticiper les besoins, avec les fournisseurs pour garantir les approvisionnements, et avec l'équipe logistique pour optimiser la gestion de l'entrepôt.</p>
        <p className="mt-2">J'étais force de proposition pour l'amélioration des processus, notamment à travers la digitalisation et l'optimisation des outils de gestion. Mon objectif constant était d'assurer la disponibilité des produits tout en maîtrisant les coûts et les niveaux de stock.</p>
      </DetailSection>

    </motion.div>
  );
};

export default EcoliveryExperiencePage;