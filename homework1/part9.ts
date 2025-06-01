// тооны квадрат буцаадаг суман функц
const square = (n: number): number => n * n;
console.log(square(2));

// ямар ч төрлийн массивын эхний элементийг буцаадаг function
function getFirstFruit<T>(arr: T[]): T {
  return arr[0];
}

const firstFruit = getFirstFruit(["apple", "banana"]);
console.log(firstFruit);  // "apple"
