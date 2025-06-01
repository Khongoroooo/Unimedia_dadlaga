function greet(name) {
    return "hello, ".concat(name);
}
//2 toonii niilber
console.log(greet("khongoroo"));
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 5));
//sumtai function ashiglah bogino bicheglel
var num = function (num1) { return num1 * 2; };
console.log(num(1));
//urt ni
var numm = function (num1) {
    return num1 * 2;
};
console.log(numm(3));
//array aas tegsh toonuudiig gargah
function getnumbers(numbers) {
    return numbers.filter(function (num) { return num % 2 === 0; });
}
var numberee = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numbere = getnumbers(numberee);
console.log(numbere);
//sumtai function
var getnumberss = function (numberss) {
    return numberss.filter(function (num) { return num % 2 === 0; });
};
var simple = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var last = getnumberss(simple);
console.log(last);
