import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: t('contact.toast.success.title'),
        description: t('contact.toast.success.description'),
        variant: 'default'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: t('contact.toast.error.title'),
        description: t('contact.toast.error.description'),
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail size={20} className="text-blue-400" />, text: 'latifanis.pro@gmail.com', href: 'mailto:latifanis.pro@gmail.com' },
    { icon: <Phone size={20} className="text-blue-400" />, text: '07 68 09 77 68', href: 'tel:0768097768' },
    { icon: <MapPin size={20} className="text-blue-400" />, text: 'Ermont, France', href: '#' }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-transparent section-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-blue-purple">
            {t('contact.title')}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-lg text-slate-300 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8 p-6 md:p-8 bg-slate-900/30 border border-white/10 rounded-2xl shadow-xl">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">{t('contact.infoTitle')}</h3>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {item.icon}
                    <a href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6 p-6 md:p-8 bg-slate-900/30 border border-white/10 rounded-2xl shadow-xl">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-300">{t('contact.form.name.label')}</Label>
              <Input type="text" id="name" value={formData.name} onChange={handleChange} required className="mt-1 bg-slate-700/40 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-white placeholder:text-gray-400" />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-300">{t('contact.form.email.label')}</Label>
              <Input type="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 bg-slate-700/40 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-white placeholder:text-gray-400" />
            </div>
            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-300">{t('contact.form.message.label')}</Label>
              <Textarea id="message" rows={5} value={formData.message} onChange={handleChange} required className="mt-1 bg-slate-700/40 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-white placeholder:text-gray-400" />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-base">
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('contact.form.sending')}
                </span>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  {t('contact.form.submit')}
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;