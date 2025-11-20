import React from 'react';
import { CheckSquare } from 'lucide-react';

const NotionManagementSection = () => {
  return (
    <section id="notion-management" className="mt-20 p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-indigo-900 rounded-xl shadow-xl">
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
  );
};

export default NotionManagementSection;