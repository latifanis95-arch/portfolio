
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const ProjectGridCard = ({ project, onOpenModal }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.5, type: 'spring' }}
      onClick={onOpenModal}
      className="group animated-card-container cursor-pointer transition-all duration-300 hover:-translate-y-1"
    >
      <div className="animated-card-content p-6 flex flex-col h-full">
        <div className="relative w-full h-56 mb-6 rounded-2xl overflow-hidden">
          <motion.img
            alt={`Illustration pour ${project.title}`}
            className="w-full h-full object-cover"
            src={`${project.image}${project.image.includes('unsplash') ? '' : '?w=800&h=450&fit=crop'}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          {project.isFeatured && (
            <div className="absolute top-3 right-3 flex items-center bg-yellow-400/90 backdrop-blur-sm text-yellow-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              <Award size={14} className="mr-1.5" />
              Projet Phare
            </div>
          )}
        </div>

        <div className="flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
          <p className="text-base text-muted-foreground mb-4 flex-grow line-clamp-2">{project.summary}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-sm font-medium px-3 py-1.5 bg-slate-700 text-slate-300 rounded-full whitespace-nowrap">
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-sm font-medium px-3 py-1.5 bg-slate-700 text-slate-300 rounded-full whitespace-nowrap">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectGridCard;
