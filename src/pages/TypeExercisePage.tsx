import TypeExercise from '../components/exercises/TypeExercise';
import ExerciseNavigation from '../components/ExerciseNavigation';

const typeExercisesData = [
  { id: 'a', value: '15.25', correctType: 'float' },
  { id: 'b', value: '260', correctType: 'int' },
  { id: 'c', value: '-2.01', correctType: 'float' },
  { id: 'd', value: 'true', correctType: 'bool' },
  { id: 'e', value: "'+'", correctType: 'char' },
  { id: 'f', value: '1.10', correctType: 'float' }
];

const TypeExercisePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-6 flex flex-col items-center justify-center">
      <ExerciseNavigation />
      <TypeExercise
        exercises={typeExercisesData}
      />
    </div>
  );
};

export default TypeExercisePage;