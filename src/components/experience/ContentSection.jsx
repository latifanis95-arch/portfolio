import React from 'react';
import { motion } from 'framer-motion';

const ContentSection = ({ children, sectionId, className = "" }) => (
  <motion.div
    key={sectionId}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className={`overflow-hidden ${className}`}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      {children}
    </div>
  </motion.div>
);

export default ContentSection;