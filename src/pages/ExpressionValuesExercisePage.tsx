import ExpressionValuesExercise from '../components/exercises/ExpressionValuesExercise';
import ExerciseNavigation from '../components/ExerciseNavigation';

interface Exercise {
  id: number;
  instruction: string;
  correctValue: string;
  explanation: string;
}

const ExpressionValuesExercisePage = () => {
  const expressionValuesVariants: Exercise[][] = [
    // Вариант 1
    [
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
    ],
    // Вариант 2
    [
      { 
        id: 1, 
        instruction: 'cout<<a+b;',
        correctValue: '14',
        explanation: 'a=9, b=5, a+b = 9+5 = 14'
      },
      { 
        id: 2, 
        instruction: 'if (!c) cout<<a;\nelse cout<<b;',
        correctValue: '5',
        explanation: 'c=true, !c=false, deci se executa else: cout<<b, b=5'
      },
      { 
        id: 3, 
        instruction: 'cout<<d*2;',
        correctValue: '5',
        explanation: 'd=2.5, d*2 = 2.5*2 = 5'
      },
      { 
        id: 4, 
        instruction: 'pow(a,2) - sqrt(b);',
        correctValue: '76.764...',
        explanation: 'pow(9,2) - sqrt(5) = 81 - 2.236... ≈ 78.764'
      },
      { 
        id: 5, 
        instruction: 'if (a>b) cout<<d;\nelse cout<<b;',
        correctValue: '2.5',
        explanation: 'a=9, b=5, a>b este true, deci cout<<d, d=2.5'
      },
      { 
        id: 6, 
        instruction: 'cout<<(int)d;',
        correctValue: '2',
        explanation: '(int)d converteste 2.5 la intreg, rezultat = 2'
      }
    ],
    // Вариант 3
    [
      { 
        id: 1, 
        instruction: 'cout<<a-b;',
        correctValue: '4',
        explanation: 'a=9, b=5, a-b = 9-5 = 4'
      },
      { 
        id: 2, 
        instruction: 'cout<<b*b;',
        correctValue: '25',
        explanation: 'b=5, b*b = 5*5 = 25'
      },
      { 
        id: 3, 
        instruction: 'if (d>2) cout<<a;\nelse cout<<d;',
        correctValue: '9',
        explanation: 'd=2.5, d>2 este true, deci cout<<a, a=9'
      },
      { 
        id: 4, 
        instruction: 'cout<<sqrt(a)+b;',
        correctValue: '8',
        explanation: 'sqrt(9) + 5 = 3 + 5 = 8'
      },
      { 
        id: 5, 
        instruction: 'if (a>=b) cout<<"DA";\nelse cout<<"NU";',
        correctValue: 'DA',
        explanation: 'a=9, b=5, a>=b este true, deci se afiseaza "DA"'
      },
      { 
        id: 6, 
        instruction: 'cout<<pow(2,3);',
        correctValue: '8',
        explanation: 'pow(2,3) = 2^3 = 8'
      }
    ],
    // Вариант 4
    [
      { 
        id: 1, 
        instruction: 'cout<<a*b;',
        correctValue: '45',
        explanation: 'a=9, b=5, a*b = 9*5 = 45'
      },
      { 
        id: 2, 
        instruction: 'if (b<a) cout<<1;\nelse cout<<0;',
        correctValue: '1',
        explanation: 'b=5, a=9, b<a este true, deci cout<<1'
      },
      { 
        id: 3, 
        instruction: 'cout<<d+d;',
        correctValue: '5',
        explanation: 'd=2.5, d+d = 2.5+2.5 = 5'
      },
      { 
        id: 4, 
        instruction: 'cout<<sqrt(a*b);',
        correctValue: '6.708...',
        explanation: 'sqrt(9*5) = sqrt(45) ≈ 6.708'
      },
      { 
        id: 5, 
        instruction: 'if (c && a>7) cout<<d;\nelse cout<<a;',
        correctValue: '2.5',
        explanation: 'c=true, a=9, a>7 este true, deci cout<<d, d=2.5'
      },
      { 
        id: 6, 
        instruction: 'cout<<a/b;',
        correctValue: '1.8',
        explanation: 'a=9, b=5, a/b = 9/5 = 1.8'
      }
    ],
    // Вариант 5
    [
      { 
        id: 1, 
        instruction: 'cout<<a%b;',
        correctValue: '4',
        explanation: 'a=9, b=5, a%b (rest) = 9%5 = 4'
      },
      { 
        id: 2, 
        instruction: 'if (c || !c) cout<<1;\nelse cout<<0;',
        correctValue: '1',
        explanation: 'c || !c este intotdeauna true (legea tertului exclus), deci cout<<1'
      },
      { 
        id: 3, 
        instruction: 'cout<<pow(d,2);',
        correctValue: '6.25',
        explanation: 'pow(2.5,2) = 2.5^2 = 6.25'
      },
      { 
        id: 4, 
        instruction: 'if (a==9) cout<<sqrt(a);\nelse cout<<b;',
        correctValue: '3',
        explanation: 'a=9, a==9 este true, deci cout<<sqrt(9) = 3'
      },
      { 
        id: 5, 
        instruction: 'cout<<(int)(d*10)/5;',
        correctValue: '5',
        explanation: '(int)(2.5*10)/5 = (int)(25)/5 = 25/5 = 5'
      },
      { 
        id: 6, 
        instruction: 'if (b!=a) cout<<pow(b,2);\nelse cout<<d;',
        correctValue: '25',
        explanation: 'b=5, a=9, b!=a este true, deci cout<<pow(5,2) = 25'
      }
    ]
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 p-6 flex flex-col items-center justify-center">
      <ExerciseNavigation />
      <ExpressionValuesExercise variants={expressionValuesVariants} />
    </div>
  );
};

export default ExpressionValuesExercisePage;