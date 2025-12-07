import { Routes, Route } from 'react-router-dom';
import AllExercises from './AllExercises';
import TypeExercisePage from './pages/TypeExercisePage';
import ExpressionExercisePage from './pages/ExpressionExercisePage';
import TruthTableExercisePage from './pages/TruthTableExercisePage';
import ForLoopExercisePage from './pages/ForLoopExercisePage';
import ExpressionValuesExercisePage from './pages/ExpressionValuesExercisePage';
import Programul1Page from './pages/Programul1Page';
import Programul2Page from './pages/Programul2Page';
import Programul3Page from './pages/Programul3Page';
import Programul4Page from './pages/Programul4Page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllExercises />} />
      <Route path="/types" element={<TypeExercisePage />} />
      <Route path="/expressions" element={<ExpressionExercisePage />} />
      <Route path="/truth-tables" element={<TruthTableExercisePage />} />
      <Route path="/for-loop" element={<ForLoopExercisePage />} />
      <Route path="/expression-values" element={<ExpressionValuesExercisePage />} />
      <Route path="/programul1" element={<Programul1Page />} />
      <Route path="/programul2" element={<Programul2Page />} />
      <Route path="/programul3" element={<Programul3Page />} />
      <Route path="/programul4" element={<Programul4Page />} />
    </Routes>
  )
}

export default App
