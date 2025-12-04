import TypeExercise from '../components/exercises/TypeExercise';

const typeExercisesData = [
  { id: 'a', value: '15.25', correctType: 'float' },
  { id: 'b', value: '260', correctType: 'int' },
  { id: 'c', value: '-2.01', correctType: 'float' },
  { id: 'd', value: 'true', correctType: 'bool' },
  { id: 'e', value: "'+'", correctType: 'char' },
  { id: 'f', value: '1.10', correctType: 'float' }
];

const TypeExercisePage = () => {
  return (
    <TypeExercise 
      exercises={typeExercisesData}
      nextExercisePath="/expressions"
      previousExercisePath="/"
    />
  );
};

export default TypeExercisePage;