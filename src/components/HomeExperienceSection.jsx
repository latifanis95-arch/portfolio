import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Briefcase, Zap, ArrowRight, Barcode } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HomeExperienceSection = () => {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const ksHoldingLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/c8f15e6d-9ba2-451a-bf17-90feb63694f8/fa65ff6e19421b63068e278664143c33.png";

  return (
    <section id="home-experience" className="py-20 md:py-28 bg-transparent section-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gradient-blue-purple"
          >
            {t('homeExp.title')}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-300 text-center mb-12 md:mb-16 max-w-3xl mx-auto"
          >
            {t('homeExp.subtitle')}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
              variants={itemVariants}
              className="bg-slate-900/30 border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white mr-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">{t('homeExp.projects.title')}</h3>
              </div>
              <p className="text-gray-300 mb-2 text-sm">{t('homeExp.projects.subtitle')}</p>
              <div className="mt-4 p-4 border border-white/10 rounded-lg bg-black/20 flex-grow">
                <div className="flex items-center mb-2">
                  <Barcode size={20} className="text-blue-400 mr-2" />
                  <h4 className="font-semibold text-lg text-white">{t('homeExp.barcodeProject.title')}</h4>
                </div>
                <p className="text-gray-300 text-sm mb-4">{t('homeExp.barcodeProject.intro')}</p>
              </div>
              <Button asChild className="mt-6 w-full md:w-auto self-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                <Link to="/experiences#academic-projects">
                  {t('homeExp.viewProjectsBtn')}
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-slate-900/30 border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-green-500 to-teal-600 text-white mr-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">{t('homeExp.professional.title')}</h3>
              </div>
              <p className="text-gray-300 mb-2 text-sm">{t('homeExp.professional.subtitle')}</p>
              <div className="mt-4 p-4 border border-white/10 rounded-lg bg-black/20 flex-grow">
                <div className="flex items-start mb-2">
                  <img src={ksHoldingLogoUrl} alt="Logo KS Holding" className="h-8 mr-3 mt-0.5 object-contain flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-white">{t('homeExp.ksHolding.title')}</h4>
                    <p className="text-sm text-gray-300">KS Holding</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{t('homeExp.ksHolding.intro')}</p>
              </div>
              <Button asChild className="mt-6 w-full md:w-auto self-start bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white group">
                <Link to="/experiences#detailed-supply-chain-experiences">
                  {t('homeExp.viewProfessionalBtn')}
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeExperienceSection;