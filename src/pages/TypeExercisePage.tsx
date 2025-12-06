import TypeExercise from '../components/exercises/TypeExercise';
import ExerciseNavigation from '../components/ExerciseNavigation';

const typeExercisesVariants = [
  // Variant 1
  {
    exercises: [
      { id: 'a', value: '15.25', correctType: 'float' },
      { id: 'b', value: '260', correctType: 'int' },
      { id: 'c', value: '-2.01', correctType: 'float' },
      { id: 'd', value: 'true', correctType: 'bool' },
      { id: 'e', value: "'+'", correctType: 'char' },
      { id: 'f', value: '1.10', correctType: 'float' }
    ]
  },
  // Variant 2
  {
    exercises: [
      { id: 'a', value: '42', correctType: 'int' },
      { id: 'b', value: '3.14', correctType: 'float' },
      { id: 'c', value: '-17', correctType: 'int' },
      { id: 'd', value: 'false', correctType: 'bool' },
      { id: 'e', value: "'x'", correctType: 'char' },
      { id: 'f', value: '0.5', correctType: 'float' }
    ]
  },
  // Variant 3
  {
    exercises: [
      { id: 'a', value: '100', correctType: 'int' },
      { id: 'b', value: '-3.75', correctType: 'float' },
      { id: 'c', value: '999', correctType: 'int' },
      { id: 'd', value: 'true', correctType: 'bool' },
      { id: 'e', value: "'5'", correctType: 'char' },
      { id: 'f', value: '2.5', correctType: 'float' }
    ]
  },
  // Variant 4
  {
    exercises: [
      { id: 'a', value: '-50', correctType: 'int' },
      { id: 'b', value: '7.89', correctType: 'float' },
      { id: 'c', value: '0', correctType: 'int' },
      { id: 'd', value: 'false', correctType: 'bool' },
      { id: 'e', value: "'@'", correctType: 'char' },
      { id: 'f', value: '-1.5', correctType: 'float' }
    ]
  },
  // Variant 5
  {
    exercises: [
      { id: 'a', value: '2048', correctType: 'int' },
      { id: 'b', value: '1.23', correctType: 'float' },
      { id: 'c', value: '-999', correctType: 'int' },
      { id: 'd', value: 'true', correctType: 'bool' },
      { id: 'e', value: "'!'", correctType: 'char' },
      { id: 'f', value: '99.99', correctType: 'float' }
    ]
  }
];

const TypeExercisePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-6 flex flex-col items-center justify-center">
      <ExerciseNavigation />
      <TypeExercise
        variants={typeExercisesVariants}
      />
    </div>
  );
};

export default TypeExercisePage;