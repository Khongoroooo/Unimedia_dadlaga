var people = [
    { name: "Khongoroo", age: 20, isStudent: true },
    { name: "Temuulen", age: 25, isStudent: false },
    { name: "Amay", age: 22, isStudent: true },
];
var isStudentfalse = people.filter(function (people) { return people.isStudent == true; });
console.log(isStudentfalse);
var peopleName = people.map(function (people) { return people.name; });
console.log(peopleName);
