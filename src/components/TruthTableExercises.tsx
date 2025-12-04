import React, { useState } from 'react';
import { Award, AlertCircle } from 'lucide-react';

const generateRows = () => {
    const rows = [];
    for (let i = 0; i < 8; i++) {
        const x1 = (i & 4) >> 2;
        const x2 = (i & 2) >> 1;
        const x3 = i & 1;
        rows.push({ x1, x2, x3 });
    }
    return rows;
};

const truthTableRows = generateRows();

const calculateCorrectAnswers = () => {
    return truthTableRows.map(row => {
        const not_x3 = row.x3 === 0 ? 1 : 0;
        const x2_OR_notx3 = row.x2 || not_x3;
        const x1_AND_x2 = row.x1 && row.x2;
        const y = x2_OR_notx3 || x1_AND_x2;

        return { not_x3, x2_OR_notx3, x1_AND_x2, y };
    });
};

const correctTruthTableAnswers = calculateCorrectAnswers();

type TruthTableAnswers = { not_x3: string; x2_OR_notx3: string; x1_AND_x2: string; y: string };

const TruthTableExercises: React.FC = () => {
    const [truthTableAnswers, setTruthTableAnswers] = useState(
        Array(8).fill(null).map(() => ({ not_x3: '', x2_OR_notx3: '', x1_AND_x2: '', y: '' }))
    );
    const [showTruthTableResults, setShowTruthTableResults] = useState(false);

    const handleTruthTableInput = (rowIndex: number, column: keyof TruthTableAnswers, value: string) => {
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


    type TruthTableColumn = keyof typeof truthTableAnswers[0];

    const isTruthTableCorrect = (rowIndex: number, column: TruthTableColumn) => {
        const userValue = parseInt(truthTableAnswers[rowIndex][column]);
        const correctValue = correctTruthTableAnswers[rowIndex][column];
        return userValue === correctValue;
    };

    const getTruthTableScore = () => {
        let correct = 0;
        let total = 0;
        truthTableRows.forEach((_, rowIndex) => {
            (['not_x3', 'x2_OR_notx3', 'x1_AND_x2', 'y'] as TruthTableColumn[]).forEach(column => {
                if (truthTableAnswers[rowIndex][column] !== '') {
                    total++;
                    if (isTruthTableCorrect(rowIndex, column as TruthTableColumn)) correct++;
                }
            });
        });
        return { correct, total };
    };

    const getTruthTableCellClass = (rowIndex: number, column: TruthTableColumn) => {
        if (!showTruthTableResults || truthTableAnswers[rowIndex][column] === '') {
            return 'border border-gray-400 p-2';
        }
        return `border border-gray-400 p-2 ${isTruthTableCorrect(rowIndex, column) ? 'bg-green-100' : 'bg-red-100'}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6 flex items-center justify-center">
            <div className="max-w-6xl w-full">
                <div className="bg-white rounded-xl shadow-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                        <div>
                            <h2 className="text-3xl font-bold text-indigo-900">Alcătuiți tabelul de adevăr pentru funcția</h2>
                        </div>
                    </div>

                    <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-6 mb-6">
                        <p className="text-2xl font-bold text-center text-indigo-900">
                            y = NOT x₃ OR x₂, apoi OR cu (x₁ AND x₂)
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

                    <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-indigo-200">
                                    <th className="border-2 border-gray-400 p-3 text-base font-bold">x₁</th>
                                    <th className="border-2 border-gray-400 p-3 text-base font-bold">x₂</th>
                                    <th className="border-2 border-gray-400 p-3 text-base font-bold">x₃</th>
                                    <th className="border-2 border-gray-400 p-3 text-base font-bold text-red-600">NOT x₃</th>
                                    <th className="border-2 border-gray-400 p-3 text-base font-bold">NOT x₃ OR x₂</th>
                                    <th className="border-2 border-gray-400 p-3 text-base font-bold">x₁ AND x₂</th>
                                    <th className="border-2 border-gray-400 p-3 text-base font-bold bg-indigo-300">y</th>
                                </tr>
                            </thead>
                            <tbody>
                                {truthTableRows.map((row, rowIndex) => (
                                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="border border-gray-400 p-2 text-center font-bold text-base bg-gray-100">{row.x1}</td>
                                        <td className="border border-gray-400 p-2 text-center font-bold text-base bg-gray-100">{row.x2}</td>
                                        <td className="border border-gray-400 p-2 text-center font-bold text-base bg-gray-100">{row.x3}</td>

                                        <td className={getTruthTableCellClass(rowIndex, 'not_x3')}>
                                            <input type="text" maxLength={1} value={truthTableAnswers[rowIndex].not_x3}
                                                onChange={(e) => handleTruthTableInput(rowIndex, 'not_x3', e.target.value)}
                                                disabled={showTruthTableResults} placeholder="?"
                                                className="w-full text-center text-base font-bold border-2 border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500 disabled:bg-transparent" />
                                        </td>

                                        <td className={getTruthTableCellClass(rowIndex, 'x2_OR_notx3')}>
                                            <input type="text" maxLength={1} value={truthTableAnswers[rowIndex].x2_OR_notx3}
                                                onChange={(e) => handleTruthTableInput(rowIndex, 'x2_OR_notx3', e.target.value)}
                                                disabled={showTruthTableResults} placeholder="?"
                                                className="w-full text-center text-base font-bold border-2 border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500 disabled:bg-transparent" />
                                        </td>

                                        <td className={getTruthTableCellClass(rowIndex, 'x1_AND_x2')}>
                                            <input type="text" maxLength={1} value={truthTableAnswers[rowIndex].x1_AND_x2}
                                                onChange={(e) => handleTruthTableInput(rowIndex, 'x1_AND_x2', e.target.value)}
                                                disabled={showTruthTableResults} placeholder="?"
                                                className="w-full text-center text-base font-bold border-2 border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500 disabled:bg-transparent" />
                                        </td>

                                        <td className={getTruthTableCellClass(rowIndex, 'y')}>
                                            <input type="text" maxLength={1} value={truthTableAnswers[rowIndex].y}
                                                onChange={(e) => handleTruthTableInput(rowIndex, 'y', e.target.value)}
                                                disabled={showTruthTableResults} placeholder="?"
                                                className="w-full text-center text-base font-bold border-2 border-gray-300 rounded p-1 focus:outline-none focus:border-indigo-500 disabled:bg-transparent bg-indigo-50" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {showTruthTableResults && (
                        <div className="ml-auto flex items-center gap-3 bg-indigo-100 px-6 py-3 rounded-lg">
                            <Award className="w-6 h-6 text-indigo-600" />
                            <span className="text-xl font-bold text-indigo-900">
                                Scor: {getTruthTableScore().correct} / {getTruthTableScore().total}
                            </span>
                        </div>
                    )}
                    {showTruthTableResults && (
                        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
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
                <div className="flex gap-4 items-center mt-6">
                    <button onClick={checkTruthTableAnswers}
                        className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg">
                        Verifică Răspunsurile
                    </button>
                    <button onClick={resetTruthTable} className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition shadow-lg">
                        Resetează
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TruthTableExercises;