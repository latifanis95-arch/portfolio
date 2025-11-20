import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, Briefcase, Wrench, Mail, ChevronsRight, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbarBackground, setShowNavbarBackground] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isHomePage = location.pathname === '/';
      const isExperiencesPage = location.pathname === '/experiences';
      
      if (isHomePage || isExperiencesPage) {
        let heroElementId;
        if (isHomePage) heroElementId = 'home';
        if (isExperiencesPage) heroElementId = 'experience-hero';
        
        const heroElement = document.getElementById(heroElementId);
        
        if (heroElement) {
          const heroBottom = heroElement.getBoundingClientRect().bottom;
          const navbarHeight = 80; 

          setShowNavbarBackground(heroBottom <= navbarHeight);
        } else {
          setShowNavbarBackground(window.scrollY > 10);
        }
      } else if (location.pathname === '/about') {
          // For about page, the hero is part of the normal flow, not fullscreen
          // So the background should appear on any scroll.
          setShowNavbarBackground(window.scrollY > 10);
      } else {
        setShowNavbarBackground(true);
      }
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
    { id: 'home', label: 'Accueil', path: '/', icon: Home },
    { id: 'about', label: 'À Propos', path: '/about', icon: User },
    { id: 'experiences', label: 'Expériences', path: '/experiences', icon: Briefcase },
    { id: 'skills', label: 'Compétences', path: '/skills', icon: Wrench },
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
  
  const getBaseTextColor = () => 'text-slate-800 dark:text-slate-200';
  const getBaseHoverTextColor = () => 'hover:text-primary dark:hover:text-primary';

  const isHeroVisible = !showNavbarBackground && ['/', '/experiences'].includes(location.pathname);

  const getTextColor = () => {
    if (isHeroVisible) {
      return 'text-white';
    }
    return `${getBaseTextColor()} ${getBaseHoverTextColor()}`;
  };
  
  const getActiveTextColor = () => {
    if (isHeroVisible) {
      return 'text-white active-hero';
    }
    return 'text-primary dark:text-primary active';
  }

  const getLogoTextColor = () => {
    if (isHeroVisible) {
      return 'text-white';
    }
    return 'text-gradient-blue-purple';
  }
    
  const getIconColor = () => {
    if (isMobileMenuOpen) return 'text-slate-800 dark:text-slate-200';
    if (isHeroVisible) {
      return 'text-white hover:text-gray-200';
    }
    return `${getBaseTextColor()} ${getBaseHoverTextColor()}`;
  }
  
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
      transition: {
        delay: 0.2 + i * 0.08,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showNavbarBackground
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link to="/" onClick={() => scrollToSection('home')} className={`text-xl md:text-2xl font-bold ${getLogoTextColor()}`}>
                Anis LATIF - Portfolio
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
                      ? getActiveTextColor()
                      : getTextColor()
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
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block"
              >
                <Button
                  onClick={() => scrollToSection('contact')}
                  className={`${ isHeroVisible ? 'border-white text-white hover:bg-white/10' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'}`}
                  variant={`${ isHeroVisible ? 'outline' : 'default'}`}
                >
                  Contactez-moi
                </Button>
              </motion.div>

              <div className="md:hidden z-[60]">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Menu"
                  className={`${getIconColor()}`}
                >
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
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white dark:bg-slate-950 shadow-2xl z-50 md:hidden flex flex-col p-6"
            >
              <nav className="flex flex-col h-full mt-10">
                <div className="grid grid-cols-2 gap-4 mb-8">
                   <motion.div custom={0} variants={linkItemVariants} initial="hidden" animate="visible">
                    <Button variant="outline" className="w-full h-24 flex-col justify-center items-center gap-2 border-primary/20 bg-primary/5 hover:bg-primary/10">
                      <User className="w-6 h-6 text-primary"/>
                      <span className="font-semibold text-primary text-sm">Mon Profil</span>
                    </Button>
                  </motion.div>
                   <motion.div custom={1} variants={linkItemVariants} initial="hidden" animate="visible">
                    <Button onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }} className="w-full h-24 flex-col justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90">
                      <Mail className="w-6 h-6"/>
                      <span className="font-semibold text-sm">Contactez-moi</span>
                    </Button>
                  </motion.div>
                </div>
                
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
                
                <motion.div 
                    custom={navLinks.length + 3} 
                    variants={linkItemVariants} 
                    initial="hidden" 
                    animate="visible"
                    className="mt-auto"
                >
                    <Button variant="outline" className="w-full justify-start items-center gap-3 p-4 h-auto">
                        <FileText className="w-5 h-5 text-slate-500"/>
                        <div className="text-left">
                            <p className="font-semibold text-slate-800 dark:text-slate-200">Mon CV</p>
                            <p className="text-sm text-slate-500">Télécharger en PDF</p>
                        </div>
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