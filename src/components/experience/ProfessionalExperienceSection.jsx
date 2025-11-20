import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '@/components/experience/ExperienceCard';
import CompanyCard from '@/components/experience/CompanyCard';
import { Building, Activity, ListChecks, ChevronRight, CheckCircle, Package, Send, Repeat, Map, Tag, Archive, Users, Truck, TrendingUp, FileText, GitBranch, Wrench, Search, Layers, Warehouse, Briefcase as BriefcaseIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AccordionDetailedBlock = ({ title, icon: Icon, children, defaultOpen = false, customIcon }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <motion.div
      className="mb-6 bg-white/50 dark:bg-slate-800/20 backdrop-blur-lg rounded-3xl shadow-apple transition-shadow duration-300 hover:shadow-apple-hover overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          {customIcon ? (
             <div className="mr-5 flex-shrink-0">{customIcon}</div>
          ) : (
            Icon && <Icon className="h-8 w-8 mr-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          )}
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">{title}</h3>
        </div>
        <ChevronRight
          className={`h-7 w-7 text-muted-foreground transform transition-transform duration-300 ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-muted-foreground text-base space-y-4">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

const KsHoldingPresentationCard = () => {
    const ksHoldingLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/c8f15e6d-9ba2-451a-bf17-90feb63694f8/fa65ff6e19421b63068e278664143c33.png";
    const ksHoldingImageUrl = "https://horizons-cdn.hostinger.com/c8f15e6d-9ba2-451a-bf17-90feb63694f8/9ac8b18ea8bf9d2694adcdc6e44e0055.png";

    return (
        <motion.div
            className="overflow-hidden rounded-3xl shadow-apple mb-12 bg-white/50 dark:bg-slate-800/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                    <img src={ksHoldingLogoUrl} alt="Logo KS Holding" className="h-10 w-auto object-contain mb-6" />
                    
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                        Présentation de KS Holding
                    </h3>

                    <div className="space-y-4 text-muted-foreground">
                        <p className="flex items-start">
                            <span className="mr-3 mt-1 text-lg">🏗️</span>
                            <span className="text-base">KS Holding est un groupe d'entreprises du <strong>bâtiment</strong> regroupant une dizaine d’entités, chacune spécialisée dans un domaine spécifique.</span>
                        </p>
                        <p className="flex items-start">
                            <span className="mr-3 mt-1 text-lg">📦</span>
                            <span className="text-base">Le service <strong>logistique</strong> est mutualisé et adapte ses ressources en fonction des besoins spécifiques de chaque entité.</span>
                        </p>
                        <p className="flex items-start">
                            <span className="mr-3 mt-1 text-lg">👷</span>
                            <span className="text-base">Cette entreprise compte une <strong>cinquantaine d'employés</strong>, dont une vingtaine en bureaux et une trentaine sur chantier.</span>
                        </p>
                         <p className="flex items-start">
                            <Warehouse className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                            <span className="text-base">L'entité possède <strong>4 entrepôts</strong> : 2 pour LC Thermic, 1 pour Ecolivery et 1 pour l'échafaudage commun.</span>
                        </p>
                    </div>
                </div>
                <div className="relative h-64 lg:h-auto min-h-[300px]">
                    <img 
                        src={ksHoldingImageUrl}
                        alt="Illustration 3D d'une maison moderne"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </motion.div>
    );
};

const ProjectListItem = ({ children, icon: Icon = CheckCircle, details }) => (
  <li className="flex items-start py-1.5">
    <Icon size={20} className="mr-4 mt-1 text-green-500 flex-shrink-0" />
    <div>
      <span className="text-base">{children}</span>
      {details && <p className="text-sm text-muted-foreground/80 pl-0 mt-1">{details}</p>}
    </div>
  </li>
);

const CompanyBlock = ({ logoSrc, logoAlt, name, description }) => (
  <div className="mt-4 p-6 bg-slate-800/30 rounded-2xl">
    <div className="flex flex-col sm:flex-row items-center sm:items-start">
      <img src={logoSrc} alt={logoAlt} className="h-12 sm:h-16 mb-4 sm:mb-0 sm:mr-5 object-contain" />
      <div className="text-center sm:text-left">
        <h4 className="text-lg font-semibold text-foreground mb-1">{name}</h4>
        <p className="text-base">{description}</p>
      </div>
    </div>
  </div>
);

const ProfessionalExperienceSection = ({ professionalExperiencesSC, otherExperiences }) => {
  useNavigate();
  const ecoliveryLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/c8f15e6d-9ba2-451a-bf17-90feb63694f8/971a3c7e303cbf69efced150da8f60f1.png";
  const lcThermicLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/c8f15e6d-9ba2-451a-bf17-90feb63694f8/e3a041a180228dce12524275e6b6e98a.png";

  const ecoliveryProjects = [
    { id: "eco-proj-1", title: "Déménagement de l'entrepôt", icon: Truck, details: "Planification et exécution du transfert complet des stocks et équipements vers un nouveau site." },
    { id: "eco-proj-2", title: "Démarrage de l'activité ITE", icon: Building, details: "Lancement de la gamme Isolation Thermique par l'Extérieur, incluant la mise en place des processus logistiques dédiés." },
    { id: "eco-proj-3", title: "Réduction de la valorisation de stock", icon: TrendingUp, details: "Analyse des stocks et mise en œuvre de stratégies pour optimiser les niveaux et réduire les coûts." },
    { id: "eco-proj-4", title: "Création de la gestion des approvisionnements", icon: FileText, details: "Développement et structuration d'un système pour gérer les commandes fournisseurs et les niveaux de stock." },
  ];

  const lcThermicProjects = [
    { id: "lc-proj-1", title: "Intégration du stock sur l'ERP", icon: Archive, details: "Migration des données de stock et paramétrage du module inventaire dans le nouveau système ERP." },
    { id: "lc-proj-2", title: "Repenser l'organisation des flux au sein de l'entrepôt", icon: GitBranch, details: "Optimisation des cheminements et des zones de stockage pour améliorer l'efficacité des preparations de commandes." },
    { id: "lc-proj-3", title: "Réduction de la valorisation de stock", icon: TrendingUp, details: "Analyse des surstocks et des articles à faible rotation pour diminuer la valeur du stock immobilisé." },
    { id: "lc-proj-4", title: "Réorganisation de la chaîne logistique du SAV", icon: Wrench, details: "Amélioration des processus de gestion des pièces détachées et des retours pour le service après-vente." },
    { id: "lc-proj-5", title: "Création d'un outil de prévision de demande", icon: Search, details: "Développement d'un modèle Excel pour anticiper les besoins en composants et optimiser les commandes." },
  ];

  const companiesData = [
    {
      image: { src: "https://horizons-cdn.hostinger.com/c8f15e6d-9ba2-451a-bf17-90feb63694f8/13e3949fc0a8769408e4e1af402a0852.png", alt: "Aperçu du site Ecolivery" },
      title: "Ecolivery",
      badge: "Septembre 2023 – Septembre 2024 · Assistant Logistique",
      description: "Prévision de la demande, distribution, optimisation des stocks et approvisionnements.",
      primaryAction: { label: "En Savoir plus", href: "/experiences/ecolivery" },
      secondaryAction: { label: "Découvrir l’entreprise", href: "https://www.ecolivery.fr/" }
    },
    {
      image: { src: "https://horizons-cdn.hostinger.com/c8f15e6d-9ba2-451a-bf17-90feb63694f8/5de0608828a7a727df3e120fb4201b5e.png", alt: "Aperçu du site LC Thermic" },
      title: "LC Thermic",
      badge: "Septembre 2024 – Septembre 2025 · Assistant du Responsable Logistique",
      description: "Coordination des approvisionnements pour chantiers CVC, suivi des équipements et du SAV.",
      primaryAction: { label: "En Savoir plus", href: "/experiences/lc-thermic" },
      secondaryAction: { label: "Découvrir l’entreprise", href: "https://www.lc-thermic.com/" }
    },
    {
      image: { src: "https://horizons-cdn.hostinger.com/c8f15e6d-9ba2-451a-bf17-90feb63694f8/5eb279082bb4d87aec7af6f927823b0e.png", alt: "Entrepôt moderne et lumineux de LIDL" },
      title: "LIDL France",
      badge: "Septembre 2025 – Aujourd'hui · Chef de Projet Supply Chain",
      description: "Pilotage de projets transverses d'intégration et de développement d'outils à l'échelle internationale. Optimisation des processus, digitalisation, coordination multi-acteurs et déploiement d'outils supply chain.",
      primaryAction: { label: "En Savoir plus", href: "/experiences/lidl" },
      secondaryAction: { label: "Découvrir l’entreprise", href: "https://emplois.lidl.fr/notre-culture" }
    }
  ];

  return (
    <>
      <motion.h2 
        className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gradient-blue-purple flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Layers className="h-8 w-8 mr-3" /> Mes expériences en Supply Chain
      </motion.h2>

      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companiesData.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </div>
        <p className="text-base text-muted-foreground dark:text-slate-400 mt-8 text-center max-w-2xl mx-auto">
          Choisissez une entité pour explorer mes réalisations ou visitez le site officiel de l’entreprise.
        </p>
      </motion.div>

      <KsHoldingPresentationCard />

      {/* New section for detailed experience entries */}
      <section id="detailed-supply-chain-experiences" className="mt-16 mb-16 scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-gradient-blue-purple flex items-center justify-center">
          <BriefcaseIcon className="h-8 w-8 mr-3" /> Mon Parcours en Détail
        </h2>
        <motion.div 
          className="grid md:grid-cols-1 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
        >
          {professionalExperiencesSC.map((exp, index) => (
            <ExperienceCard key={`prof-sc-${index}`} experience={exp} />
          ))}
        </motion.div>
      </section>
      {/* End of new section */}

      <div id="company-presentations">
        <AccordionDetailedBlock title="Présentation des entreprises principales" icon={Building} defaultOpen={false}>
          <p className="mb-4">Le service logistique de KS Holding travaille principalement pour deux entités car ce sont les seules à disposer d'un entrepôt physique, permettant une gestion des stocks et des flux plus complexe et volumineuse. Les autres entités du groupe fonctionnent majoritairement en flux tendu, avec des besoins logistiques plus directs (commande/livraison sans stockage intermédiaire important).</p>
          
          <CompanyBlock
            logoSrc={ecoliveryLogoUrl}
            logoAlt="Logo Ecolivery"
            name="Ecolivery (Centrale d'achat)"
            description="Mon rôle se concentre sur la prévision de la demande et la distribution. Nous gérons les ventes directes aux clients et optimisons les flux pour cette centrale d'achat, assurant la disponibilité des matériaux de plomberie, chauffage, etc., pour les entités du groupe et les clients externes."
          />
          
          <CompanyBlock
            logoSrc={lcThermicLogoUrl}
            logoAlt="Logo LC Thermic"
            name="LC Thermic (Entreprise CVC)"
            description="Ici, l'accent est mis sur la réussite de la chaîne logistique pour les chantiers CVC. Cela implique la coordination des approvisionnements spécifiques, la gestion des livraisons sur site et le suivi rigoureux des équipements pour les installations, du remplacement de chaudière aux grands projets de pompes à chaleur."
          />
          
          <p className="mt-4">Bien que ces deux entreprises aient des entrepôts, j’interviens aussi dans les autres entités du groupe, mais uniquement sur la partie commande/livraison, qui fonctionne en flux tendu (avec peu ou pas de stockage).</p>
        </AccordionDetailedBlock>
      </div>

      <AccordionDetailedBlock title="Activités communes" icon={Activity}>
        <p className="mb-4">Mes missions quotidiennes englobent une variété de tâches essentielles à la bonne marche des opérations logistiques :</p>
        <ul className="space-y-3 pl-1">
          <ProjectListItem icon={Package}>
            <strong>Gestion des flux physiques et informationnels :</strong> suivi des mouvements de marchandises et des données associées.
          </ProjectListItem>
          <ProjectListItem icon={Send}>
            <strong>Approvisionnement et traitement des commandes :</strong> de la passation à la préparation.
          </ProjectListItem>
          <ProjectListItem icon={Archive}>
            <strong>Réception des marchandises :</strong> contrôle qualité et quantité, mise en stock.
          </ProjectListItem>
          <ProjectListItem icon={Repeat}>
            <strong>Relances fournisseurs et gestion des retours :</strong> suivi proactif et traitement des non-conformités.
          </ProjectListItem>
          <ProjectListItem icon={Map}>
            <strong>Optimisation des emplacements et des stocks :</strong> rangement logique et maintien des niveaux optimaux.
          </ProjectListItem>
          <ProjectListItem icon={Tag}>
            <strong>Amélioration de l’environnement logistique :</strong> étiquetage, codification, création de zones spécifiques.
          </ProjectListItem>
        </ul>
        <p className="mt-4">Bien que les tâches quotidiennes soient similaires, les projets menés chez LC Thermic et Ecolivery sont très différents et apportent chacun des défis spécifiques.</p>
      </AccordionDetailedBlock>

      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div id="xp-ecolivery" className="bg-white/50 dark:bg-slate-800/20 backdrop-blur-lg rounded-3xl shadow-apple p-8 scroll-mt-28">
            <div className="flex items-center mb-6">
              <ListChecks className="h-8 w-8 mr-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">Projets (Ecolivery)</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              {ecoliveryProjects.map(project => (
                <ProjectListItem key={project.id} icon={project.icon} details={project.details}>
                  {project.title}
                </ProjectListItem>
              ))}
            </ul>
          </div>

          <div id="xp-lc-thermic" className="bg-white/50 dark:bg-slate-800/20 backdrop-blur-lg rounded-3xl shadow-apple p-8 scroll-mt-28">
            <div className="flex items-center mb-6">
              <ListChecks className="h-8 w-8 mr-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">Projets (LC Thermic)</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
               {lcThermicProjects.map(project => (
                <ProjectListItem key={project.id} icon={project.icon} details={project.details}>
                  {project.title}
                </ProjectListItem>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      
      <section id="other-experiences-cards" className="mt-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-gradient-blue-purple flex items-center justify-center">
          <Users className="h-8 w-8 mr-3 text-green-600 dark:text-green-400" /> Autres Expériences Formatrices
        </h2>
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
        >
          {otherExperiences.map((exp, index) => (
            <ExperienceCard key={`other-prof-${index}`} experience={exp} />
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default ProfessionalExperienceSection;