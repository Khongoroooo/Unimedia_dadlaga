type People = {
  name: string;
  age: number;
  isStudent: boolean;
};
const people: People[] = [
  { name: "Khongoroo", age: 20, isStudent: true },
  { name: "Temuulen", age: 25, isStudent: false },
  { name: "Amay", age: 22, isStudent: true },
];
//filter ашиглан оюутан хүмүүсийг гаргаж ирсэн
const isStudentfalse = people.filter((people) => people.isStudent == true);
console.log(isStudentfalse);

//map ашиглан массиваас зөвхөн нэрсийг гаргаж ирсэн 
const peopleName = people.map((people) => people.name);
console.log(peopleName);
