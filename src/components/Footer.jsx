import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/AnisLatif', label: 'Github', target: '_blank' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/anis-latif-142a85266/', label: 'LinkedIn', target: '_blank' },
    { icon: <Mail size={18} />, href: "mailto:latifanis.pro@gmail.com", label: 'Email', target: '_self' }
  ];

  const footerLinks = [
    { name: t('home'), href: '/', type: 'route' },
    { name: t('about'), href: '/about', type: 'route' },
    { name: t('skills'), href: '/skills', type: 'route' },
    { name: t('experiences'), href: '/experiences', type: 'route' },
    { name: t('contact.title'), href: '#contact', type: 'anchor' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-gray-800">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{t('footer.title')}</h3>
              <p className="text-gray-400 mb-4 max-w-xs">
                {t('footer.subtitle')}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    target={link.target}
                    rel={link.target === '_blank' ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    {link.type === 'route' ? (
                      <RouterLink
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </RouterLink>
                    ) : (
                       <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            const targetId = link.href.substring(1);
                            const targetElement = document.getElementById(targetId);
                            if (targetElement) {
                              window.scrollTo({
                                top: targetElement.offsetTop - 80, 
                                behavior: 'smooth'
                              });
                            }
                          }
                        }}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;