import React from 'react';

interface VariantButtonsProps {
  totalVariants: number;
  currentVariant: number;
  onVariantChange: (variant: number) => void;
  color?: 'purple' | 'blue' | 'indigo';
}

const VariantButtons: React.FC<VariantButtonsProps> = ({ 
  totalVariants, 
  currentVariant, 
  onVariantChange,
  color = 'purple'
}) => {
  const colorMap = {
    purple: {
      active: 'bg-purple-600 text-white',
      inactive: 'bg-gray-300 text-gray-700'
    },
    blue: {
      active: 'bg-blue-600 text-white',
      inactive: 'bg-gray-300 text-gray-700'
    },
    indigo: {
      active: 'bg-indigo-600 text-white',
      inactive: 'bg-gray-300 text-gray-700'
    }
  };

  const colors = colorMap[color];

  return (
    <div className="flex gap-2 md:gap-3 mb-6 md:mb-8 justify-center flex-wrap">
      {Array.from({ length: totalVariants }).map((_, index) => (
        <button
          key={index}
          onClick={() => onVariantChange(index)}
          className={`
            w-10 h-10 md:w-12 md:h-12 rounded-full font-bold text-base md:text-lg transition-all 
            flex items-center justify-center shadow-md hover:shadow-lg
            ${
              currentVariant === index
                ? `${colors.active} scale-100 md:scale-110`
                : `${colors.inactive} hover:bg-gray-400`
            }
          `}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default VariantButtons;
