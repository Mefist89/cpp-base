import React, { useState } from 'react';
import { CheckCircle, XCircle, Award } from 'lucide-react';
import VariantButtons from '../VariantButtons';

interface ExpressionExerciseData {
  [key: string]: {
    type: string;
    value: number | boolean;
  };
}

interface ExpressionExerciseProps {
  variants: ExpressionExerciseData[];
}

const ExpressionExercise: React.FC<ExpressionExerciseProps> = ({ variants }) => {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [expressionAnswers, setExpressionAnswers] = useState<{ [key: number]: { [key: string]: { type?: string, value?: string } } }>({});
  const [showExpressionResults, setShowExpressionResults] = useState<boolean[]>(Array(variants.length).fill(false));

  const exercises = variants[currentVariant];

  const handleExpressionTypeChange = (expr: string, type: string) => {
    setExpressionAnswers(prev => ({
      ...prev,
      [currentVariant]: {
        ...(prev[currentVariant] || {}),
        [expr]: { ...(prev[currentVariant]?.[expr] || {}), type }
      }
    }));
  };

  const handleExpressionValueChange = (expr: string, value: string) => {
    setExpressionAnswers(prev => ({
      ...prev,
      [currentVariant]: {
        ...(prev[currentVariant] || {}),
        [expr]: { ...(prev[currentVariant]?.[expr] || {}), value }
      }
    }));
  };

  const checkExpressionAnswers = () => {
    const newShowResults = [...showExpressionResults];
    newShowResults[currentVariant] = true;
    setShowExpressionResults(newShowResults);
  };

  const resetExpressionExercise = () => {
    const newAnswers = { ...expressionAnswers };
    newAnswers[currentVariant] = {};
    setExpressionAnswers(newAnswers);
    const newShowResults = [...showExpressionResults];
    newShowResults[currentVariant] = false;
    setShowExpressionResults(newShowResults);
  };

  const isExpressionCorrect = (expr: string) => {
    const userAns = expressionAnswers[currentVariant]?.[expr];
    const correctAns = exercises[expr];

    if (!userAns || !userAns.type || !userAns.value) return null;

    const typeCorrect = userAns.type === correctAns.type;
    let valueCorrect = false;

    if (correctAns.type === 'bool') {
      valueCorrect = userAns.value === correctAns.value.toString() || userAns.value === (correctAns.value as any);
    } else if (typeof correctAns.value === 'number') {
      valueCorrect = Math.abs(parseFloat(userAns.value) - correctAns.value) < 0.01;
    }

    return typeCorrect && valueCorrect;
  };

  const getExpressionScore = () => {
    return Object.keys(exercises).filter(expr => isExpressionCorrect(expr)).length;
  };

  const currentAnswers = expressionAnswers[currentVariant] || {};

  return (
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">{currentVariant + 1}</div>
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Determinați tipul și valoarea fiecărei expresii</h2>
            <p className="text-gray-600">Dată fiind declarațiile variabilelor</p>
          </div>
        </div>
        <div className="max-w-6xl w-full">
      <VariantButtons 
        totalVariants={variants.length}
        currentVariant={currentVariant}
        onVariantChange={setCurrentVariant}
        color="blue"
      />
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <code className="text-sm font-mono">
            <strong>int</strong> a = 4, b = 8;<br />
            <strong>float</strong> c = 4.0, d = 2.0;<br />
            <strong>char</strong> q = 'a', z = 'a';
          </code>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 p-3 text-left">Expresie</th>
                <th className="border border-gray-300 p-3 text-left">Tip de date</th>
                <th className="border border-gray-300 p-3 text-left">Valoarea</th>
                <th className="border border-gray-300 p-3 text-center w-16">Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(exercises).map((expr) => {
                const isCorrect = isExpressionCorrect(expr);
                const hasAnswer = currentAnswers[expr]?.type && currentAnswers[expr]?.value;

                return (
                  <tr key={expr} className={`hover:bg-gray-50 ${showExpressionResults[currentVariant] && hasAnswer ?
                      (isCorrect ? 'bg-green-50' : 'bg-red-50') : ''}`}>
                    <td className="border border-gray-300 p-3 font-mono font-semibold text-lg">{expr}</td>
                    <td className="border border-gray-300 p-3">
                      <input type="text" value={currentAnswers[expr]?.type || ''}
                        onChange={(e) => handleExpressionTypeChange(expr, e.target.value.toLowerCase())}
                        disabled={showExpressionResults[currentVariant]} placeholder="int, float, bool..."
                        className="w-full p-2 border-2 rounded focus:outline-none focus:border-blue-500 disabled:bg-gray-100" />
                      {showExpressionResults[currentVariant] && hasAnswer && !isCorrect && (
                        <span className="text-xs text-red-600 mt-1 block">
                          Corect: <strong>{exercises[expr].type}</strong>
                        </span>
                      )}
                    </td>
                    <td className="border border-gray-300 p-3">
                      <input type="text" value={currentAnswers[expr]?.value || ''}
                        onChange={(e) => handleExpressionValueChange(expr, e.target.value)}
                        disabled={showExpressionResults[currentVariant]} placeholder="Valoarea..."
                        className="w-full p-2 border-2 rounded focus:outline-none focus:border-blue-500 disabled:bg-gray-100" />
                      {showExpressionResults[currentVariant] && hasAnswer && !isCorrect && (
                        <span className="text-xs text-red-600 mt-1 block">
                          Corect: <strong>{exercises[expr].value.toString()}</strong>
                        </span>
                      )}
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      {showExpressionResults[currentVariant] && hasAnswer && (isCorrect ?
                        <CheckCircle className="w-7 h-7 text-green-500 mx-auto" /> :
                        <XCircle className="w-7 h-7 text-red-500 mx-auto" />)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {showExpressionResults[currentVariant] && (
          <div className="ml-auto flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-lg">
            <Award className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-900">Scor: {getExpressionScore()} / {Object.keys(exercises).length}</span>
          </div>
        )}
      </div>
      <div className="flex gap-4 items-center mt-6">
        <button onClick={checkExpressionAnswers} disabled={Object.keys(currentAnswers).length === 0}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg">
          Verifică Răspunsurile
        </button>
        <button onClick={resetExpressionExercise} className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition shadow-lg">
          Resetează
        </button>
      </div>
    </div>
  );
};

export default ExpressionExercise;