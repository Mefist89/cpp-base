import { Routes, Route } from 'react-router-dom';
import AllExercises from './AllExercises';
import TypeExercises from './components/TypeExercises';
import ExpressionExercises from './components/ExpressionExercises';
import TruthTableExercises from './components/TruthTableExercises';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllExercises />} />
      <Route path="/types" element={<TypeExercises />} />
      <Route path="/expressions" element={<ExpressionExercises />} />
      <Route path="/truth-tables" element={<TruthTableExercises />} />
    </Routes>
  )
}

export default App
