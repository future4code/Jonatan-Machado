//A -
let myString: string = 'Jonatan';
myString = 10; //da erro pois a variavel está tipada como number e não aceita tipos strings

//B -
let myNumber: number | string = 10;
myNumber = 'Jonatan';

//C
interface Person {
  name: string;
  age: number;
  favouriteColour: string;
}

const Human: Person = { name: 'Jonatan', age: 27, favouriteColour: 'red' };
const Human2: Person = { name: 'Pedro', age: 10, favouriteColour: 'Blue' };
const Human3: Person = { name: 'Paulo', age: 90, favouriteColour: 'Gray' };
