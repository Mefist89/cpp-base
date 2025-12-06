import React, { useState } from 'react';
import { CheckCircle, XCircle, Award } from 'lucide-react';
import VariantButtons from '../VariantButtons';

interface TypeExerciseData {
  id: string;
  value: string;
  correctType: string;
}

interface TypeExerciseVariant {
  exercises: TypeExerciseData[];
}

interface TypeExerciseProps {
  variants: TypeExerciseVariant[];
}

const TypeExercise: React.FC<TypeExerciseProps> = ({ variants }) => {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [typeAnswers, setTypeAnswers] = useState<{ [key: string]: { [key: string]: string } }>({});
  const [showTypeResults, setShowTypeResults] = useState<boolean[]>(Array(variants.length).fill(false));

  const exercises = variants[currentVariant].exercises;

  const handleTypeSelect = (exerciseId: string, type: string) => {
    setTypeAnswers(prev => ({
      ...prev,
      [currentVariant]: {
        ...(prev[currentVariant] || {}),
        [exerciseId]: type
      }
    }));
  };

  const checkTypeAnswers = () => {
    const newShowResults = [...showTypeResults];
    newShowResults[currentVariant] = true;
    setShowTypeResults(newShowResults);
  };

  const resetTypeExercise = () => {
    const newAnswers = { ...typeAnswers };
    newAnswers[currentVariant] = {};
    setTypeAnswers(newAnswers);
    const newShowResults = [...showTypeResults];
    newShowResults[currentVariant] = false;
    setShowTypeResults(newShowResults);
  };

  const isTypeCorrect = (exerciseId: string) => {
    const exercise = exercises.find(ex => ex.id === exerciseId);
    const variantAnswers = typeAnswers[currentVariant] || {};
    return variantAnswers[exerciseId] === exercise?.correctType;
  };

  const getTypeScore = () => exercises.filter(ex => isTypeCorrect(ex.id)).length;

  const currentAnswers = typeAnswers[currentVariant] || {};

  return (
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">{currentVariant + 1}</div>
          <div>
            <h2 className="text-3xl font-bold text-purple-900">Precizați tipul de date a următoarelor variabile</h2>
            <p className="text-gray-600">Introduceți tipul corect de date pentru fiecare valoare (int, float, char, bool)</p>
          </div>
        </div>
      <div className="max-w-4xl w-full">
      <VariantButtons 
        totalVariants={variants.length}
        currentVariant={currentVariant}
        onVariantChange={setCurrentVariant}
        color="purple"
      />
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {exercises.map((exercise) => (
            <div key={exercise.id} className={`border-2 rounded-lg p-3 md:p-5 transition-all ${
              showTypeResults[currentVariant] ? (isTypeCorrect(exercise.id) ? 'border-green-400 bg-green-50' :
              (currentAnswers[exercise.id] ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-gray-50')) :
              'border-gray-300 hover:border-purple-300 bg-white'}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <div className="flex-shrink-0 w-20 md:w-24">
                  <span className="text-lg md:text-xl font-bold text-purple-900">{exercise.id})</span>
                  <span className="ml-2 text-lg md:text-xl font-mono font-semibold">{exercise.value}</span>
                </div>
                <div className="flex-1 w-full">
                  <input type="text" value={currentAnswers[exercise.id] || ''}
                    onChange={(e) => handleTypeSelect(exercise.id, e.target.value.toLowerCase())}
                    disabled={showTypeResults[currentVariant]} placeholder="int, float, char sau bool"
                    className="w-full px-2 md:px-4 py-2 md:py-3 text-xs md:text-lg border-2 border-gray-300 rounded-lg font-semibold focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 disabled:bg-gray-100 disabled:cursor-not-allowed" />
                </div>
                <div className="flex-shrink-0 w-8 md:w-12 flex justify-center">
                  {showTypeResults[currentVariant] && currentAnswers[exercise.id] && (isTypeCorrect(exercise.id) ?
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-500" /> : <XCircle className="w-6 h-6 md:w-8 md:h-8 text-red-500" />)}
                </div>
              </div>
              {showTypeResults[currentVariant] && !isTypeCorrect(exercise.id) && currentAnswers[exercise.id] && (
                <div className="mt-2 md:mt-3 pl-0 md:pl-28 text-xs md:text-sm">
                  <span className="text-red-600 font-semibold">Răspuns corect: </span>
                  <span className="ml-2 px-2 md:px-3 py-1 bg-green-100 text-green-800 rounded font-semibold">{exercise.correctType}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        {showTypeResults[currentVariant] && (
          <div className="ml-auto flex items-center gap-2 md:gap-3 bg-purple-100 px-3 md:px-6 py-2 md:py-3 rounded-lg">
            <Award className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
            <span className="text-sm md:text-xl font-bold text-purple-900">Scor: {getTypeScore()} / {exercises.length}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center mt-4 md:mt-6">
        <button onClick={checkTypeAnswers} disabled={Object.keys(currentAnswers).length === 0}
          className="w-full md:w-auto bg-purple-600 text-white px-4 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-purple-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg">
          Verifică Răspunsurile
        </button>
        <button onClick={resetTypeExercise} className="w-full md:w-auto bg-gray-500 text-white px-4 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-600 transition shadow-lg">
          Resetează
        </button>
      </div>
    </div>
  );
};

export default TypeExercise;