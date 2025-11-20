import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen } from 'lucide-react';

const ProjectCard = ({ project, index, cardVariants, onOpenModal }) => (
  <motion.div
    key={project.id}
    id={project.id}
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="bg-white/50 dark:bg-slate-800/20 backdrop-blur-lg rounded-3xl shadow-apple p-8 flex flex-col transition-shadow duration-300 hover:shadow-apple-hover"
  >
    <div className="mb-6">
      <img  
        alt={project.imageAltText}
        className="w-full h-64 object-cover rounded-2xl mb-6"
        src={project.imageUrl || `https://source.unsplash.com/random/400x300/?${encodeURIComponent(project.imagePlaceholderText)}`}
       />
      <h3 className="text-2xl font-semibold text-foreground mb-3">{project.title}</h3>
      <p className="text-base text-muted-foreground mb-4">{project.description}</p>
      <p className="text-base text-muted-foreground mb-5 flex-grow">{project.longDescription}</p>
    </div>
    
    <div className="mt-auto">
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-foreground/80 dark:text-gray-400 mb-3 uppercase tracking-wider">Outils & Méthodes</h4>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, idx) => (
            <span key={idx} className="text-sm font-medium px-3 py-1.5 bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 rounded-full">{tool}</span>
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        <Button onClick={onOpenModal} variant="default" size="sm">
            <ExternalLink size={16} className="mr-2" /> Voir Plus
        </Button>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;