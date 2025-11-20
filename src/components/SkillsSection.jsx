import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Network, DatabaseZap, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillCard = ({ icon, title, learnings, delay }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-slate-800/40 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border border-white/10"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{t(title)}</h3>
      </div>
      <ul className="space-y-2 text-sm text-gray-300 flex-grow">
        {learnings.map((learningKey, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle size={16} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
            <span>{t(learningKey)}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const SkillsSection = () => {
  const { t } = useLanguage();

  const coreSkills = [
    { 
      icon: <Users size={24} />, 
      title: 'homeSkills.manage.title', 
      learnings: [
        'homeSkills.manage.learning1',
        'homeSkills.manage.learning2',
        'homeSkills.manage.learning3',
      ],
      delay: 0.1 
    },
    { 
      icon: <Network size={24} />, 
      title: 'homeSkills.organize.title', 
      learnings: [
        'homeSkills.organize.learning1',
        'homeSkills.organize.learning2',
        'homeSkills.organize.learning3',
      ],
      delay: 0.2 
    },
    { 
      icon: <DatabaseZap size={24} />, 
      title: 'homeSkills.digital.title', 
      learnings: [
        'homeSkills.digital.learning1',
        'homeSkills.digital.learning2',
        'homeSkills.digital.learning3',
      ],
      delay: 0.3 
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-transparent section-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-blue-purple">
            {t('homeSkills.title')}
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-12">
            {t('homeSkills.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-16">
          {coreSkills.map((skill, index) => (
            <SkillCard 
              key={index} 
              icon={skill.icon} 
              title={skill.title} 
              learnings={skill.learnings}
              delay={skill.delay} 
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group text-base px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Link to="/skills">
              {t('homeSkills.cta')}
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;