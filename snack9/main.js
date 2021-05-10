var numbers = [];
var inputNum ;
var sum = 0;
do {
    var inputNum = prompt("Inserisci un numero");
    numbers.push(inputNum)
    sum += inputNum
} while (sum <= 50)
console.log(sum);