import Programul1Exercise from '../components/exercises/Programul1Exercise';
import ProgramNavigation from '../components/ProgramNavigation';

const programul1Variants = [
  // Variant 1
  {
    exercises: [
      {
        title: 'Să se scrie un program care citește de la tastatură un număr natural cu exact trei cifre și determină produsul cifrelor sale.',
        inputExplanation: 'Date de intrare: Programul citește de la tastatură un număr natural cu exact trei cifre.',
        outputExplanation: 'Date de ieșire: Programul afișează pe ecran produsul cifrelor numărului citit.',
        exampleInput: '752',
        exampleOutput: '70',
        solution: `#include <iostream>
using namespace std;

int main()
{
    int n, f, m, l;
    cin >> n;
    
    l = n % 10;         // ultima cifră
    m = n / 10 % 10;    // cifra din mijloc
    f = n / 100;        // prima cifră
    
    cout << l * m * f;  // produsul cifrelor

    return 0;
}`
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
        exampleOutput: '12',
        solution: `#include <iostream>
using namespace std;

int main()
{
    int n, f, m, l;
    cin >> n;
    
    l = n % 10;         // ultima cifră
    m = n / 10 % 10;    // cifra din mijloc
    f = n / 100;        // prima cifră
    
    cout << l + m + f;  // suma cifrelor

    return 0;
}`
      }
    ]
  }
];

const Programul1Page: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <ProgramNavigation />
      <Programul1Exercise variants={programul1Variants} />
    </div>
  );
};

export default Programul1Page;