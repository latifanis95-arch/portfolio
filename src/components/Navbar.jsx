import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, Briefcase, Wrench, Mail, ChevronsRight, FileText, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


const Navbar = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbarBackground, setShowNavbarBackground] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbarBackground(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);


  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100); 
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: t('home'), path: '/', icon: Home },
    { id: 'about', label: t('about'), path: '/about', icon: User },
    { id: 'experiences', label: t('experiences'), path: '/experiences', icon: Briefcase },
    { id: 'skills', label: t('skills'), path: '/skills', icon: Wrench },
  ];

  const handleNavLinkClick = (e, link) => {
    e.preventDefault();
    if (['/about', '/skills', '/experiences'].includes(link.path)) {
      navigate(link.path);
    } else {
      scrollToSection(link.id);
    }
    setIsMobileMenuOpen(false);
  };
  
  const isHeroInView = !showNavbarBackground && ['/', '/experiences'].includes(location.pathname);

  const getNavTextColor = () => isHeroInView ? 'text-white' : 'text-white';
  const getNavHoverTextColor = () => 'hover:text-gray-300';
  const getNavActiveTextColor = () => isHeroInView ? 'text-white active-hero' : 'text-white active';
  const getLogoTextColor = () => isHeroInView ? 'text-white' : 'text-white';
  const getIconColor = () => isMobileMenuOpen ? 'text-slate-800 dark:text-slate-200' : 'text-white hover:text-gray-300';
      
  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'tween', ease: 'circOut', duration: 0.5 } },
    exit: { x: '100%', transition: { type: 'tween', ease: 'circIn', duration: 0.4 } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.2 + i * 0.08, type: 'spring', stiffness: 100, damping: 15 },
    }),
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showNavbarBackground ? 'bg-black/30 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex-shrink-0">
              <Link to="/" onClick={() => scrollToSection('home')} className={`text-xl md:text-2xl font-bold ${getLogoTextColor()}`}>
                Anis LATIF
              </Link>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.path === '/' ? `#${link.id}` : link.path}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className={`nav-link text-sm font-medium transition-colors ${
                    (location.pathname === link.path && !['/'].includes(link.path)) || (location.pathname === '/' && activeSection === link.id)
                      ? `${getNavActiveTextColor()} ${getNavHoverTextColor()}`
                      : `${getNavTextColor()} ${getNavHoverTextColor()}`
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="hidden md:block">
                 <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='outline' size="icon" className='text-white border-white hover:bg-white/10'>
                      <Globe size={20} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setLanguage('fr')} disabled={language === 'fr'}>
                      Français
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage('en')} disabled={language === 'en'}>
                      English
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="hidden md:block">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className='border-white text-white hover:bg-white/10'
                  variant='outline'
                >
                  {t('contactMe')}
                </Button>
              </motion.div>

              <div className="md:hidden z-[60]">
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={t('menu')} className={`${getIconColor()}`}>
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div variants={backdropVariants} initial="hidden" animate="visible" exit="exit" className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="exit" className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white dark:bg-slate-950 shadow-2xl z-50 md:hidden flex flex-col p-6">
              <nav className="flex flex-col h-full mt-10">
                <div className="flex flex-col space-y-2 flex-grow">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.id}
                      href={link.path === '/' ? `#${link.id}` : link.path}
                      onClick={(e) => handleNavLinkClick(e, link)}
                      className={`flex items-center justify-between p-4 rounded-lg text-lg font-medium transition-colors ${
                        (location.pathname === link.path && !['/'].includes(link.path)) || (location.pathname === '/' && activeSection === link.id)
                          ? 'bg-primary/10 text-primary'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                      custom={index + 2}
                      variants={linkItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <div className="flex items-center gap-4">
                        <link.icon className="w-5 h-5" />
                        <span>{link.label}</span>
                      </div>
                      <ChevronsRight className="w-5 h-5 opacity-50" />
                    </motion.a>
                  ))}
                </div>
                
                <motion.div custom={navLinks.length + 3} variants={linkItemVariants} initial="hidden" animate="visible" className="mt-auto space-y-4">
                    <div className="flex gap-2">
                        <Button variant={language === 'fr' ? 'secondary' : 'outline'} className="w-full" onClick={() => setLanguage('fr')}>FR</Button>
                        <Button variant={language === 'en' ? 'secondary' : 'outline'} className="w-full" onClick={() => setLanguage('en')}>EN</Button>
                    </div>
                    <Button onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 h-12">
                      <Mail className="w-5 h-5 mr-2"/> {t('contactMe')}
                    </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;