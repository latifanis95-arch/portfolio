
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompanyCard = ({ company }) => {
  const { image, title, badge, description, primaryAction, secondaryAction } = company;
  const navigate = useNavigate();

  const handlePrimaryAction = () => {
    if (primaryAction.href) {
      navigate(primaryAction.href);
    }
  };

  return (
    <motion.div
      tabIndex="0"
      className="group animated-card-container focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
      whileHover={{ y: -4, shadow: '0 20px 50px rgba(0,0,0,0.1)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="animated-card-content p-8 flex flex-col h-full">
        <div className="relative overflow-hidden rounded-2xl mb-6">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
          <span className="text-xs font-medium bg-slate-700 text-slate-300 px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0">{badge}</span>
        </div>
        
        <p className="text-base text-muted-foreground mb-8 flex-grow">{description}</p>
        
        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={handlePrimaryAction}
            className="w-full sm:w-auto flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group"
          >
            {primaryAction.label}
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto flex-1 bg-slate-800/30 border-slate-600 text-foreground hover:bg-slate-800/60">
            <a href={secondaryAction.href} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" />
              {secondaryAction.label}
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyCard;
