import React, { useState } from 'react';
import TypeExercises from './components/TypeExercises';
import ExpressionExercises from './components/ExpressionExercises';
import TruthTableExercises from './components/TruthTableExercises';
import ReferenceGuide from './components/ReferenceGuide';

const AllExercises = () => {
  const [typeAnswers, setTypeAnswers] = useState({});
  const [showTypeResults, setShowTypeResults] = useState(false);

  const [expressionAnswers, setExpressionAnswers] = useState<{ [key: string]: { type?: string, value?: string } }>({});
  const [showExpressionResults, setShowExpressionResults] = useState(false);

  const [truthTableAnswers, setTruthTableAnswers] = useState(
    Array(8).fill(null).map(() => ({ not_x3: '', x2_OR_notx3: '', x1_AND_x2: '', y: '' }))
  );
  const [showTruthTableResults, setShowTruthTableResults] = useState(false);

  const handleTypeSelect = (exerciseId: string, type: string) => {
    setTypeAnswers(prev => ({ ...prev, [exerciseId]: type }));
  };

  const checkTypeAnswers = () => setShowTypeResults(true);
  const resetTypeExercise = () => { setTypeAnswers({}); setShowTypeResults(false); };

  const handleExpressionTypeChange = (expr: string, type: string) => {
    setExpressionAnswers(prev => ({ ...prev, [expr]: { ...(prev[expr] || {}), type } }));
  };

  const handleExpressionValueChange = (expr: string, value: string) => {
    setExpressionAnswers(prev => ({ ...prev, [expr]: { ...(prev[expr] || {}), value } }));
  };

  const checkExpressionAnswers = () => setShowExpressionResults(true);
  const resetExpressionExercise = () => { setExpressionAnswers({}); setShowExpressionResults(false); };

  const handleTruthTableInput = (rowIndex: number, column: keyof typeof truthTableAnswers[0], value: string) => {
    if (value === '' || value === '0' || value === '1') {
      const newAnswers = [...truthTableAnswers];
      newAnswers[rowIndex][column] = value;
      setTruthTableAnswers(newAnswers);
    }
  };

  const checkTruthTableAnswers = () => setShowTruthTableResults(true);

  const resetTruthTable = () => {
    setTruthTableAnswers(Array(8).fill(null).map(() => ({ not_x3: '', x2_OR_notx3: '', x1_AND_x2: '', y: '' })));
    setShowTruthTableResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <TypeExercises
          typeAnswers={typeAnswers}
          handleTypeSelect={handleTypeSelect}
          showTypeResults={showTypeResults}
        />
        <div className="flex gap-4 items-center">
            <button onClick={checkTypeAnswers} disabled={Object.keys(typeAnswers).length === 0}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg">
              Verifică Răspunsurile
            </button>
            <button onClick={resetTypeExercise} className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition shadow-lg">
              Resetează
            </button>
        </div>

        <ExpressionExercises
          expressionAnswers={expressionAnswers}
          handleExpressionTypeChange={handleExpressionTypeChange}
          handleExpressionValueChange={handleExpressionValueChange}
          showExpressionResults={showExpressionResults}
        />
        <div className="flex gap-4 items-center">
            <button onClick={checkExpressionAnswers} disabled={Object.keys(expressionAnswers).length === 0}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg">
              Verifică Răspunsurile
            </button>
            <button onClick={resetExpressionExercise} className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition shadow-lg">
              Resetează
            </button>
        </div>

        <TruthTableExercises
          truthTableAnswers={truthTableAnswers}
          handleTruthTableInput={handleTruthTableInput}
          showTruthTableResults={showTruthTableResults}
        />
        <div className="flex gap-4 items-center">
            <button onClick={checkTruthTableAnswers}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg">
              Verifică Răspunsurile
            </button>
            <button onClick={resetTruthTable} className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition shadow-lg">
              Resetează
            </button>
        </div>

        <ReferenceGuide />
      </div>
    </div>
  );
};

export default AllExercises;