
const ReferenceGuide3 = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">📚 Ghid de Referință</h2>
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

export default ReferenceGuide3;