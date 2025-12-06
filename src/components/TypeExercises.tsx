import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Award, ArrowLeft, ArrowRight } from 'lucide-react';

const typeExercisesVariants = [
  // Variant 1
  {
    exercises: [
      { id: 'a', value: '15.25', correctType: 'float' },
      { id: 'b', value: '260', correctType: 'int' },
      { id: 'c', value: '-2.01', correctType: 'float' },
      { id: 'd', value: 'true', correctType: 'bool' },
      { id: 'e', value: "'+'", correctType: 'char' },
      { id: 'f', value: '1.10', correctType: 'float' }
    ]
  },
  // Variant 2
  {
    exercises: [
      { id: 'a', value: '42', correctType: 'int' },
      { id: 'b', value: '3.14', correctType: 'float' },
      { id: 'c', value: '-17', correctType: 'int' },
      { id: 'd', value: 'false', correctType: 'bool' },
      { id: 'e', value: "'x'", correctType: 'char' },
      { id: 'f', value: '0.5', correctType: 'float' }
    ]
  },
  // Variant 3
  {
    exercises: [
      { id: 'a', value: '100', correctType: 'int' },
      { id: 'b', value: '-3.75', correctType: 'float' },
      { id: 'c', value: '999', correctType: 'int' },
      { id: 'd', value: 'true', correctType: 'bool' },
      { id: 'e', value: "'5'", correctType: 'char' },
      { id: 'f', value: '2.5', correctType: 'float' }
    ]
  },
  // Variant 4
  {
    exercises: [
      { id: 'a', value: '-50', correctType: 'int' },
      { id: 'b', value: '7.89', correctType: 'float' },
      { id: 'c', value: '0', correctType: 'int' },
      { id: 'd', value: 'false', correctType: 'bool' },
      { id: 'e', value: "'@'", correctType: 'char' },
      { id: 'f', value: '-1.5', correctType: 'float' }
    ]
  },
  // Variant 5
  {
    exercises: [
      { id: 'a', value: '2048', correctType: 'int' },
      { id: 'b', value: '1.23', correctType: 'float' },
      { id: 'c', value: '-999', correctType: 'int' },
      { id: 'd', value: 'true', correctType: 'bool' },
      { id: 'e', value: "'!'", correctType: 'char' },
      { id: 'f', value: '99.99', correctType: 'float' }
    ]
  }
];

const TypeExercises: React.FC = () => {
    const [currentVariant, setCurrentVariant] = useState(0);
    const [typeAnswers, setTypeAnswers] = useState<{ [key: string]: { [key: string]: string } }>({});
    const [showTypeResults, setShowTypeResults] = useState<boolean[]>(Array(typeExercisesVariants.length).fill(false));

    const exercises = typeExercisesVariants[currentVariant].exercises;

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
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-6 flex items-center justify-center">
            <div className="max-w-4xl w-full">
                <div className="flex justify-between items-center mb-6">
                    <Link to="/" className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition shadow">
                        <ArrowLeft size={20} />
                        <span>Înapoi la meniu</span>
                    </Link>
                    <Link to="/expressions" className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition shadow">
                        <span>Exercițiul următor</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>

                {/* Variant buttons */}
                <div className="flex gap-2 mb-6 justify-center">
                    {typeExercisesVariants.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentVariant(index)}
                            className={`w-10 h-10 rounded-full font-bold text-lg transition-all ${
                                currentVariant === index
                                    ? 'bg-purple-600 text-white shadow-lg scale-110'
                                    : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                <div className="bg-white rounded-xl shadow-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">{currentVariant + 1}</div>
                        <div>
                            <h2 className="text-3xl font-bold text-purple-900">Precizați tipul de date a următoarelor variabile</h2>
                            <p className="text-gray-600">Introduceți tipul corect de date pentru fiecare valoare (int, float, char, bool)</p>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        {exercises.map((exercise) => (
                            <div key={exercise.id} className={`border-2 rounded-lg p-5 transition-all ${
                                showTypeResults[currentVariant] ? (isTypeCorrect(exercise.id) ? 'border-green-400 bg-green-50' :
                                (currentAnswers[exercise.id] ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-gray-50')) :
                                'border-gray-300 hover:border-purple-300 bg-white'}`}>
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-24">
                                        <span className="text-xl font-bold text-purple-900">{exercise.id})</span>
                                        <span className="ml-2 text-xl font-mono font-semibold">{exercise.value}</span>
                                    </div>
                                    <div className="flex-1">
                                        <input type="text" value={currentAnswers[exercise.id] || ''}
                                            onChange={(e) => handleTypeSelect(exercise.id, e.target.value.toLowerCase())}
                                            disabled={showTypeResults[currentVariant]} placeholder="int, float, char sau bool"
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg font-semibold focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 disabled:bg-gray-100 disabled:cursor-not-allowed" />
                                    </div>
                                    <div className="flex-shrink-0 w-12 flex justify-center">
                                        {showTypeResults[currentVariant] && currentAnswers[exercise.id] && (isTypeCorrect(exercise.id) ?
                                            <CheckCircle className="w-8 h-8 text-green-500" /> : <XCircle className="w-8 h-8 text-red-500" />)}
                                    </div>
                                </div>
                                {showTypeResults[currentVariant] && !isTypeCorrect(exercise.id) && currentAnswers[exercise.id] && (
                                    <div className="mt-3 pl-28 text-sm">
                                        <span className="text-red-600 font-semibold">Răspuns corect: </span>
                                        <span className="ml-2 px-3 py-1 bg-green-100 text-green-800 rounded font-semibold">{exercise.correctType}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {showTypeResults[currentVariant] && (
                        <div className="ml-auto flex items-center gap-3 bg-purple-100 px-6 py-3 rounded-lg">
                            <Award className="w-6 h-6 text-purple-600" />
                            <span className="text-xl font-bold text-purple-900">Scor: {getTypeScore()} / {exercises.length}</span>
                        </div>
                    )}
                </div>
                <div className="flex gap-4 items-center mt-6">
                    <button onClick={checkTypeAnswers} disabled={Object.keys(currentAnswers).length === 0}
                        className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg">
                        Verifică Răspunsurile
                    </button>
                    <button onClick={resetTypeExercise} className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition shadow-lg">
                        Resetează
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TypeExercises;