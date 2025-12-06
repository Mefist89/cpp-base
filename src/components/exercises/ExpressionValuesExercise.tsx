import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Award, Info } from 'lucide-react';
import VariantButtons from '../VariantButtons';

interface Exercise {
  id: number;
  instruction: string;
  correctValue: string;
  explanation: string;
}

interface ExpressionValuesExerciseProps {
  variants: Exercise[][];
}

const ExpressionValuesExercise: React.FC<ExpressionValuesExerciseProps> = ({ variants }) => {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: Record<number, string> }>({ 0: {} });
  const [showResults, setShowResults] = useState<boolean[]>(Array(variants.length).fill(false));

  useEffect(() => {
    if (!answers[currentVariant]) {
      setAnswers(prev => ({
        ...prev,
        [currentVariant]: {}
      }));
    }
  }, [currentVariant]);

  const handleAnswerChange = (id: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentVariant]: {
        ...prev[currentVariant],
        [id]: value
      }
    }));
  };

  const checkAnswers = () => {
    const newShowResults = [...showResults];
    newShowResults[currentVariant] = true;
    setShowResults(newShowResults);
  };

  const resetExercise = () => {
    const newShowResults = [...showResults];
    newShowResults[currentVariant] = false;
    setShowResults(newShowResults);
    setAnswers(prev => ({
      ...prev,
      [currentVariant]: {}
    }));
  };

  const isCorrect = (id: number) => {
    const exercise = variants[currentVariant].find(ex => ex.id === id);
    if (!exercise) return false;
    const userAnswer = answers[currentVariant]?.[id]?.trim().toLowerCase() || '';
    const correctAnswer = exercise.correctValue.toLowerCase();
    
    return userAnswer === correctAnswer;
  };

  const getScore = () => {
    return variants[currentVariant].filter(ex => isCorrect(ex.id)).length;
  };

  const currentExercises = variants[currentVariant] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-orange-900 mb-6">
            Instructiuni si Expresii - Valori
          </h1>

          <VariantButtons 
            totalVariants={variants.length}
            currentVariant={currentVariant}
            onVariantChange={setCurrentVariant}
            color="purple"
          />

          <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-5 mb-6">
            <h2 className="text-xl font-semibold text-orange-900 mb-3">
              Fie date declaratiile de variabile:
            </h2>
            <code className="text-lg font-mono block bg-white p-4 rounded border space-y-1">
              <div><strong>int</strong> a=9, b=5, i;</div>
              <div><strong>bool</strong> c=true;</div>
              <div><strong>float</strong> d=2.5;</div>
            </code>
          </div>

          <h3 className="text-2xl font-bold text-orange-900 mb-4">
            Determinati valoarea afisata de urmatoarele instructiuni:
          </h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-orange-200">
                  <th className="border-2 border-gray-400 p-4 text-left text-lg font-bold w-1/2">
                    Instructiuni repetitive
                  </th>
                  <th className="border-2 border-gray-400 p-4 text-center text-lg font-bold">
                    Valoare
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentExercises.map((exercise, index) => (
                  <tr key={exercise.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border-2 border-gray-400 p-4">
                      <pre className="text-sm font-mono whitespace-pre-wrap">{exercise.instruction}</pre>
                    </td>
                    <td className={`border-2 border-gray-400 p-4 ${
                      showResults[currentVariant] && answers[currentVariant]?.[exercise.id] ? 
                        (isCorrect(exercise.id) ? 'bg-green-100' : 'bg-red-100') : ''
                    }`}>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <input
                            type="text"
                            value={answers[currentVariant]?.[exercise.id] || ''}
                            onChange={(e) => handleAnswerChange(exercise.id, e.target.value)}
                            disabled={showResults[currentVariant]}
                            placeholder="Valoarea..."
                            className="w-full p-3 text-center text-lg font-bold border-2 border-gray-300 rounded focus:outline-none focus:border-orange-500 disabled:bg-gray-100"
                          />
                          {showResults[currentVariant] && answers[currentVariant]?.[exercise.id] && (
                            isCorrect(exercise.id) ? 
                              <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0" /> : 
                              <XCircle className="w-7 h-7 text-red-500 flex-shrink-0" />
                          )}
                        </div>
                        {showResults[currentVariant] && answers[currentVariant]?.[exercise.id] && !isCorrect(exercise.id) && (
                          <div className="text-sm">
                            <div className="text-red-600 font-semibold">
                              Corect: <strong>{exercise.correctValue}</strong>
                            </div>
                            <div className="text-gray-600 mt-1">{exercise.explanation}</div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-4 items-center">
            <button
              onClick={checkAnswers}
              disabled={Object.keys(answers[currentVariant] || {}).length === 0}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg text-lg"
            >
              Verifică Răspunsurile
            </button>
            
            <button
              onClick={resetExercise}
              className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition shadow-lg text-lg"
            >
              Resetează
            </button>

            {showResults[currentVariant] && (
              <div className="ml-auto flex items-center gap-3 bg-orange-100 px-6 py-3 rounded-lg">
                <Award className="w-6 h-6 text-orange-600" />
                <span className="text-xl font-bold text-orange-900">
                  Scor: {getScore()} / {currentExercises.length}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="w-full">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Functii matematice in C++:
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-2">pow(a, b)</h3>
              <p className="text-sm text-gray-700 mb-2">Ridicare la putere: a^b</p>
              <div className="font-mono text-xs space-y-1">
                <div>pow(5, 2) = 25</div>
                <div>pow(2, 3) = 8</div>
                <div>pow(10, 2) = 100</div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h3 className="font-bold text-green-900 mb-2">sqrt(a)</h3>
              <p className="text-sm text-gray-700 mb-2">Radical (radacina patrata)</p>
              <div className="font-mono text-xs space-y-1">
                <div>sqrt(9) = 3</div>
                <div>sqrt(16) = 4</div>
                <div>sqrt(25) = 5</div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h3 className="font-bold text-yellow-900 mb-2">Instructiunea if-else:</h3>
            <div className="space-y-2 text-sm">
              <div className="font-mono bg-white p-2 rounded">
                if (conditie) instructiune1;<br/>
                else instructiune2;
              </div>
              <p className="text-gray-700">
                <strong>Daca conditia este adevarata (true):</strong> se executa instructiune1<br/>
                <strong>Daca conditia este falsa (false):</strong> se executa instructiune2
              </p>
            </div>
          </div>

          <div className="mt-4 bg-purple-50 border border-purple-200 p-4 rounded-lg">
            <h3 className="font-bold text-purple-900 mb-2">Operatori de comparare:</h3>
            <div className="grid grid-cols-2 gap-2 text-sm font-mono">
              <div><strong>==</strong> egal cu</div>
              <div><strong>!=</strong> diferit de</div>
              <div><strong>&gt;</strong> mai mare</div>
              <div><strong>&lt;</strong> mai mic</div>
              <div><strong>&gt;=</strong> mai mare sau egal</div>
              <div><strong>&lt;=</strong> mai mic sau egal</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExpressionValuesExercise;