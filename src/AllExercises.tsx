import { Link } from 'react-router-dom';
import ReferenceGuide from './components/ReferenceGuide';
import { Type, FunctionSquare, Pilcrow, Repeat, Calculator } from 'lucide-react';

const AllExercises = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-6">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Exerciții Interactive C++</h1>
                    <p className="text-lg text-gray-600">Selectează o categorie de exerciții pentru a începe.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link to="/types" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                        <Type size={48} className="text-purple-600 mb-4" />
                        <h2 className="text-2xl font-bold text-purple-900">Tipuri de Date</h2>
                        <p className="text-gray-600 mt-2">Exersează recunoașterea tipurilor de date C++.</p>
                    </Link>
                    
                    <Link to="/expressions" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                        <FunctionSquare size={48} className="text-blue-600 mb-4" />
                        <h2 className="text-2xl font-bold text-blue-900">Expresii</h2>
                        <p className="text-gray-600 mt-2">Calculează valoarea și determină tipul expresiilor.</p>
                    </Link>

                    <Link to="/truth-tables" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                        <Pilcrow size={48} className="text-indigo-600 mb-4" />
                        <h2 className="text-2xl font-bold text-indigo-900">Tabele de Adevăr</h2>
                        <p className="text-gray-600 mt-2">Completează tabele de adevăr pentru funcții logice.</p>
                    </Link>

                    <Link to="/for-loop" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                        <Repeat size={48} className="text-green-600 mb-4" />
                        <h2 className="text-2xl font-bold text-green-900">Bucle Repetitive</h2>
                        <p className="text-gray-600 mt-2">Exersează instrucțiunile repetitive cu 'for'.</p>
                    </Link>

                    <Link to="/expression-values" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                        <Calculator size={48} className="text-orange-600 mb-4" />
                        <h2 className="text-2xl font-bold text-orange-900">Valori Expresii</h2>
                        <p className="text-gray-600 mt-2">Calculează valoarea expresiilor C++.</p>
                    </Link>
                </div>

                <ReferenceGuide />
            </div>
        </div>
    );
};

export default AllExercises;