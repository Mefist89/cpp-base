import React from 'react';
import { CheckCircle, XCircle, Award } from 'lucide-react';

const expressionExercisesData: { [key: string]: { type: string; value: number | boolean } } = {
    'a+b': { type: 'int', value: 12 },
    'a+2*b': { type: 'int', value: 20 },
    'b/a+3.5': { type: 'float', value: 5.5 },
    'q!=z': { type: 'bool', value: false },
    'b%a': { type: 'int', value: 0 },
    'c+d': { type: 'float', value: 6.0 },
    'a%b': { type: 'int', value: 4 },
    'a==b': { type: 'bool', value: false }
};

interface ExpressionExerciseProps {
    expressionAnswers: { [key: string]: { type?: string, value?: string } };
    handleExpressionTypeChange: (expr: string, type: string) => void;
    handleExpressionValueChange: (expr: string, value: string) => void;
    showExpressionResults: boolean;
}

const ExpressionExercises: React.FC<ExpressionExerciseProps> = ({ expressionAnswers, handleExpressionTypeChange, handleExpressionValueChange, showExpressionResults }) => {

    const isExpressionCorrect = (expr: string) => {
        const userAns = expressionAnswers[expr];
        const correctAns = expressionExercisesData[expr];

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
        return Object.keys(expressionExercisesData).filter(expr => isExpressionCorrect(expr)).length;
    };

    return (
        <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <div>
                    <h2 className="text-3xl font-bold text-blue-900">Determinați tipul și valoarea fiecărei expresii</h2>
                    <p className="text-gray-600">Dată fiind declarațiile variabilelor</p>
                </div>
            </div>

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
                        {Object.keys(expressionExercisesData).map((expr) => {
                            const isCorrect = isExpressionCorrect(expr);
                            const hasAnswer = expressionAnswers[expr]?.type && expressionAnswers[expr]?.value;

                            return (
                                <tr key={expr} className={`hover:bg-gray-50 ${showExpressionResults && hasAnswer ?
                                    (isCorrect ? 'bg-green-50' : 'bg-red-50') : ''}`}>
                                    <td className="border border-gray-300 p-3 font-mono font-semibold text-lg">{expr}</td>
                                    <td className="border border-gray-300 p-3">
                                        <input type="text" value={expressionAnswers[expr]?.type || ''}
                                            onChange={(e) => handleExpressionTypeChange(expr, e.target.value.toLowerCase())}
                                            disabled={showExpressionResults} placeholder="int, float, bool..."
                                            className="w-full p-2 border-2 rounded focus:outline-none focus:border-blue-500 disabled:bg-gray-100" />
                                        {showExpressionResults && hasAnswer && !isCorrect && (
                                            <span className="text-xs text-red-600 mt-1 block">
                                                Corect: <strong>{expressionExercisesData[expr].type}</strong>
                                            </span>
                                        )}
                                    </td>
                                    <td className="border border-gray-300 p-3">
                                        <input type="text" value={expressionAnswers[expr]?.value || ''}
                                            onChange={(e) => handleExpressionValueChange(expr, e.target.value)}
                                            disabled={showExpressionResults} placeholder="Valoarea..."
                                            className="w-full p-2 border-2 rounded focus:outline-none focus:border-blue-500 disabled:bg-gray-100" />
                                        {showExpressionResults && hasAnswer && !isCorrect && (
                                            <span className="text-xs text-red-600 mt-1 block">
                                                Corect: <strong>{expressionExercisesData[expr].value.toString()}</strong>
                                            </span>
                                        )}
                                    </td>
                                    <td className="border border-gray-300 p-3 text-center">
                                        {showExpressionResults && hasAnswer && (isCorrect ?
                                            <CheckCircle className="w-7 h-7 text-green-500 mx-auto" /> :
                                            <XCircle className="w-7 h-7 text-red-500 mx-auto" />)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {showExpressionResults && (
                <div className="ml-auto flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                    <span className="text-xl font-bold text-blue-900">Scor: {getExpressionScore()} / {Object.keys(expressionExercisesData).length}</span>
                </div>
            )}
        </div>
    );
};

export default ExpressionExercises;