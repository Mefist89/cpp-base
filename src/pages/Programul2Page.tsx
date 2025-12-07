import Programul2Exercise from '../components/exercises/Programul2Exercise';
import ExerciseNavigation from '../components/ExerciseNavigation';

const programul2Variants = [
  // Variant 1
  {
    exercises: [
      {
        title: 'Să se scrie un program care calculează media aritmetică a trei numere.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură trei numere reale.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran media aritmetică a celor trei numere.',
        exampleInput: '10\n20\n30',
        exampleOutput: '20'
      }
    ]
  },
  // Variant 2
  {
    exercises: [
      {
        title: 'Să se scrie un program care determină dacă un număr este par sau impar.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură un număr întreg.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran "PAR" dacă numărul este par, "IMPAR" dacă este impar.',
        exampleInput: '7',
        exampleOutput: 'IMPAR'
      }
    ]
  },
  // Variant 3
  {
    exercises: [
      {
        title: 'Să se scrie un program care calculează aria unui dreptunghi.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură lungimea și lățimea unui dreptunghi.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran aria dreptunghiului.',
        exampleInput: '5\n4',
        exampleOutput: '20'
      }
    ]
  },
  // Variant 4
  {
    exercises: [
      {
        title: 'Să se scrie un program care determină cel mai mare dintre două numere.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură două numere întregi.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran cel mai mare dintre cele două numere.',
        exampleInput: '15\n8',
        exampleOutput: '15'
      }
    ]
  },
  // Variant 5
  {
    exercises: [
      {
        title: 'Să se scrie un program care convertește temperatura din grade Celsius în Fahrenheit.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură temperatura în grade Celsius.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran temperatura în grade Fahrenheit. Formula: F = C * 9/5 + 32',
        exampleInput: '0',
        exampleOutput: '32'
      }
    ]
  }
];

const Programul2Page: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <ExerciseNavigation />
      <Programul2Exercise variants={programul2Variants} />
    </div>
  );
};

export default Programul2Page;
