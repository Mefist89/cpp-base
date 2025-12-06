import React, { useState } from 'react';
import { Award, AlertCircle } from 'lucide-react';
import VariantButtons from '../VariantButtons';
import ReferenceGuide3 from '../ReferenceGuide3';

interface TruthTableAnswers {
  not_x3: string;
  x2_OR_notx3: string;
  x1_AND_x2: string;
  y: string;
}

interface TruthTableVariant {
  generateRows: () => { x1: number; x2: number; x3: number }[];
  calculateCorrectAnswers: (rows: { x1: number; x2: number; x3: number }[]) => { not_x3: number; x2_OR_notx3: number; x1_AND_x2: number; y: number }[];
  formula: string;
}

interface TruthTableExerciseProps {
  variants: TruthTableVariant[];
}

const TruthTableExercise: React.FC<TruthTableExerciseProps> = ({ variants }) => {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [truthTableAnswers, setTruthTableAnswers] = useState<{ [key: number]: TruthTableAnswers[] }>({});
  const [showTruthTableResults, setShowTruthTableResults] = useState<boolean[]>(Array(variants.length).fill(false));

  const variant = variants[currentVariant];
  const truthTableRows = variant.generateRows();
  const correctTruthTableAnswers = variant.calculateCorrectAnswers(truthTableRows);

  // Initialize answers for current variant if not exists
  if (!truthTableAnswers[currentVariant]) {
    const newAnswers = { ...truthTableAnswers };
    newAnswers[currentVariant] = Array(8).fill(null).map(() => ({ not_x3: '', x2_OR_notx3: '', x1_AND_x2: '', y: '' }));
    setTruthTableAnswers(newAnswers);
  }

  const currentAnswers = truthTableAnswers[currentVariant] || Array(8).fill(null).map(() => ({ not_x3: '', x2_OR_notx3: '', x1_AND_x2: '', y: '' }));

  const handleTruthTableInput = (rowIndex: number, column: keyof TruthTableAnswers, value: string) => {
    if (value === '' || value === '0' || value === '1') {
      const newAnswers = { ...truthTableAnswers };
      if (!newAnswers[currentVariant]) {
        newAnswers[currentVariant] = Array(8).fill(null).map(() => ({ not_x3: '', x2_OR_notx3: '', x1_AND_x2: '', y: '' }));
      }
      newAnswers[currentVariant][rowIndex][column] = value;
      setTruthTableAnswers(newAnswers);
    }
  };

  const checkTruthTableAnswers = () => {
    const newShowResults = [...showTruthTableResults];
    newShowResults[currentVariant] = true;
    setShowTruthTableResults(newShowResults);
  };

  const resetTruthTable = () => {
    const newAnswers = { ...truthTableAnswers };
    newAnswers[currentVariant] = Array(8).fill(null).map(() => ({ not_x3: '', x2_OR_notx3: '', x1_AND_x2: '', y: '' }));
    setTruthTableAnswers(newAnswers);
    const newShowResults = [...showTruthTableResults];
    newShowResults[currentVariant] = false;
    setShowTruthTableResults(newShowResults);
  };

  type TruthTableColumn = keyof TruthTableAnswers;

  const isTruthTableCorrect = (rowIndex: number, column: TruthTableColumn) => {
    const userValue = parseInt(currentAnswers[rowIndex][column]);
    const correctValue = correctTruthTableAnswers[rowIndex][column];
    return userValue === correctValue;
  };

  const getTruthTableScore = () => {
    let correct = 0;
    let total = 0;
    truthTableRows.forEach((_, rowIndex) => {
      (['not_x3', 'x2_OR_notx3', 'x1_AND_x2', 'y'] as TruthTableColumn[]).forEach(column => {
        if (currentAnswers[rowIndex][column] !== '') {
          total++;
          if (isTruthTableCorrect(rowIndex, column as TruthTableColumn)) correct++;
        }
      });
    });
    return { correct, total };
  };

  const getTruthTableCellClass = (rowIndex: number, column: TruthTableColumn) => {
    if (!showTruthTableResults[currentVariant] || currentAnswers[rowIndex][column] === '') {
      return 'border border-gray-400 p-2';
    }
    return `border border-gray-400 p-2 ${isTruthTableCorrect(rowIndex, column) ? 'bg-green-100' : 'bg-red-100'}`;
  };

  return (
    <div className="max-w-6xl w-full">
      <div className="bg-white rounded-xl shadow-2xl p-4 md:p-8">
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
          <div className="bg-indigo-600 text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-base md:text-xl">3</div>
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-indigo-900">Alcătuiți tabelul de adevăr pentru funcția</h2>
          </div>
        </div>

        <VariantButtons 
          totalVariants={variants.length}
          currentVariant={currentVariant}
          onVariantChange={setCurrentVariant}
          color="indigo"
        />

        <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-3 md:p-6 mb-4 md:mb-6">
          <p className="text-lg md:text-2xl font-bold text-center text-indigo-900">
            {variant.formula}
          </p>
        </div>

        <div className="mb-6 bg-yellow-50 border border-yellow-300 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-1">Instrucțiuni:</p>
              <p>Completați tabelul cu valori <strong>0</strong> sau <strong>1</strong> pentru fiecare celulă.</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mb-4 md:mb-6">
          <table className="w-full border-collapse text-xs md:text-base">
            <thead>
              <tr className="bg-indigo-200">
                <th className="border-2 border-gray-400 p-1 md:p-3 text-xs md:text-base font-bold">x₁</th>
                <th className="border-2 border-gray-400 p-1 md:p-3 text-xs md:text-base font-bold">x₂</th>
                <th className="border-2 border-gray-400 p-1 md:p-3 text-xs md:text-base font-bold">x₃</th>
                <th className="border-2 border-gray-400 p-1 md:p-3 text-xs md:text-base font-bold text-red-600">NOT x₃</th>
                <th className="border-2 border-gray-400 p-1 md:p-3 text-xs md:text-base font-bold">NOT x₃ OR x₂</th>
                <th className="border-2 border-gray-400 p-1 md:p-3 text-xs md:text-base font-bold">x₁ AND x₂</th>
                <th className="border-2 border-gray-400 p-1 md:p-3 text-xs md:text-base font-bold bg-indigo-30">y</th>
              </tr>
            </thead>
            <tbody>
              {truthTableRows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="border border-gray-400 p-1 md:p-2 text-center font-bold text-xs md:text-base bg-gray-100">{row.x1}</td>
                  <td className="border border-gray-400 p-1 md:p-2 text-center font-bold text-xs md:text-base bg-gray-100">{row.x2}</td>
                  <td className="border border-gray-400 p-1 md:p-2 text-center font-bold text-xs md:text-base bg-gray-100">{row.x3}</td>

                  <td className={getTruthTableCellClass(rowIndex, 'not_x3')}>
                    <input type="text" maxLength={1} value={currentAnswers[rowIndex].not_x3}
                      onChange={(e) => handleTruthTableInput(rowIndex, 'not_x3', e.target.value)}
                      disabled={showTruthTableResults[currentVariant]} placeholder="?"
                      className="w-full text-center text-xs md:text-base font-bold border-2 border-gray-300 rounded p-0.5 md:p-1 focus:outline-none focus:border-indigo-500 disabled:bg-transparent" />
                  </td>

                  <td className={getTruthTableCellClass(rowIndex, 'x2_OR_notx3')}>
                    <input type="text" maxLength={1} value={currentAnswers[rowIndex].x2_OR_notx3}
                      onChange={(e) => handleTruthTableInput(rowIndex, 'x2_OR_notx3', e.target.value)}
                      disabled={showTruthTableResults[currentVariant]} placeholder="?"
                      className="w-full text-center text-xs md:text-base font-bold border-2 border-gray-300 rounded p-0.5 md:p-1 focus:outline-none focus:border-indigo-500 disabled:bg-transparent" />
                  </td>

                  <td className={getTruthTableCellClass(rowIndex, 'x1_AND_x2')}>
                    <input type="text" maxLength={1} value={currentAnswers[rowIndex].x1_AND_x2}
                      onChange={(e) => handleTruthTableInput(rowIndex, 'x1_AND_x2', e.target.value)}
                      disabled={showTruthTableResults[currentVariant]} placeholder="?"
                      className="w-full text-center text-xs md:text-base font-bold border-2 border-gray-300 rounded p-0.5 md:p-1 focus:outline-none focus:border-indigo-500 disabled:bg-transparent" />
                  </td>

                  <td className={getTruthTableCellClass(rowIndex, 'y')}>
                    <input type="text" maxLength={1} value={currentAnswers[rowIndex].y}
                      onChange={(e) => handleTruthTableInput(rowIndex, 'y', e.target.value)}
                      disabled={showTruthTableResults[currentVariant]} placeholder="?"
                      className="w-full text-center text-xs md:text-base font-bold border-2 border-gray-300 rounded p-0.5 md:p-1 focus:outline-none focus:border-indigo-500 disabled:bg-transparent bg-indigo-50" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showTruthTableResults[currentVariant] && (
          <div className="ml-auto flex items-center gap-3 bg-indigo-100 px-6 py-3 rounded-lg">
            <Award className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold text-indigo-900">
              Scor: {getTruthTableScore().correct} / {getTruthTableScore().total}
            </span>
          </div>
        )}
        {showTruthTableResults[currentVariant] && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-20 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-blue-900">Răspunsuri corecte:</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {truthTableRows.map((row, idx) => (
                <div key={idx} className="bg-white p-2 rounded border">
                  <span className="font-mono text-xs">
                    x₁={row.x1}, x₂={row.x2}, x₃={row.x3} → NOT x₃={correctTruthTableAnswers[idx].not_x3},
                    NOT x₃ OR x₂={correctTruthTableAnswers[idx].x2_OR_notx3},
                    x₁ AND x₂={correctTruthTableAnswers[idx].x1_AND_x2},
                    <strong> y={correctTruthTableAnswers[idx].y}</strong>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center mt-4 md:mt-6">
        <button onClick={checkTruthTableAnswers}
          className="w-full md:w-auto bg-indigo-600 text-white px-4 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-indigo-700 transition shadow-lg">
          Verifică Răspunsurile
        </button>
        <button onClick={resetTruthTable} className="w-full md:w-auto bg-gray-500 text-white px-4 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-60 transition shadow-lg">
          Resetează
        </button>
      </div>
      <ReferenceGuide3 /> 
    </div>
  );
};

export default TruthTableExercise;