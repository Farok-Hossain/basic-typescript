let myName: string = "Farok Hossain";
let age: number;
age = 25;
let RussiaIsPowerful: boolean = true;

let studentId: number | string = 25654;
studentId = "web-4:25654";

// create type
type StringOrNumber = number | string;
let studentId2: StringOrNumber = 24562;
studentId2 = "web-4:24562";

let person: { name: string; age: number; hobby: string } = {
  name: "Farok Hossain",
  age: 25,
  hobby: "watching movie",
};

type personType = { name: string; age: number };

let person2: personType = {
  name: "farok hossain",
  age: 25,
};

let person3: personType = {
  name: "AFS",
  age: 26,
};

interface Person {
  name: string;
  age: number;
  hobby?: string; // hobby is optional
}

let person4: Person = {
  name: "farok",
  age: 24,
  hobby: "sleeping",
};

let person5: Person = {
  name: "hossain",
  age: 23,
};

// Array

const numbers: number[] = [42, 54, 2, 1, 25, 26, 415, 45];
const numbers2: (number | string | boolean)[] = [
  41,
  25,
  12,
  15,
  35,
  "bangladesh",
  true,
];
const persons: Person[] = [
  {
    name: "farok",
    age: 25,
    hobby: "watching movie",
  },
  {
    name: "Hossain",
    age: 25,
  },
  {
    name: "farok",
    age: 23,
  },
];

// functions

const greeting = (name: string): void => {
  console.log(`Hello ${name}`);
};

greeting("Farok Hossain");

const add = (a: number, b: number): number => {
  return a + b;
};
const result = add(11, 25);
console.log(result);

// const introduce1 = ({name, age} : Person) => {
// here is destructing... introduce1 & introduce both are same

// }

const introduce = (person: Person): void => {
  console.log(
    `Hello, my name is ${person.name}, and I'm ${person.age}! & my hobby is ${person.hobby}`
  );
};

introduce({
  name: "farok",
  age: 25,
  hobby: "watching movie",
});

type direction = "left" | "right" | "top" | "bottom";
let gameDirection: direction = "left";

const getArray = (arr: string[]): string[] => {
  return arr;
};

const myResult = getArray(["afs"]);
console.log(myResult);

// generics type
const getArray2 = <Type>(arr: Type[]): Type[] => {
  return arr;
};

getArray2<string>(["sdfsdfj"]);
getArray2<number>([12, 15, 245]);

// enum
enum week {
  Sat = "SAT",
  Sun = "SUN",
  Mon = "MON",
  Tue = "TUE",
  Wed = "WED",
  Thu = "THU",
  Fri = "FRI",
}
console.log(week.Sun);
