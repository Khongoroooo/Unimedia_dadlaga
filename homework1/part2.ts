//1
let data: unknown = 17;
if (typeof data === "string") {
  console.log(data, "-", "Энэ нь string төрөл мөн байна");
} else {
  console.log(data, "-", "Энэ нь string төрөл биш байна");
}

//2
let value: any;
value = "khongorzul";
console.log(value, typeof value);
value = 15;
console.log(value, typeof value);
value = true;
console.log(value, typeof value)
value = {name:"khongoroo", age:25}
console.log(value,typeof value)


//3
// function throwError(message: string): never {
//     throw new Error(message);
    
// }
// throwError("Энэ бол туршилтын алдаа");


//4
let data1: null = null;
console.log(data1, typeof data1)

let data2: undefined = undefined;
console.log(data2, typeof data2)
