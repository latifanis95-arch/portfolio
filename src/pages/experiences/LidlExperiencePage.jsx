
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, Lightbulb, Star, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DetailCard = ({ icon: Icon, title, children }) => (
  <motion.div
    className="animated-card-container"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="animated-card-content p-6 md:p-8 h-full">
      <div className="flex items-center mb-4">
        <Icon className="h-7 w-7 text-blue-400 mr-4" />
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="text-base text-muted-foreground space-y-2">
        {children}
      </div>
    </div>
  </motion.div>
);

const LidlExperiencePage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="py-24 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild variant="ghost" className="mb-4">
              <Link to="/experiences">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux expériences
              </Link>
            </Button>
          </motion.div>

          <motion.header 
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lidl-Logo.svg/1003px-Lidl-Logo.svg.png" alt="LIDL Logo" className="h-12 mx-auto mb-4 bg-white p-2 rounded-md" />
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-blue-purple">
              Chef de Projet Supply Chain
            </h1>
            <p className="text-lg text-muted-foreground mt-2">LIDL France</p>
          </motion.header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <DetailCard icon={Briefcase} title="Poste">
              <p>Chef de Projet Supply Chain</p>
            </DetailCard>
            <DetailCard icon={Calendar} title="Période">
              <p>Septembre 2025 – Aujourd'hui</p>
            </DetailCard>
            <div className="md:col-span-2">
              <DetailCard icon={Award} title="Réalisation Importante">
                <p className="font-semibold text-foreground">[Placeholder] Réduction de 15% des coûts logistiques sur le périmètre Europe de l'Ouest.</p>
                <p>Grâce au déploiement d'un nouvel outil de planification des transports (TMS) et à la renégociation des contrats cadres avec les principaux transporteurs.</p>
              </DetailCard>
            </div>
            <div className="md:col-span-2">
              <DetailCard icon={Lightbulb} title="Leçon Apprise">
                <p className="font-semibold text-foreground">[Placeholder] L'importance de la conduite du changement.</p>
                <p>Un outil, aussi performant soit-il, n'est rien sans l'adhésion des équipes. La communication transparente et la formation continue sont les clés du succès pour tout projet de transformation digitale.</p>
              </DetailCard>
            </div>
            <div className="md:col-span-2">
              <DetailCard icon={Star} title="Projet Phare">
                <p className="font-semibold text-foreground">[Placeholder] Projet 'Phoenix' : Intégration d'une solution WMS unifiée.</p>
                <p>Pilotage du déploiement d'un nouveau Warehouse Management System (WMS) dans 5 entrepôts stratégiques en France et en Allemagne. Coordination des équipes IT, logistiques et formation des utilisateurs finaux pour une transition fluide et une amélioration mesurable de la productivité.</p>
              </DetailCard>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LidlExperiencePage;
