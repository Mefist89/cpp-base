import Programul3Exercise from '../components/exercises/Programul3Exercise';
import ExerciseNavigation from '../components/ExerciseNavigation';

const programul3Variants = [
  // Variant 1
  {
    exercises: [
      {
        title: 'Să se scrie un program care determină dacă un număr este pozitiv, negativ sau zero.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură un număr întreg.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran "POZITIV" dacă numărul este pozitiv, "NEGATIV" dacă este negativ, "ZERO" dacă este zero.',
        exampleInput: '-5',
        exampleOutput: 'NEGATIV'
      }
    ]
  },
  // Variant 2
  {
    exercises: [
      {
        title: 'Să se scrie un program care determină dacă un an este bisect.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură un an.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran "DA" dacă anul este bisect, "NU" dacă nu este. Un an este bisect dacă este divizibil cu 4, exceptând anii care sunt divizibili cu 100, dacă aceștia nu sunt și divizibili cu 400.',
        exampleInput: '2020',
        exampleOutput: 'DA'
      }
    ]
  },
  // Variant 3
  {
    exercises: [
      {
        title: 'Să se scrie un program care afișează maxima dintre trei numere.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură trei numere întregi.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran cel mai mare dintre cele trei numere.',
        exampleInput: '15\n8\n23',
        exampleOutput: '23'
      }
    ]
  },
  // Variant 4
  {
    exercises: [
      {
        title: 'Să se scrie un program care determină calificativul în funcție de notă.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură o notă (0-100).',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran: "INSUFICIENT" pentru note sub 50, "MEDIU" pentru 50-69, "BUN" pentru 70-89, "FOARTE BUN" pentru 90-100.',
        exampleInput: '85',
        exampleOutput: 'BUN'
      }
    ]
  },
  // Variant 5
  {
    exercises: [
      {
        title: 'Să se scrie un program care calculează preț final după reducere.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură prețul inițial și procentul de reducere.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran preț final după aplicarea reducerii.',
        exampleInput: '100\n20',
        exampleOutput: '80'
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
