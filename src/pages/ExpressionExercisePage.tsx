import ExpressionExercise from '../components/exercises/ExpressionExercise';

const expressionExercisesData = {
 'a+b': { type: 'int', value: 12 },
  'a+2*b': { type: 'int', value: 20 },
  'b/a+3.5': { type: 'float', value: 5.5 },
  'q!=z': { type: 'bool', value: false },
  'b%a': { type: 'int', value: 0 },
  'c+d': { type: 'float', value: 6.0 },
  'a%b': { type: 'int', value: 4 },
  'a==b': { type: 'bool', value: false }
};

const ExpressionExercisePage = () => {
  return (
    <ExpressionExercise 
      exercises={expressionExercisesData}
      nextExercisePath="/truth-tables"
      previousExercisePath="/types"
    />
  );
};

export default ExpressionExercisePage;