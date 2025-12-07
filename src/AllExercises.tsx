import { Link } from 'react-router-dom';
import { Type, FunctionSquare, Pilcrow, Repeat, Calculator, Code } from 'lucide-react';

const AllExercises = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-4 md:p-6">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">Exerciții Interactive C++</h1>
                    <p className="text-base md:text-lg text-gray-600">Selectează o categorie de exerciții pentru a începe.</p>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Exerciții Fundamentale</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <Link to="/types" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                            <Type size={48} className="text-purple-600 mb-4" />
                            <h2 className="text-xl md:text-2xl font-bold text-purple-900">Tipuri de Date</h2>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">Exersează recunoașterea tipurilor de date C++.</p>
                        </Link>
                        
                        <Link to="/expressions" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                            <FunctionSquare size={48} className="text-blue-600 mb-4" />
                            <h2 className="text-xl md:text-2xl font-bold text-blue-900">Expresii</h2>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">Calculează valoarea și determină tipul expresiilor.</p>
                        </Link>

                        <Link to="/truth-tables" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                            <Pilcrow size={48} className="text-indigo-600 mb-4" />
                            <h2 className="text-xl md:text-2xl font-bold text-indigo-900">Tabele de Adevăr</h2>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">Completează tabele de adevăr pentru funcții logice.</p>
                        </Link>

                        <Link to="/for-loop" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                            <Repeat size={48} className="text-green-600 mb-4" />
                            <h2 className="text-xl md:text-2xl font-bold text-green-900">Bucle Repetitive</h2>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">Exersează instrucțiunile repetitive cu 'for'.</p>
                        </Link>

                        <Link to="/expression-values" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                            <Calculator size={48} className="text-orange-600 mb-4" />
                            <h2 className="text-xl md:text-2xl font-bold text-orange-900">Valori Expresii</h2>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">Calculează valoarea expresiilor C++.</p>
                        </Link>
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Analiza Programelor</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <Link to="/programul1" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                            <Code size={48} className="text-purple-600 mb-4" />
                            <h2 className="text-xl md:text-2xl font-bold text-purple-900">Programul 1</h2>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">Operații aritmetice și asignări.</p>
                        </Link>

                        <Link to="/programul2" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                            <Code size={48} className="text-blue-600 mb-4" />
                            <h2 className="text-xl md:text-2xl font-bold text-blue-900">Programul 2</h2>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">Bucle și iterații.</p>
                        </Link>

                        <Link to="/programul3" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                            <Code size={48} className="text-indigo-600 mb-4" />
                            <h2 className="text-xl md:text-2xl font-bold text-indigo-900">Programul 3</h2>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">Structuri condiționale.</p>
                        </Link>

                        <Link to="/programul4" className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                            <Code size={48} className="text-green-600 mb-4" />
                            <h2 className="text-xl md:text-2xl font-bold text-green-900">Programul 4</h2>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">Array-uri și matrice.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllExercises;