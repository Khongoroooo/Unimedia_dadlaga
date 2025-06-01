type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  hobby?: string;
};

let person: Person = {
  name: "khongoroo",
  age: 25,
  isStudent: true,
};

console.log(person.name);

person.age = 24;
console.log(person.age);

person.hobby = "сагс тоглох";
console.log(person.hobby);

console.log(person);
