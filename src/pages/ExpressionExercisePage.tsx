import ExpressionExercise from '../components/exercises/ExpressionExercise';
import ExerciseNavigation from '../components/ExerciseNavigation';

const expressionExercisesVariants = [
  // Variant 1
  {
    'a+b': { type: 'int', value: 12 },
    'a+2*b': { type: 'int', value: 20 },
    'b/a+3.5': { type: 'float', value: 5.5 },
    'q!=z': { type: 'bool', value: false },
    'b%a': { type: 'int', value: 0 },
    'c+d': { type: 'float', value: 6.0 },
    'a%b': { type: 'int', value: 4 },
    'a==b': { type: 'bool', value: false }
  },
  // Variant 2
  {
    'a*b': { type: 'int', value: 32 },
    'c-d': { type: 'float', value: 2.0 },
    'b-a': { type: 'int', value: 4 },
    'q==z': { type: 'bool', value: true },
    'a+c': { type: 'float', value: 8.0 },
    'd*2': { type: 'float', value: 4.0 },
    'b+b': { type: 'int', value: 16 },
    'c>d': { type: 'bool', value: true }
  },
  // Variant 3
  {
    'b-a': { type: 'int', value: 4 },
    'a*c': { type: 'float', value: 16.0 },
    'c/d': { type: 'float', value: 2.0 },
    'q!=z': { type: 'bool', value: false },
    'b+c': { type: 'float', value: 12.0 },
    'a-d': { type: 'float', value: 2.0 },
    'b*a': { type: 'int', value: 32 },
    'd<c': { type: 'bool', value: true }
  },
  // Variant 4
  {
    'a+b': { type: 'int', value: 12 },
    'b/a': { type: 'int', value: 2 },
    'c+d': { type: 'float', value: 6.0 },
    'a<=b': { type: 'bool', value: true },
    'b-c': { type: 'float', value: 4.0 },
    'd+a': { type: 'float', value: 6.0 },
    'a*a': { type: 'int', value: 16 },
    'q==z': { type: 'bool', value: true }
  },
  // Variant 5
  {
    'b+b': { type: 'int', value: 16 },
    'd*c': { type: 'float', value: 8.0 },
    'a+d': { type: 'float', value: 6.0 },
    'b>=a': { type: 'bool', value: true },
    'c-a': { type: 'float', value: 0.0 },
    'b/2': { type: 'int', value: 4 },
    'a+a': { type: 'int', value: 8 },
    'q!=z': { type: 'bool', value: false }
  }
];

const ExpressionExercisePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex flex-col items-center justify-center">
      <ExerciseNavigation />
      <ExpressionExercise
        variants={expressionExercisesVariants as any}
      />
    </div>
  );
};

export default ExpressionExercisePage;