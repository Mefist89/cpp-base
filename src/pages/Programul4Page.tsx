import Programul4Exercise from '../components/exercises/Programul4Exercise';
import ProgramNavigation from '../components/ProgramNavigation';

const programul4Variants = [
  // Variant 1
  {
    exercises: [
      {
        title: 'Scrieți un program in c++ care citește de la tastatură n numere întregi și afișează pe ecran: suma numerelor pare și produsul numerelor impare.',
        inputExplanation: 'Programul citește de la tastatură numărul n și numerele introduse de la tastatura număre întregi.',
        outputExplanation: 'Programul va afișa pe ecran suma numerelor pare și produsul numerelor impare, separate prin câte un spațiu.',
        exampleInput: `5
2 1 3 4 5`,
        exampleOutput: '6 15',
        solution: `#include <iostream>
using namespace std;

int main()
{
    int n, x, i, s = 0, p = 1;
    cin>>n;
    
    for(i=0; i<n; i++){
        cin>>x;
        
        if( x % 2 == 0 ) s = s + x;
        if( x % 2 == 1 ) p = p * x;
    }
    
    cout<<s<<endl;
    cout<<p;

    return 0;
}`
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
        exampleInput: `5
2 1 3 4 5`,
        exampleOutput: '9 8',
        solution: `#include <iostream>
using namespace std;

int main()
{
    int n, x, i, s = 0, p = 1;
    cin>>n;
    
    for(i=0; i<n; i++){
        cin>>x;
        
        if( x % 2 == 1 ) s = s + x;
        if( x % 2 == 0 ) p = p * x;
    }
    
    cout<<s<<endl;
    cout<<p;

    return 0;
}`
      }
    ]
  }
];

const Programul4Page: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-red-50 to-white py-8 px-4">
      <ProgramNavigation />
      <Programul4Exercise variants={programul4Variants} />
    </div>
  );
};

export default Programul4Page;
