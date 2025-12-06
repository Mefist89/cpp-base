import TruthTableExercise from '../components/exercises/TruthTableExercise';
import ExerciseNavigation from '../components/ExerciseNavigation';

const TruthTableExercisePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6 flex flex-col items-center justify-center">
      <ExerciseNavigation />
      <TruthTableExercise />
    </div>
  );
};

export default TruthTableExercisePage;