import Programul3Exercise from '../components/exercises/Programul3Exercise';
import ExerciseNavigation from '../components/ExerciseNavigation';

const programul3Variants = [
  // Variant 1
  {
    exercises: [
      {
        title: 'Se citește de la tastatură un număr natural de 3 cifre. Să se afișeze pe ecran cea mai mare cifră a sa.',
        inputExplanation: 'Programul va citi de la tastatură un număr natural, de 3 cifre.',
        outputExplanation: 'Programul va afişa pe ecran cea mai mică cifră a numărului citit.',
        exampleInput: '187',
        exampleOutput: '1'
      }
    ]
  },
  // Variant 2
  {
    exercises: [
      {
        title: 'Se citește de la tastatură un număr natural de 3 cifre. Să se afișeze pe ecran cea mai mare cifră a sa.',
        inputExplanation: 'Programul va citi de la tastatură un număr natural, de 3 cifre.',
        outputExplanation: 'Programul va afişa pe ecran cea mai mică cifră a numărului citit.',
        exampleInput: '187',
        exampleOutput: '8'
      }
    ]
  }
];

const Programul3Page: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-green-50 to-white py-8 px-4">
      <ExerciseNavigation />
      <Programul3Exercise variants={programul3Variants} />
    </div>
  );
};

export default Programul3Page;
