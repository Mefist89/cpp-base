import { Routes, Route } from 'react-router-dom';
import AllExercises from './AllExercises';
import TypeExercisePage from './pages/TypeExercisePage';
import ExpressionExercisePage from './pages/ExpressionExercisePage';
import TruthTableExercisePage from './pages/TruthTableExercisePage';
import ForLoopExercisePage from './pages/ForLoopExercisePage';
import ExpressionValuesExercisePage from './pages/ExpressionValuesExercisePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllExercises />} />
      <Route path="/types" element={<TypeExercisePage />} />
      <Route path="/expressions" element={<ExpressionExercisePage />} />
      <Route path="/truth-tables" element={<TruthTableExercisePage />} />
      <Route path="/exercises/for-loop" element={<ForLoopExercisePage />} />
      <Route path="/exercises/expression-values" element={<ExpressionValuesExercisePage />} />
    </Routes>
  )
}

export default App
