import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Award, Info, ArrowLeft } from 'lucide-react';

interface LoopExercise {
  id: number;
  code: string;
  correctAnswer: number;
  explanation: string;
}

interface ForLoopExerciseProps {
  loopExercises: LoopExercise[];
  typeOptions: string[];
  correctType: string;
  previousExercisePath?: string;
}

const ForLoopExercise: React.FC<ForLoopExerciseProps> = ({ loopExercises, typeOptions, correctType, previousExercisePath }) => {
  const [loopAnswers, setLoopAnswers] = useState<Record<number, string>>({});
  const [typeAnswer, setTypeAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleLoopAnswerChange = (id: number, value: string) => {
    setLoopAnswers(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleTypeAnswerChange = (type: string) => {
    setTypeAnswer(type);
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetExercise = () => {
    setLoopAnswers({});
    setTypeAnswer('');
    setShowResults(false);
  };

  const isLoopCorrect = (id: number) => {
    const exercise = loopExercises.find(ex => ex.id === id);
    if (!exercise) return false;
    const userAnswer = parseInt(loopAnswers[id]);
    const correctAnswer = exercise.correctAnswer;
    
    if (correctAnswer === -1) {
      return userAnswer === 0;
    }
    return userAnswer === correctAnswer;
  };

  const isTypeCorrect = () => {
    return typeAnswer === correctType;
  };

  const getLoopScore = () => {
    return loopExercises.filter(ex => isLoopCorrect(ex.id)).length;
  };

  const getTotalScore = () => {
    const loopScore = getLoopScore();
    const typeScore = isTypeCorrect() ? 1 : 0;
    return loopScore + typeScore;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        
        <div className="flex justify-between items-center mb-6">
          {previousExercisePath && (
            <Link to={previousExercisePath} className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition shadow">
              <ArrowLeft size={20} />
              <span>Назад в меню</span>
            </Link>
          )}
        </div>
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-green-900 mb-6">
            Instrucțiuni Repetitive - Exercițiu
          </h1>

          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-5 mb-6">
            <h2 className="text-xl font-semibold text-green-900 mb-3">
              Fie date declarațiile și următoarele instrucțiuni de atribuire:
            </h2>
            <code className="text-lg font-mono block bg-white p-4 rounded border">
              <strong>int</strong> m, n, i; m = 5; n = 3;
            </code>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              a) Pentru fiecare instrucțiune repetitivă scrieți numărul de repetări:
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-green-200">
                    <th className="border-2 border-gray-400 p-4 text-left text-lg font-bold">
                      Instrucțiuni repetitive
                    </th>
                    <th className="border-2 border-gray-400 p-4 text-center text-lg font-bold w-64">
                      Numărul de repetări
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loopExercises.map((exercise, index) => (
                    <React.Fragment key={exercise.id}>
                      <tr className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="border-2 border-gray-400 p-4">
                          <code className="text-base font-mono">{exercise.code}</code>
                        </td>
                        <td className={`border-2 border-gray-400 p-4 ${
                          showResults && loopAnswers[exercise.id] ? 
                            (isLoopCorrect(exercise.id) ? 'bg-green-100' : 'bg-red-100') : ''
                        }`}>
                          <div className="flex items-center gap-3">
                            <input
                              type="number"
                              value={loopAnswers[exercise.id] || ''}
                              onChange={(e) => handleLoopAnswerChange(exercise.id, e.target.value)}
                              disabled={showResults}
                              placeholder="Număr..."
                              className="w-full p-3 text-center text-lg font-bold border-2 border-gray-300 rounded focus:outline-none focus:border-green-500 disabled:bg-gray-100"
                            />
                            {showResults && loopAnswers[exercise.id] && (
                              isLoopCorrect(exercise.id) ? 
                                <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0" /> : 
                                <XCircle className="w-7 h-7 text-red-500 flex-shrink-0" />
                            )}
                          </div>
                          {showResults && loopAnswers[exercise.id] && !isLoopCorrect(exercise.id) && (
                            <div className="mt-2 text-sm">
                              <div className="text-red-600 font-semibold">
                                Corect: {exercise.correctAnswer === -1 ? 0 : exercise.correctAnswer}
                              </div>
                              <div className="text-gray-600 mt-1">{exercise.explanation}</div>
                            </div>
                          )}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              b) Bifați în următoarea listă tipul de date a valorii '*':
            </h3>
            
            <div className={`border-2 rounded-lg p-6 ${
              showResults ? (isTypeCorrect() ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50') : 'border-gray-300'
            }`}>
              <div className="flex items-center gap-6 justify-center">
                {typeOptions.map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="dataType"
                      value={type}
                      checked={typeAnswer === type}
                      onChange={() => handleTypeAnswerChange(type)}
                      disabled={showResults}
                      className="w-6 h-6 cursor-pointer"
                    />
                    <span className="text-2xl font-semibold">{type}</span>
                  </label>
                ))}
              </div>
              
              {showResults && typeAnswer && (
                <div className="mt-4 text-center">
                  {isTypeCorrect() ? (
                    <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                      <CheckCircle className="w-6 h-6" />
                      <span>Corect!</span>
                    </div>
                  ) : (
                    <div className="text-red-600 font-semibold">
                      Greșit! Răspuns corect: <strong>{correctType}</strong>
                      <div className="text-sm text-gray-600 mt-1">
                        '*' este un caracter (între apostrofuri) → tipul char
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <button
              onClick={checkAnswers}
              disabled={Object.keys(loopAnswers).length === 0 && !typeAnswer}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg text-lg"
            >
              Verifică Răspunsurile
            </button>
            
            <button
              onClick={resetExercise}
              className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition shadow-lg text-lg"
            >
              Resetează
            </button>

            {showResults && (
              <div className="ml-auto flex items-center gap-3 bg-green-100 px-6 py-3 rounded-lg">
                <Award className="w-6 h-6 text-green-600" />
                <span className="text-xl font-bold text-green-900">
                  Scor: {getTotalScore()} / {loopExercises.length + 1}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                💡 Cum funcționează ciclul for:
              </h2>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-2">Structura:</h3>
              <code className="text-sm font-mono">for (initializare; conditie; pas) instructiuni</code>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h3 className="font-bold text-yellow-900 mb-2">Exemple:</h3>
              <ul className="space-y-2 text-sm">
                <li className="font-mono">
                  <strong>for (i = 0; i &lt;= 5; i++)</strong> {'→'}
                  <span className="ml-2">i: 0,1,2,3,4,5 = 6 iteratii</span>
                </li>
                <li className="font-mono">
                  <strong>for (i = 3; i &lt;= 7; i++)</strong> {'→'}
                  <span className="ml-2">i: 3,4,5,6,7 = 5 iteratii</span>
                </li>
                <li className="font-mono">
                  <strong>for (i = 10; i {'>'} 5; i--)</strong> {'→'}
                  <span className="ml-2">i: 10,9,8,7,6 = 5 iteratii</span>
                </li>
                <li className="font-mono text-red-600">
                  <strong>for (i = 5; i &lt;= 3; i++)</strong> {'→'}
                  <span className="ml-2">Conditia 5&lt;=3 este falsa = 0 iteratii</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h3 className="font-bold text-green-900 mb-2">Regula de calcul:</h3>
              <p className="text-sm">
                Pentru <strong>for (i = start; i &lt;= end; i++)</strong>:
                <br/>
                Numar de iteratii = <strong>end - start + 1</strong> (daca start &lt;= end)
                <br/>
                Daca start {'>'} end {'→'} <strong>0 iteratii</strong>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ForLoopExercise;