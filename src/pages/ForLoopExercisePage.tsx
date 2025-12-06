import ForLoopExercise from '../components/exercises/ForLoopExercise';
import ExerciseNavigation from '../components/ExerciseNavigation';

const ForLoopExercisePage = () => {
  const forLoopVariants = [
    {
      loopExercises: [
        {
          id: 1,
          code: "for (i = 0; i <= 5; i++) cout<< '*';",
          correctAnswer: 6,
          explanation: "i merge de la 0 la 5 (inclusiv): 0,1,2,3,4,5 = 6 iterații"
        },
        {
          id: 2,
          code: "for (i = m; i <= n; i++) cout<< '*';",
          correctAnswer: -1,
          explanation: "m=5, n=3. Condiția 5<=3 este falsă de la început = 0 iterații"
        },
        {
          id: 3,
          code: "for (i = n; i <= m; i++) cout<< '*';",
          correctAnswer: 3,
          explanation: "n=3, m=5. i merge de la 3 la 5: 3,4,5 = 3 iterații"
        },
        {
          id: 4,
          code: "for (i = n; i <= 9; i++) cout<< '*';",
          correctAnswer: 7,
          explanation: "n=3. i merge de la 3 la 9: 3,4,5,6,7,8,9 = 7 iterații"
        },
        {
          id: 5,
          code: "for (i = m; i > 9; i--) cout<< '*';",
          correctAnswer: 0,
          explanation: "m=5. Condiția 5>9 este falsă de la început = 0 iterații"
        }
      ],
      typeOptions: ['float', 'char', 'bool'],
      correctType: 'char'
    },
    {
      loopExercises: [
        {
          id: 1,
          code: "for (i = 1; i <= 4; i++) cout<< '*';",
          correctAnswer: 4,
          explanation: "i merge de la 1 la 4: 1,2,3,4 = 4 iterații"
        },
        {
          id: 2,
          code: "for (i = 10; i <= 10; i++) cout<< '*';",
          correctAnswer: 1,
          explanation: "i = 10, condiția 10<=10 este adevărată = 1 iterație"
        },
        {
          id: 3,
          code: "for (i = 5; i > 5; i++) cout<< '*';",
          correctAnswer: 0,
          explanation: "Condiția 5>5 este falsă = 0 iterații"
        },
        {
          id: 4,
          code: "for (i = 10; i > 5; i--) cout<< '*';",
          correctAnswer: 5,
          explanation: "i merge de la 10 la 6: 10,9,8,7,6 = 5 iterații"
        },
        {
          id: 5,
          code: "for (i = 2; i <= 6; i++) cout<< '*';",
          correctAnswer: 5,
          explanation: "i merge de la 2 la 6: 2,3,4,5,6 = 5 iterații"
        }
      ],
      typeOptions: ['int', 'double', 'char'],
      correctType: 'int'
    },
    {
      loopExercises: [
        {
          id: 1,
          code: "for (i = 3; i <= 7; i++) cout<< '*';",
          correctAnswer: 5,
          explanation: "i merge de la 3 la 7: 3,4,5,6,7 = 5 iterații"
        },
        {
          id: 2,
          code: "for (i = 1; i > 10; i++) cout<< '*';",
          correctAnswer: 0,
          explanation: "Condiția 1>10 este falsă = 0 iterații"
        },
        {
          id: 3,
          code: "for (i = 15; i > 10; i--) cout<< '*';",
          correctAnswer: 5,
          explanation: "i merge de la 15 la 11: 15,14,13,12,11 = 5 iterații"
        },
        {
          id: 4,
          code: "for (i = 0; i <= 0; i++) cout<< '*';",
          correctAnswer: 1,
          explanation: "i = 0, condiția 0<=0 este adevărată = 1 iterație"
        },
        {
          id: 5,
          code: "for (i = 8; i >= 4; i--) cout<< '*';",
          correctAnswer: 5,
          explanation: "i merge de la 8 la 4: 8,7,6,5,4 = 5 iterații"
        }
      ],
      typeOptions: ['bool', 'float', 'int'],
      correctType: 'float'
    },
    {
      loopExercises: [
        {
          id: 1,
          code: "for (i = 0; i < 5; i++) cout<< '*';",
          correctAnswer: 5,
          explanation: "i merge de la 0 la 4 (< înseamnă strict mai mic): 0,1,2,3,4 = 5 iterații"
        },
        {
          id: 2,
          code: "for (i = 5; i > 0; i--) cout<< '*';",
          correctAnswer: 5,
          explanation: "i merge de la 5 la 1: 5,4,3,2,1 = 5 iterații"
        },
        {
          id: 3,
          code: "for (i = 0; i >= 10; i++) cout<< '*';",
          correctAnswer: 0,
          explanation: "Condiția 0>=10 este falsă = 0 iterații"
        },
        {
          id: 4,
          code: "for (i = 100; i != 95; i--) cout<< '*';",
          correctAnswer: 5,
          explanation: "i merge de la 100 la 96: 100,99,98,97,96 = 5 iterații"
        },
        {
          id: 5,
          code: "for (i = 7; i < 7; i++) cout<< '*';",
          correctAnswer: 0,
          explanation: "Condiția 7<7 este falsă = 0 iterații"
        }
      ],
      typeOptions: ['char', 'int', 'double'],
      correctType: 'int'
    },
    {
      loopExercises: [
        {
          id: 1,
          code: "for (i = 1; i <= 10; i++) cout<< '*';",
          correctAnswer: 10,
          explanation: "i merge de la 1 la 10: = 10 iterații"
        },
        {
          id: 2,
          code: "for (i = 20; i >= 15; i--) cout<< '*';",
          correctAnswer: 6,
          explanation: "i merge de la 20 la 15: 20,19,18,17,16,15 = 6 iterații"
        },
        {
          id: 3,
          code: "for (i = 5; i <= 3; i++) cout<< '*';",
          correctAnswer: 0,
          explanation: "Condiția 5<=3 este falsă = 0 iterații"
        },
        {
          id: 4,
          code: "for (i = 0; i < 100; i += 10) cout<< '*';",
          correctAnswer: 10,
          explanation: "i merge prin: 0,10,20,30,40,50,60,70,80,90 = 10 iterații"
        },
        {
          id: 5,
          code: "for (i = 50; i > 45; i--) cout<< '*';",
          correctAnswer: 5,
          explanation: "i merge de la 50 la 46: 50,49,48,47,46 = 5 iterații"
        }
      ],
      typeOptions: ['double', 'char', 'int'],
      correctType: 'char'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-6 flex flex-col items-center justify-center">
      <ExerciseNavigation />
      <ForLoopExercise variants={forLoopVariants as any} />
    </div>
  );
};

export default ForLoopExercisePage;