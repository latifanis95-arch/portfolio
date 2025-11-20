import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Award, Eye, Search, ChevronsRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Chip = ({ tag, onTagClick }) => (
    <button 
      onClick={() => onTagClick(tag)}
      className="text-sm font-medium px-3.5 py-2 rounded-full transition-transform transform hover:scale-105 whitespace-nowrap bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
    >
      {tag}
    </button>
);

const ProjectModal = ({ project, onClose, onExploreSimilar, onTagClick }) => {
  const { toast } = useToast();
  
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleShowMoreDetails = () => {
    toast({
      title: 'Fonctionnalité à venir 🚧',
      description: "Cette section de détails complets est en cours de construction. Revenez bientôt !",
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, scale: 0.95, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 50, scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 400, damping: 30 }}
          className="bg-slate-50 dark:bg-slate-900 rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="p-5 pl-8 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 flex-shrink-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-xl font-semibold text-foreground">
                {project.title}
              </h2>
              {project.isFeatured && (
                <span className="flex items-center bg-yellow-400/90 backdrop-blur-sm text-yellow-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    <Award size={14} className="mr-1.5" />
                    Projet Phare
                </span>
              )}
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Fermer la modale" className="rounded-full text-muted-foreground hover:bg-slate-200 dark:hover:bg-slate-800">
              <X className="h-5 w-5" />
            </Button>
          </header>

          <div className="overflow-y-auto p-8 space-y-8 flex-grow no-scrollbar">
            <div className="w-full h-auto max-h-80 mb-2 rounded-2xl overflow-hidden group bg-black/20">
                <img
                    alt={`Illustration pour ${project.title}`}
                    className="w-full h-full object-cover"
                    src={`${project.image}${project.image.includes('unsplash') ? '' : '?w=800&h=450&fit=crop'}`}
                />
            </div>

            <section>
                <h3 className="text-sm font-semibold text-foreground/80 dark:text-gray-400 mb-3 uppercase tracking-wider">Description du projet</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{project.description}</p>
            </section>
            
            {project.results && (
              <section>
                <h3 className="text-sm font-semibold text-foreground/80 dark:text-gray-400 mb-3 uppercase tracking-wider">Résultats obtenus</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{project.results}</p>
              </section>
            )}
            
            <section>
                <h3 className="text-sm font-semibold text-foreground/80 dark:text-gray-400 mb-4 uppercase tracking-wider">Outils & Méthodes</h3>
                <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                    <Chip key={tag} tag={tag} onTagClick={onTagClick} />
                ))}
                </div>
            </section>
          </div>
          
          <footer className="p-5 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm flex-shrink-0">
             <Button variant="outline" onClick={handleShowMoreDetails}>
                <Eye size={16} className="mr-2" />
                Voir plus de détails
             </Button>
             <Button onClick={() => onExploreSimilar(project)} className="bg-blue-600 hover:bg-blue-700 text-white">
                <Search size={16} className="mr-2" />
                Projets similaires
             </Button>
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;