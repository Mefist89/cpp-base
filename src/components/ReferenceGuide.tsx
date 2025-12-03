import React from 'react';

const ReferenceGuide = () => {
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

            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
            ⚙️ Operații în C++:
          </h2>
          
          <div className="space-y-4">
            {/* Arithmetic Operations */}
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <h3 className="font-bold text-orange-900 mb-3 text-lg">Operații Aritmetice:</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-orange-700 text-lg">+</span>
                  <div>
                    <p className="font-semibold text-sm">Adunare</p>
                    <p className="text-xs text-gray-600">5 + 3 = 8</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-orange-700 text-lg">-</span>
                  <div>
                    <p className="font-semibold text-sm">Scădere</p>
                    <p className="text-xs text-gray-600">5 - 3 = 2</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-orange-700 text-lg">*</span>
                  <div>
                    <p className="font-semibold text-sm">Înmulțire</p>
                    <p className="text-xs text-gray-600">5 * 3 = 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-orange-700 text-lg">/</span>
                  <div>
                    <p className="font-semibold text-sm">Împărțire</p>
                    <p className="text-xs text-gray-600">8 / 2 = 4; 8.0 / 3.0 = 2.67</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-orange-700 text-lg">%</span>
                  <div>
                    <p className="font-semibold text-sm">Modulo (rest)</p>
                    <p className="text-xs text-gray-600">8 % 3 = 2 (doar pentru int)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Operations */}
            <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
              <h3 className="font-bold text-indigo-900 mb-3 text-lg">Operații de Comparare (returnează bool):</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-indigo-700 text-lg">==</span>
                  <div>
                    <p className="font-semibold text-sm">Egal cu</p>
                    <p className="text-xs text-gray-600">5 == 5 → true; 5 == 3 → false</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-indigo-700 text-lg">!=</span>
                  <div>
                    <p className="font-semibold text-sm">Diferit de</p>
                    <p className="text-xs text-gray-600">5 != 3 → true; 5 != 5 → false</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-indigo-700 text-lg">&gt;</span>
                  <div>
                    <p className="font-semibold text-sm">Mai mare decât</p>
                    <p className="text-xs text-gray-600">5 &gt; 3 → true; 3 &gt; 5 → false</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-indigo-700 text-lg">&lt;</span>
                  <div>
                    <p className="font-semibold text-sm">Mai mic decât</p>
                    <p className="text-xs text-gray-600">3 &lt; 5 → true; 5 &lt; 3 → false</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-indigo-700 text-lg">&gt;=</span>
                  <div>
                    <p className="font-semibold text-sm">Mai mare sau egal</p>
                    <p className="text-xs text-gray-600">5 &gt;= 5 → true; 5 &gt;= 3 → true</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-indigo-700 text-lg">&lt;=</span>
                  <div>
                    <p className="font-semibold text-sm">Mai mic sau egal</p>
                    <p className="text-xs text-gray-600">3 &lt;= 5 → true; 5 &lt;= 5 → true</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-amber-50 border border-amber-300 p-4 rounded-lg">
              <h3 className="font-bold text-amber-900 mb-2">⚠️ Notă importantă:</h3>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li><strong>int / int</strong> = int (8 / 3 = 2, partea zecimală se pierde)</li>
                <li><strong>float / float</strong> = float (8.0 / 3.0 = 2.666...)</li>
                <li><strong>int / float</strong> sau <strong>float / int</strong> = float (rezultatul devine float)</li>
                <li><strong>Operatorul %</strong> funcționează doar cu tipul int</li>
              </ul>
            </div>
          </div>

             <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
            ⚙️ Operații Logice:
          </h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <h4 className="font-bold text-red-900 mb-1">NOT</h4>
                    <div className="font-mono text-xs space-y-1">
                        <div>NOT 0 = 1</div>
                        <div>NOT 1 = 0</div>
                    </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-1">OR</h4>
                    <div className="font-mono text-xs space-y-1">
                        <div>0 OR 0 = 0</div>
                        <div>0 OR 1 = 1</div>
                        <div>1 OR 1 = 1</div>
                    </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-900 mb-1">AND</h4>
                    <div className="font-mono text-xs space-y-1">
                        <div>0 AND 0 = 0</div>
                        <div>0 AND 1 = 0</div>
                        <div>1 AND 1 = 1</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferenceGuide;