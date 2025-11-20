import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, BookOpen, TrendingUp, Award, Users, Brain, Lightbulb, Target, Globe, Bot, Building, MessageSquare, CheckCircle, Phone, Mail, Home, MapPin as MapPinIcon, CalendarDays, Car } from 'lucide-react';
import AboutHero from '@/components/AboutHero';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const personalInfo = [
    { icon: <Phone size={18} className="text-blue-500" />, text: "07 68 09 77 68" },
    { icon: <Mail size={18} className="text-blue-500" />, text: "latifanis.pro@gmail.com", href: "mailto:latifanis.pro@gmail.com" },
    { icon: <Home size={18} className="text-blue-500" />, text: "Ermont (95120)" },
    { icon: <MapPinIcon size={18} className="text-blue-500" />, text: t('aboutPage.personalInfo.mobility') },
    { icon: <CalendarDays size={18} className="text-blue-500" />, text: t('aboutPage.personalInfo.age') },
    { icon: <Car size={18} className="text-blue-500" />, text: t('aboutPage.personalInfo.vehicle') }
  ];

  const education = [
    { title: t('aboutPage.education.bac.title'), details: t('aboutPage.education.bac.details'), dates: "2019 - 2022", location: "Lycée Van Gogh, Ermont", icon: <BookOpen className="text-blue-500" /> },
    { title: t('aboutPage.education.but.title'), details: t('aboutPage.education.but.details'), dates: "2022 - 2025", location: "IUT Paris 8, Vincennes", icon: <BookOpen className="text-blue-500" /> },
    { title: t('aboutPage.education.master.title'), details: "", dates: "2025 - 2027", location: "INSEEC", icon: <TrendingUp className="text-green-500" /> }
  ];

  const experienceSC = [
    { title: t('aboutPage.experience.stage.title'), dates: t('aboutPage.experience.stage.dates'), location: "KS Holding, Frépillon", icon: <Briefcase className="text-purple-500" /> },
    { title: t('aboutPage.experience.alternanceKS.title'), dates: t('aboutPage.experience.alternanceKS.dates'), location: "KS Holding, Frépillon", icon: <Briefcase className="text-purple-500" /> },
    { title: t('aboutPage.experience.alternanceLidl.title'), dates: t('aboutPage.experience.alternanceLidl.dates'), location: "Lidl France, Châtenay-Malabry", icon: <Briefcase className="text-purple-500" /> }
  ];

  const softSkills = [
    { title: t('aboutPage.softSkills.org.title'), skills: t('aboutPage.softSkills.org.skills').split('|'), icon: <Users className="text-yellow-500" /> },
    { title: t('aboutPage.softSkills.analysis.title'), skills: t('aboutPage.softSkills.analysis.skills').split('|'), icon: <Brain className="text-red-500" /> },
    { title: t('aboutPage.softSkills.comm.title'), skills: t('aboutPage.softSkills.comm.skills').split('|'), icon: <Lightbulb className="text-indigo-500" /> }
  ];
  
  const certifications = [
    { 
      title: t('aboutPage.certifications.iata.title'), 
      date: t('aboutPage.certifications.iata.date'), 
      location: "IUT de Paris (Paris 8)", 
      descriptions: t('aboutPage.certifications.iata.descriptions').split('|'), 
      icon: <Award className="text-amber-500" /> 
    },
    { 
      title: t('aboutPage.certifications.toeic.title'), 
      date: t('aboutPage.certifications.toeic.date'), 
      location: "Niveau B2 CECRL", 
      descriptions: t('aboutPage.certifications.toeic.descriptions').split('|'), 
      icon: <CheckCircle className="text-green-500" /> 
    }
  ];

  const languages = [
    { lang: t('aboutPage.languages.english'), icon: <Target className="text-sky-500" /> },
    { lang: t('aboutPage.languages.spanish'), icon: <Target className="text-rose-500" /> }
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <AboutHero />
      <div className="bg-background dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          <section id="professional-profile" className="mb-16 scroll-mt-20">
            <motion.header 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue-purple">{t('aboutPage.professionalProfile.title')}</h2>
              <p className="text-lg text-muted-foreground">{t('aboutPage.professionalProfile.subtitle')}</p>
            </motion.header>

            <motion.div 
              variants={cardVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="mb-16 p-6 md:p-8 bg-card dark:bg-slate-800/50 rounded-xl shadow-xl"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gradient-blue-purple">{t('aboutPage.vision.title')}</h3>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="p-6">
                  <p className="text-md text-muted-foreground leading-relaxed text-center">{t('aboutPage.vision.philosophy')}</p>
                </div>
                <div className="p-6 border-t md:border-t-0 md:border-l border-border dark:border-gray-700">
                  <p className="text-md text-muted-foreground leading-relaxed mb-6">{t('aboutPage.vision.goal')}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="p-6 bg-card dark:bg-slate-800/50 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-semibold mb-6 text-center text-gradient-blue-purple">{t('aboutPage.education.title')}</h3>
                  <ul className="space-y-6">
                    {education.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">{item.icon}</div>
                        <div>
                          <h4 className="font-semibold text-primary-foreground dark:text-primary">{item.title}</h4>
                          {item.details && <p className="text-sm text-muted-foreground font-medium">{item.details}</p>}
                          <p className="text-sm text-muted-foreground">{item.dates}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.location}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-card dark:bg-slate-800/50 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-semibold mb-6 text-center text-gradient-blue-purple">{t('aboutPage.experience.title')}</h3>
                  <ul className="space-y-6">
                    {experienceSC.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">{item.icon}</div>
                        <div>
                          <h4 className="font-semibold text-primary-foreground dark:text-primary">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.dates}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.location}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 md:p-8 bg-card dark:bg-slate-800/50 rounded-xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gradient-blue-purple">{t('aboutPage.softSkills.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {softSkills.map((category, index) => (
                  <div key={index} className="p-4 border border-border dark:border-gray-700 rounded-lg bg-background dark:bg-slate-800">
                    <div className="flex items-center mb-3">
                      {category.icon}
                      <h4 className="ml-3 text-xl font-semibold text-primary-foreground dark:text-primary">{category.title}</h4>
                    </div>
                    <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                      {category.skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

          </section>

          <section id="personal-life" className="scroll-mt-20">
            <motion.header 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue-purple">{t('aboutPage.personalLife.title')}</h2>
               <p className="text-lg text-muted-foreground">{t('aboutPage.personalLife.subtitle')}</p>
            </motion.header>
            
            <motion.div 
              variants={cardVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="mb-16 p-6 md:p-8 bg-card dark:bg-slate-800/50 rounded-xl shadow-xl"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gradient-blue-purple">{t('aboutPage.personalInfo.title')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    {info.icon}
                    {info.href ? (
                      <a href={info.href} className="ml-3 text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {info.text}
                      </a>
                    ) : (
                      <span className="ml-3 text-sm text-muted-foreground">{info.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 p-6 md:p-8 bg-card dark:bg-slate-800/50 rounded-xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gradient-blue-purple">{t('aboutPage.certifications.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  {certifications.map((cert, index) => (
                    <div key={index} className="mb-6 p-4 border border-border dark:border-gray-700 rounded-lg bg-background dark:bg-slate-800">
                      <div className="flex items-center mb-3">
                        {cert.icon}
                        <h4 className="ml-3 text-xl font-semibold text-primary-foreground dark:text-primary">{cert.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground italic">{cert.date} - {cert.location}</p>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                        {cert.descriptions.map((desc, idx) => <li key={idx}>{desc}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
                <div>
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 mb-4 bg-background dark:bg-slate-800 border border-border dark:border-gray-700 rounded-lg">
                      {lang.icon}
                      <span className="text-sm text-muted-foreground">{lang.lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 md:p-8 bg-card dark:bg-slate-800/50 rounded-xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gradient-blue-purple">{t('aboutPage.testimonial.title')}</h3>
              <div className="p-4 border border-border dark:border-gray-700 rounded-lg bg-background dark:bg-slate-800 max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <blockquote className="italic text-muted-foreground">{t('aboutPage.testimonial.quote')}</blockquote>
                    <p className="text-sm text-primary-foreground dark:text-primary mt-1 font-semibold">{t('aboutPage.testimonial.author')}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t('aboutPage.testimonial.context')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

        </div>
      </div>
    </motion.div>
  );
};

export default About;