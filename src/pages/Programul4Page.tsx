import Programul4Exercise from '../components/exercises/Programul4Exercise';
import ExerciseNavigation from '../components/ExerciseNavigation';

const programul4Variants = [
  // Variant 1
  {
    exercises: [
      {
        title: 'Scrieți un program in c++ care citește de la tastatură n numere întregi și afișează pe ecran: suma numerelor pare și produsul numerelor impare.',
        inputExplanation: 'Programul citește de la tastatură numărul n și numerele introduse de la tastatura număre întregi.',
        outputExplanation: 'Programul va afișa pe ecran suma numerelor pare și produsul numerelor impare, separate prin câte un spațiu.',
        exampleInput: "5\n2 1 3 4 5",
        exampleOutput: '6 15'
      }
    ]
  },
  // Variant 2
  {
    exercises: [
      {
        title: 'Scrieți un program in c++ care citește de la tastatură n numere întregi și afișează pe ecran: suma numerelor pare și produsul numerelor impare.',
        inputExplanation: 'Programul citește de la tastatură numărul n și numerele introduse de la tastatura număre întregi.',
        outputExplanation: 'Programul va afișa pe ecran suma numerelor impare și produsul numerelor pare, separate prin câte un spațiu.',
        exampleInput: '5\n2 1 3 4 5',
        exampleOutput: '9 8'
      }
    ]
  }
];

const Programul4Page: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-red-50 to-white py-8 px-4">
      <ExerciseNavigation />
      <Programul4Exercise variants={programul4Variants} />
    </div>
  );
};

export default Programul4Page;
