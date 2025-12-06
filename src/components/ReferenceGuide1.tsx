
const ReferenceGuide1 = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">📚 Ghid de Referință</h2>

            <h3 className="text-lg font-semibold mb-3">Tipuri de date în C++:</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-1">int</h4>
                    <p className="text-sm text-gray-700">Numere întregi (ex: 260, -5, 0)</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-1">float</h4>
                    <p className="text-sm text-gray-700">Numere zecimale (ex: 15.25, -2.01)</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                    <h4 className="font-bold text-yellow-900 mb-1">char</h4>
                    <p className="text-sm text-gray-700">Un caracter (ex: 'a', '+')</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-bold text-purple-900 mb-1">bool</h4>
                    <p className="text-sm text-gray-700">Valori logice (true/false)</p>
                </div>
            </div>
        </div>
    );
};

export default ReferenceGuide1;