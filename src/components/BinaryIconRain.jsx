import React from 'react';
import { Package, Barcode, Truck, Warehouse } from 'lucide-react';

const icons = [
  <Package key="pkg" className="h-6 w-6 text-purple-500/40" />,
  <Barcode key="barcode" className="h-6 w-6 text-purple-500/40" />,
  <Truck key="truck" className="h-6 w-6 text-purple-500/40" />,
  <Warehouse key="wh" className="h-6 w-6 text-purple-500/40" />,
];

const IconColumn = ({ icons, delay }) => (
  <div
    className="flex flex-col animate-fall"
    style={{
      animationDelay: delay,
      animationDuration: `${Math.random() * 10 + 10}s`
    }}
  >
    {icons.map((icon, i) => (
      <span key={i} className="my-4">
        {icon}
      </span>
    ))}
  </div>
);

const BinaryIconRain = () => {
  const columns = Array.from({ length: 20 }, (_, i) => {
    // Shuffle icons for each column
    const shuffledIcons = [...icons].sort(() => Math.random() - 0.5);
    // Double the icons for a longer column
    const columnIcons = [...shuffledIcons, ...shuffledIcons];
    return (
      <IconColumn
        key={i}
        icons={columnIcons}
        delay={`${Math.random() * -20}s`}
      />
    );
  });

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="flex justify-around w-full h-full opacity-30">
        {columns}
      </div>
    </div>
  );
};

export default BinaryIconRain;