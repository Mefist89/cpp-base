import Programul1Exercise from '../components/exercises/Programul1Exercise';
import ExerciseNavigation from '../components/ExerciseNavigation';

const programul1Variants = [
  // Variant 1
  {
    exercises: [
      {
        title: 'Să se scrie un program care citește de la tastatură un număr natural cu exact trei cifre și determină produsul cifrelor sale.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură un număr natural cu exact trei cifre.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran produsul cifrelor numărului citit.',
        exampleInput: '752',
        exampleOutput: '70'
      }
    ]
  },
  // Variant 2
  {
    exercises: [
      {
        title: 'Să se scrie un program care citește de la tastatură un număr natural cu exact trei cifre și determină suma cifrelor sale.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură un număr natural cu exact trei cifre.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran suma cifrelor numărului citit.',
        exampleInput: '345',
        exampleOutput: '12'
      }
    ]
  },
  // Variant 3
  {
    exercises: [
      {
        title: 'Să se scrie un program care citește de la tastatură un număr natural cu exact trei cifre și afișează inversul acestuia.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură un număr natural cu exact trei cifre.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran inversul numărului citit.',
        exampleInput: '123',
        exampleOutput: '321'
      }
    ]
  },
  // Variant 4
  {
    exercises: [
      {
        title: 'Să se scrie un program care citește de la tastatură un număr natural cu exact trei cifre și determină cea mai mare cifră.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură un număr natural cu exact trei cifre.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran cea mai mare cifră din numărul citit.',
        exampleInput: '452',
        exampleOutput: '5'
      }
    ]
  },
  // Variant 5
  {
    exercises: [
      {
        title: 'Să se scrie un program care citește de la tastatură un număr natural cu exact trei cifre și determină cea mai mică cifră.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură un număr natural cu exact trei cifre.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran cea mai mică cifră din numărul citit.',
        exampleInput: '852',
        exampleOutput: '2'
      }
    ]
  }
];

const Programul1Page: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <ExerciseNavigation />
      <Programul1Exercise variants={programul1Variants} />
    </div>
  );
};

export default Programul1Page;