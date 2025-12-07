import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

const programPaths = [
    '/programul1',
    '/programul2',
    '/programul3',
    '/programul4',
];

const ProgramNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentIndex = programPaths.indexOf(location.pathname);

    const hasPrevious = currentIndex > 0;
    const hasNext = currentIndex < programPaths.length - 1;

    const handlePrevious = () => {
        if (hasPrevious) {
            navigate(programPaths[currentIndex - 1]);
        }
    };

    const handleNext = () => {
        if (hasNext) {
            navigate(programPaths[currentIndex + 1]);
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
                <span>Programul anterior</span>
            </button>
            <button
                onClick={handleHome}
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition shadow"
            >
                <Home size={20} />
                <span>Acasă</span>
            </button>
            <button
                onClick={handleNext}
                disabled={!hasNext}
                className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition shadow disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
                <span>Programul următor</span>
                <ArrowRight size={20} />
            </button>
        </div>
    );
};

export default ProgramNavigation;
