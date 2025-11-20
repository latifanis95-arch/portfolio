import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HomeAboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="home-about" className="py-20 md:py-28 bg-transparent section-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 lg:w-5/12"
          >
            <div className="relative aspect-square max-w-md mx-auto md:max-w-none group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 dark:opacity-20 blur-3xl group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-x-4 inset-y-8 rounded-full bg-gradient-to-tl from-purple-500 to-blue-600 opacity-10 dark:opacity-20 blur-3xl group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500 animate-pulse animation-delay-2000"></div>
              <img  
                alt={t('homeAbout.imageAlt')}
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-4 border-slate-800/50 group-hover:scale-105 transition-transform duration-500"
               src="https://storage.googleapis.com/hostinger-horizons-assets-prod/c8f15e6d-9ba2-451a-bf17-90feb63694f8/490836b6cce3da58ced260bdeb70f58a.jpg" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 lg:w-7/12 text-center md:text-left"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-900/70 text-blue-200 rounded-full mb-4">
              {t('homeAbout.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-blue-purple">
              {t('homeAbout.title')}
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {t('homeAbout.text')}
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group text-base px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link to="/about">
                {t('homeAbout.cta')}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;