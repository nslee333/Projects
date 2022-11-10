var array = ['1', '.', '5', '3', '2', '1'];
var stringNumber = '';
for (var i = 0; i < array.length; i++) {
    stringNumber += array[i];
}
var number = parseInt(stringNumber, (array.length + 1));
console.log(array);
console.log(stringNumber, "stringNumber");
console.log(number, "number");
