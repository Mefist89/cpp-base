import ExpressionValuesExercise from '../components/exercises/ExpressionValuesExercise';
import ExerciseNavigation from '../components/ExerciseNavigation';

const ExpressionValuesExercisePage = () => {
  const exercises = [
    { 
      id: 1, 
      instruction: 'if (c) cout<<d;\nelse cout<<a;',
      correctValue: '2.5',
      explanation: 'c=true (conditia este adevarata), deci se executa cout<<d, d=2.5'
    },
    { 
      id: 2, 
      instruction: 'cout<<pow(b,2);',
      correctValue: '25',
      explanation: 'pow(b,2) = pow(5,2) = 5^2 = 25'
    },
    { 
      id: 3, 
      instruction: 'cout<<sqrt(a);',
      correctValue: '3',
      explanation: 'sqrt(a) = sqrt(9) = 3'
    },
    { 
      id: 4, 
      instruction: 'if (a==b) cout<<d;\nelse cout<<a;',
      correctValue: '9',
      explanation: 'a=9, b=5, a!=b (conditia este falsa), deci se executa else: cout<<a, a=9'
    },
    { 
      id: 5, 
      instruction: 'pow(b,2) + sqrt(a) + 5 > 4;',
      correctValue: 'true',
      explanation: 'pow(5,2) + sqrt(9) + 5 = 25 + 3 + 5 = 33, 33>4 este true'
    },
    { 
      id: 6, 
      instruction: 'if (a!=b) cout<<d;\nelse cout<<a;',
      correctValue: '2.5',
      explanation: 'a=9, b=5, a!=b (conditia este adevarata), deci se executa cout<<d, d=2.5'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 p-6 flex flex-col items-center justify-center">
      <ExerciseNavigation />
      <ExpressionValuesExercise exercises={exercises} />
    </div>
  );
};

export default ExpressionValuesExercisePage;