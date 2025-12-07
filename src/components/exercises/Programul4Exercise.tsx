import React, { useState } from 'react';
import { Code, Lightbulb, Play } from 'lucide-react';
import VariantButtons from '../VariantButtons';

interface ProgramulExerciseData {
  title: string;
  inputExplanation: string;
  outputExplanation: string;
  exampleInput: string;
  exampleOutput: string;
}

interface ProgramulExerciseVariant {
  exercises: ProgramulExerciseData[];
}

interface Programul4ExerciseProps {
  variants: ProgramulExerciseVariant[];
}

const Programul4Exercise: React.FC<Programul4ExerciseProps> = ({ variants }) => {
  const [currentVariant, setCurrentVariant] = useState(0);

  const exercises = variants[currentVariant]?.exercises || [];
  const exercise = exercises[0];

  if (!exercise) {
    return <div>No exercises available</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-red-900 mb-4">Program 4 - Exerciții</h2>
        <VariantButtons
          currentVariant={currentVariant}
          onVariantChange={setCurrentVariant}
          totalVariants={variants.length}
          color="red"
        />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 space-y-6">
        {/* Problem Title */}
        <div className="border-b pb-6">
          <div className="flex items-start gap-3">
            <Code size={28} className="text-red-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Problema</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{exercise.title}</p>
            </div>
          </div>
        </div>

        {/* Input Explanation */}
        <div className="border-b pb-6">
          <div className="flex items-start gap-3">
            <Play size={24} className="text-green-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Date de Intrare</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{exercise.inputExplanation}</p>
            </div>
          </div>
        </div>

        {/* Output Explanation */}
        <div className="border-b pb-6">
          <div className="flex items-start gap-3">
            <Play size={24} className="text-orange-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Date de Ieșire</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{exercise.outputExplanation}</p>
            </div>
          </div>
        </div>

        {/* Example */}
        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 md:p-6 border border-red-200">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb size={24} className="text-red-600" />
            <h3 className="font-bold text-gray-800 text-sm md:text-base">Exemplu</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input Example */}
            <div>
              <p className="font-semibold text-gray-700 mb-2 text-sm">Intrare:</p>
              <div className="bg-white border-2 border-red-300 rounded px-3 md:px-4 py-2 md:py-3 font-mono text-sm md:text-base bg-gray-50">
                {exercise.exampleInput}
              </div>
            </div>
            
            {/* Output Example */}
            <div>
              <p className="font-semibold text-gray-700 mb-2 text-sm">Ieșire:</p>
              <div className="bg-white border-2 border-green-300 rounded px-3 md:px-4 py-2 md:py-3 font-mono text-sm md:text-base bg-gray-50">
                {exercise.exampleOutput}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programul4Exercise;
