import React from 'react';
import { CheckCircle, XCircle, Award } from 'lucide-react';

const typeExercisesData = [
    { id: 'a', value: '15.25', correctType: 'float' },
    { id: 'b', value: '260', correctType: 'int' },
    { id: 'c', value: '-2.01', correctType: 'float' },
    { id: 'd', value: 'true', correctType: 'bool' },
    { id: 'e', value: "'+'", correctType: 'char' },
    { id: 'f', value: '1.10', correctType: 'float' }
];

interface TypeExerciseProps {
    typeAnswers: { [key: string]: string };
    handleTypeSelect: (exerciseId: string, type: string) => void;
    showTypeResults: boolean;
}

const TypeExercises: React.FC<TypeExerciseProps> = ({ typeAnswers, handleTypeSelect, showTypeResults }) => {

    const isTypeCorrect = (exerciseId: string) => {
        const exercise = typeExercisesData.find(ex => ex.id === exerciseId);
        return typeAnswers[exerciseId] === exercise?.correctType;
    };

    const getTypeScore = () => typeExercisesData.filter(ex => isTypeCorrect(ex.id)).length;

    return (
        <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <div>
                    <h2 className="text-3xl font-bold text-purple-900">Precizați tipul de date a următoarelor variabile</h2>
                    <p className="text-gray-600">Introduceți tipul corect de date pentru fiecare valoare (int, float, char, bool)</p>
                </div>
            </div>

            <div className="space-y-4 mb-8">
                {typeExercisesData.map((exercise) => (
                    <div key={exercise.id} className={`border-2 rounded-lg p-5 transition-all ${
                        showTypeResults ? (isTypeCorrect(exercise.id) ? 'border-green-400 bg-green-50' :
                        (typeAnswers[exercise.id] ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-gray-50')) :
                        'border-gray-300 hover:border-purple-300 bg-white'}`}>
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-24">
                                <span className="text-xl font-bold text-purple-900">{exercise.id})</span>
                                <span className="ml-2 text-xl font-mono font-semibold">{exercise.value}</span>
                            </div>
                            <div className="flex-1">
                                <input type="text" value={typeAnswers[exercise.id] || ''}
                                    onChange={(e) => handleTypeSelect(exercise.id, e.target.value.toLowerCase())}
                                    disabled={showTypeResults} placeholder="int, float, char sau bool"
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg font-semibold focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 disabled:bg-gray-100 disabled:cursor-not-allowed" />
                            </div>
                            <div className="flex-shrink-0 w-12 flex justify-center">
                                {showTypeResults && typeAnswers[exercise.id] && (isTypeCorrect(exercise.id) ?
                                    <CheckCircle className="w-8 h-8 text-green-500" /> : <XCircle className="w-8 h-8 text-red-500" />)}
                            </div>
                        </div>
                        {showTypeResults && !isTypeCorrect(exercise.id) && typeAnswers[exercise.id] && (
                            <div className="mt-3 pl-28 text-sm">
                                <span className="text-red-600 font-semibold">Răspuns corect: </span>
                                <span className="ml-2 px-3 py-1 bg-green-100 text-green-800 rounded font-semibold">{exercise.correctType}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {showTypeResults && (
              <div className="ml-auto flex items-center gap-3 bg-purple-100 px-6 py-3 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
                <span className="text-xl font-bold text-purple-900">Scor: {getTypeScore()} / {typeExercisesData.length}</span>
              </div>
            )}
        </div>
    );
};

export default TypeExercises;