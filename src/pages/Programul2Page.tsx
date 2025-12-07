import Programul2Exercise from '../components/exercises/Programul2Exercise';
import ProgramNavigation from '../components/ProgramNavigation';

const programul2Variants = [
  // Variant 1
  {
    exercises: [
      {
        title: ' Se dau 3 numere naturale a, b și c. Se dă un număr natural n de trei cifre. Scrieți un program care determină dacă cifra zecilor a numărului n este egală cu suma cifrelor sutelor și unităților.',
        inputExplanation: 'De la tastatură se citește un număr întreg n',
        outputExplanation: 'La ecran se afișează cuvântul DA dacă cifra zecilor a numărului n este egală cu suma cifrelor sutelor și unităților, sau se afișează cuvântul NU – în caz contrar.',
        exampleInput: '238',
        exampleOutput: 'NU'
      }
    ]
  },
  // Variant 2
  {
    exercises: [
      {
        title: ' Se dau 3 numere naturale a, b și c. Se dă un număr natural n de trei cifre. Scrieți un program care determină dacă cifra zecilor a numărului n este egală cu suma cifrelor sutelor și unităților.',
        inputExplanation: 'De la tastatură se citește un număr întreg n',
        outputExplanation: 'La ecran se afișează cuvântul DA dacă cifra zecilor a numărului n este egală cu suma cifrelor sutelor și unităților, sau se afișează cuvântul NU – în caz contrar.',
        exampleInput: '132',
        exampleOutput: 'DA'
      }
    ]
  }
];

const Programul2Page: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <ProgramNavigation />
      <Programul2Exercise variants={programul2Variants} />
    </div>
  );
};

export default Programul2Page;
