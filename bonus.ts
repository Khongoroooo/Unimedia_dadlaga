//done == true тэй тэнцүү байгааг хэвлэж харуулах
type Todo = {
  todoname: string;
  done: boolean;
};

const todo: Todo[] = [
  { todoname: "Бие даалтаа хийх", done: false },
  { todoname: "Ном унших", done: true },
  { todoname: "Гэр цэвэрлэх", done: true },
  { todoname: "Дасгал хийх", done: false },
  { todoname: "Хичээл давтах", done: true },
];

const donetrue = todo.filter((todo) => todo.done == true);
console.log(donetrue);

//
function countVowels(str: string): number {
  const vowels = "аэиоуөүАЭИОУҮӨ";
  let count = 0;

  for (let char of str) {
    if (vowels.indexOf(char) !== -1) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("хонгороо"));

