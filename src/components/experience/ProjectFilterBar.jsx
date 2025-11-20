import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X, SlidersHorizontal, Building } from 'lucide-react';

const FilterChip = ({ label, onRemove }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className="flex items-center bg-primary/10 text-primary rounded-full pl-3 text-sm font-medium"
  >
    {label}
    <button onClick={onRemove} className="ml-1.5 p-1 rounded-full hover:bg-primary/20">
      <X size={14} />
    </button>
  </motion.div>
);

const FilterButton = ({ label, isSelected, onClick }) => (
    <Button
        variant={isSelected ? 'default' : 'outline'}
        size="sm"
        onClick={onClick}
        className={`rounded-full h-7 px-3 sm:h-8 sm:px-4 transition-all duration-200 shadow-sm whitespace-nowrap ${isSelected ? 'bg-[#6C63FF] text-white shadow-md hover:bg-[#5a52d9]' : 'bg-transparent text-foreground'}`}
    >
        {label}
    </Button>
);

const ProjectFilterBar = ({
  skills,
  companies,
  searchTerm,
  setSearchTerm,
  selectedSkills,
  setSelectedSkills,
  selectedCompanies,
  setSelectedCompanies,
  onReset
}) => {

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleCompanyToggle = (company) => {
    setSelectedCompanies(prev =>
      prev.includes(company) ? prev.filter(c => c !== company) : [...prev, company]
    );
  };
  
  const hasActiveFilters = selectedSkills.length > 0 || selectedCompanies.length > 0 || searchTerm.length > 0;

  return (
    <div className="mb-8 space-y-6">
        <div className="relative w-full max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rechercher un projet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 w-full h-12 rounded-full text-base"
            />
        </div>

        <div className="space-y-4">
            <div className="relative">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 no-scrollbar">
                    <SlidersHorizontal size={16} className="text-muted-foreground flex-shrink-0" />
                    {skills.map(skill => (
                        <FilterButton key={skill} label={skill} isSelected={selectedSkills.includes(skill)} onClick={() => handleSkillToggle(skill)} />
                    ))}
                </div>
                <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden"></div>
            </div>
            <div className="relative">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 no-scrollbar">
                    <Building size={16} className="text-muted-foreground flex-shrink-0" />
                    {companies.map(company => (
                        <FilterButton key={company} label={company} isSelected={selectedCompanies.includes(company)} onClick={() => handleCompanyToggle(company)} />
                    ))}
                </div>
                <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden"></div>
            </div>
        </div>

        {(hasActiveFilters) && (
          <div className="flex flex-wrap items-center gap-2 text-sm container mx-auto px-0 pt-4 border-t border-border">
            <span className="text-muted-foreground font-medium mr-2">Filtres actifs:</span>
            <AnimatePresence>
              {selectedSkills.map(skill => (
                <FilterChip key={skill} label={skill} onRemove={() => handleSkillToggle(skill)} />
              ))}
              {selectedCompanies.map(company => (
                <FilterChip key={company} label={company} onRemove={() => handleCompanyToggle(company)} />
              ))}
            </AnimatePresence>
             {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={onReset} className="text-primary hover:bg-primary/10 h-auto px-2 py-1">
                Réinitialiser
              </Button>
            )}
          </div>
        )}
    </div>
  );
};

export default ProjectFilterBar;