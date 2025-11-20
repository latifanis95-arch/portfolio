import React, { useEffect, useRef } from 'react';

const AnimatedGradientBackground = () => {
  return (
    <div className="fixed left-0 top-0 -z-10 h-full w-full overflow-hidden bg-[#050816]">
      <div className="gradient-bg">
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGradientBackground;