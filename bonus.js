var todo = [
    { todoname: "Бие даалтаа хийх", done: false },
    { todoname: "Ном унших", done: true },
    { todoname: "Гэр цэвэрлэх", done: true },
    { todoname: "Дасгал хийх", done: false },
    { todoname: "Хичээл давтах", done: true },
];
var donetrue = todo.filter(function (todo) { return todo.done == true; });
console.log(donetrue);
//
function countVowels(str) {
    var vowels = "аэиоуөүАЭИОУҮӨ";
    var count = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.indexOf(char) !== -1) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("хонгороо"));
