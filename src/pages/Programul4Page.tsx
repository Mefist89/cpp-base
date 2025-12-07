import Programul4Exercise from '../components/exercises/Programul4Exercise';
import ExerciseNavigation from '../components/ExerciseNavigation';

const programul4Variants = [
  // Variant 1
  {
    exercises: [
      {
        title: 'Să se scrie un program care citește un vector de n numere și afișează suma acestora.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură n (numărul de elemente), apoi n numere.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran suma tuturor numerelor din vector.',
        exampleInput: '3\n5\n10\n15',
        exampleOutput: '30'
      }
    ]
  },
  // Variant 2
  {
    exercises: [
      {
        title: 'Să se scrie un program care găsește elementul maxim dintr-un vector.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură n (numărul de elemente), apoi n numere.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran cel mai mare element din vector.',
        exampleInput: '4\n12\n8\n25\n6',
        exampleOutput: '25'
      }
    ]
  },
  // Variant 3
  {
    exercises: [
      {
        title: 'Să se scrie un program care inversează un vector.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură n (numărul de elemente), apoi n numere.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran vectorul inversat.',
        exampleInput: '3\n1\n2\n3',
        exampleOutput: '3 2 1'
      }
    ]
  },
  // Variant 4
  {
    exercises: [
      {
        title: 'Să se scrie un program care numără câte numere pare sunt într-un vector.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură n (numărul de elemente), apoi n numere.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran câte numere pare sunt în vector.',
        exampleInput: '5\n2\n5\n4\n7\n8',
        exampleOutput: '3'
      }
    ]
  },
  // Variant 5
  {
    exercises: [
      {
        title: 'Să se scrie un program care calculează media aritmetică a numerelor dintr-un vector.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură n (numărul de elemente), apoi n numere.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran media aritmetică a numerelor.',
        exampleInput: '4\n10\n20\n30\n40',
        exampleOutput: '25'
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
