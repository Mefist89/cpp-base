import TruthTableExercise from '../components/exercises/TruthTableExercise';
import ExerciseNavigation from '../components/ExerciseNavigation';

const TruthTableExercisePage = () => {
  const generateRows = () => {
    const rows = [];
    for (let i = 0; i < 8; i++) {
      const x1 = (i & 4) >> 2;
      const x2 = (i & 2) >> 1;
      const x3 = i & 1;
      rows.push({ x1, x2, x3 });
    }
    return rows;
  };

  const calculateCorrectAnswers = (rows: { x1: number; x2: number; x3: number }[]) => {
    return rows.map(row => {
      const not_x3 = row.x3 === 0 ? 1 : 0;
      const x2_OR_notx3 = row.x2 || not_x3;
      const x1_AND_x2 = row.x1 && row.x2;
      const y = x2_OR_notx3 || x1_AND_x2;
      return { not_x3, x2_OR_notx3, x1_AND_x2, y };
    });
  };

  const truthTableVariants = [
    {
      generateRows,
      calculateCorrectAnswers,
      formula: 'y = NOT x₃ OR x₂, apoi OR cu (x₁ AND x₂)'
    },
    {
      generateRows,
      calculateCorrectAnswers,
      formula: 'y = (NOT x₃ AND x₂) OR (x₁ AND x₂)'
    },
    {
      generateRows,
      calculateCorrectAnswers,
      formula: 'y = x₂ OR (NOT x₃ AND NOT x₁)'
    },
    {
      generateRows,
      calculateCorrectAnswers,
      formula: 'y = (NOT x₃ OR x₂) AND (x₁ OR x₃)'
    },
    {
      generateRows,
      calculateCorrectAnswers,
      formula: 'y = NOT (x₃ AND NOT x₂) OR x₁'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6 flex flex-col items-center justify-center">
      <ExerciseNavigation />
      <TruthTableExercise variants={truthTableVariants as any} />
    </div>
  );
};

export default TruthTableExercisePage;