const array: string[] = ['1', '.', '5', '3', '2', '1'];


let stringNumber: string = '';
for (let i = 0; i < array.length; i++) {
    stringNumber += array[i];
}

const number: number = parseFloat(stringNumber);
console.log(array.length + 1);
console.log(array);
console.log(stringNumber, "stringNumber")
console.log(number, "number");