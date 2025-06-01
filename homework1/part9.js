// тооны квадрат буцаадаг суман функц
var square = function (n) { return n * n; };
console.log(square(2));
// ямар ч төрлийн массивын эхний элементийг буцаадаг function
function getFirstFruit(arr) {
    return arr[0];
}
var firstFruit = getFirstFruit(["apple", "banana"]);
console.log(firstFruit); // "apple"
