//1
let fruits : string[] = ["apple", "banana", "orange"]
fruits.push("lemon")
console.log("Нэмсэн жимс",fruits[fruits.length -1]);
console.log("Нэмсэний дараах массив", fruits);

//2
let removedFruit = fruits.pop();
console.log("Устгасан жимс", removedFruit);
console.log("Устгасаны дараах массив", fruits);

//3
let longFruit = fruits.filter(fruits => fruits.length > 5);
console.log("5-с дээш үсэгтэй жимсүүд - ", longFruit)
