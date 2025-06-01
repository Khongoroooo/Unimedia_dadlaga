function greet(name: string): string {
  return `hello, ${name}`;
}

//2 toonii niilber
console.log(greet("khongoroo"));

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(2, 5));

//sumtai function ashiglah bogino bicheglel
const num = (num1: number): number => num1 * 2;
console.log(num(1));

//urt ni
const numm = (num1: number): number => {
  return num1 * 2;
};
console.log(numm(3));

//array aas tegsh toonuudiig gargah
function getnumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}
const numberee = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbere = getnumbers(numberee);
console.log(numbere);

//sumtai function
const getnumberss = (numberss: number[]): number[] =>
  numberss.filter((num) => num % 2 === 0);
const simple = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const last = getnumberss(simple);
console.log(last);
