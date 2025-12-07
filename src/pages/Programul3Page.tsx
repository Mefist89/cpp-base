import Programul3Exercise from '../components/exercises/Programul3Exercise';
import ProgramNavigation from '../components/ProgramNavigation';

const programul3Variants = [
  // Variant 1
  {
    exercises: [
      {
        title: 'Se citește de la tastatură un număr natural de 3 cifre. Să se afișeze pe ecran cea mai mare cifră a sa.',
        inputExplanation: 'Programul va citi de la tastatură un număr natural, de 3 cifre.',
        outputExplanation: 'Programul va afişa pe ecran cea mai mică cifră a numărului citit.',
        exampleInput: '187',
        exampleOutput: '1',
        solution: `#include <iostream>
using namespace std;

int main()
{
    int n, f, m, l;
    cin >> n;
    
    l = n % 10;         // ultima cifră
    m = n / 10 % 10;    // cifra din mijloc
    f = n / 100;        // prima cifră
    
    if(f<l && f<m) cout<<f;     // cel mai mic este f
    if(l<f && l<m) cout<<l;     // cel mai mic este l
    if(m<f && m<l) cout<<m;     // cel mai mic este m

    return 0;
}`
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
        exampleOutput: '8',
                solution: `#include <iostream>
using namespace std;

int main()
{
    int n, f, m, l;
    cin >> n;
    
    l = n % 10;         // ultima cifră
    m = n / 10 % 10;    // cifra din mijloc
    f = n / 100;        // prima cifră
    
    if(f>l && f>m) cout<<f;     // cel mai mare este f
    if(l>f && l>m) cout<<l;     // cel mai mare este l
    if(m>f && m>l) cout<<m;     // cel mai mare este m

    return 0;
}`
      }
    ]
  }
];

const Programul3Page: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-green-50 to-white py-8 px-4">
      <ProgramNavigation />
      <Programul3Exercise variants={programul3Variants} />
    </div>
  );
};

export default Programul3Page;
