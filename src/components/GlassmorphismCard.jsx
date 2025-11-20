import React from 'react';
import { Barcode, Truck, Package, BarChart } from 'lucide-react';

const ThematicAnimation = ({ type }) => {
  if (!type) return null;

  const animations = {
    barcode: (
      <div className="thematic-animation barcode-animation">
        <Barcode className="w-16 h-16 text-blue-500/30" />
        <div className="scanner-light"></div>
      </div>
    ),
    truck: (
      <div className="thematic-animation truck-animation">
        <Truck className="w-20 h-20 text-purple-500/30" />
      </div>
    ),
    conveyor: (
      <div className="thematic-animation conveyor-animation">
        <div className="conveyor-belt">
          <Package className="package" />
          <Package className="package" />
          <Package className="package" />
          <Package className="package" />
        </div>
      </div>
    ),
    dashboard: (
      <div className="thematic-animation dashboard-animation">
        <BarChart className="w-20 h-20 text-green-500/20" />
        <div className="data-point" style={{'--i': 1}}></div>
        <div className="data-point" style={{'--i': 2}}></div>
        <div className="data-point" style={{'--i': 3}}></div>
        <div className="data-point" style={{'--i': 4}}></div>
      </div>
    ),
  };

  return animations[type] || null;
};


const GlassmorphismCard = ({ children, animationType }) => {
  return (
    <div className="glass-card-container">
      <div className="glass-card-border">
        <div className="border-segment segment-1"></div>
        <div className="border-segment segment-2"></div>
      </div>
      <div className="glass-card-content">
        <ThematicAnimation type={animationType} />
        {children}
      </div>
    </div>
  );
};

export default GlassmorphismCard;