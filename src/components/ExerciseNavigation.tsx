import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

const exercisePaths = [
    '/types',
    '/expressions',
    '/truth-tables',
    '/exercises/for-loop',
    '/exercises/expression-values',
];

const ExerciseNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentIndex = exercisePaths.indexOf(location.pathname);

    const hasPrevious = currentIndex > 0;
    const hasNext = currentIndex < exercisePaths.length - 1;

    const handlePrevious = () => {
        if (hasPrevious) {
            navigate(exercisePaths[currentIndex - 1]);
        }
    };

    const handleNext = () => {
        if (hasNext) {
            navigate(exercisePaths[currentIndex + 1]);
        }
    };

    const handleHome = () => {
        navigate('/');
    };

    return (
        <div className="flex justify-between items-center mb-6 w-full">
            <button
                onClick={handlePrevious}
                disabled={!hasPrevious}
                className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition shadow disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
                <ArrowLeft size={20} />
                <span>Exercițiul anterior</span>
            </button>
            <button
                onClick={handleHome}
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition shadow"
            >
                <Home size={20} />
                <span>Lista exerciții</span>
            </button>
            <button
                onClick={handleNext}
                disabled={!hasNext}
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition shadow disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                <span>Exercițiul următor</span>
                <ArrowRight size={20} />
            </button>
        </div>
    );
};

export default ExerciseNavigation;