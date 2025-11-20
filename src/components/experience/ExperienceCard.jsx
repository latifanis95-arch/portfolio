
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceCard = ({ experience }) => {
  const IconComponent = experience.icon || Briefcase;
  const missions = experience.missions || experience.achievements;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      className="animated-card-container"
    >
      <div className="animated-card-content p-8 h-full flex flex-col">
        <div className="flex items-start gap-5 mb-5">
          <IconComponent className="h-10 w-10 text-blue-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1.5">{experience.title}</h3>
            <p className="text-base font-medium text-muted-foreground mb-1">{experience.company}</p>
            <p className="text-sm text-muted-foreground/80">{experience.dates}</p>
          </div>
        </div>
        
        {experience.description && experience.description.trim() !== "" && (
          <p className="text-base text-muted-foreground mb-4 flex-grow">{experience.description}</p>
        )}

        {missions && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Missions / Réalisations</h4>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-1.5">
              {missions.split(';').map((item, idx) => (
                <li key={idx}>{item.trim()}</li>
              ))}
            </ul>
          </div>
        )}
        
        {experience.learnings && (
          <div className="mt-auto">
            <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Apprentissages Clés</h4>
            <p className="text-base text-muted-foreground">{experience.learnings}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
