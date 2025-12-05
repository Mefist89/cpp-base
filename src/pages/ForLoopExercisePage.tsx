import ForLoopExercise from '../components/exercises/ForLoopExercise';

const ForLoopExercisePage = () => {
  const loopExercises = [
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
  ];

  const typeOptions = ['float', 'char', 'bool'];
  const correctType = 'char';

  return (
    <ForLoopExercise 
      loopExercises={loopExercises} 
      typeOptions={typeOptions}
      correctType={correctType}
      previousExercisePath="/"
    />
  );
};

export default ForLoopExercisePage;