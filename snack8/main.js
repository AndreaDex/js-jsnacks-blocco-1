/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero */

//var userNum = (prompt("inserisci un numero di 4 cifre"));
var userNum = "12345";
var spliNums = userNum.split("");
console.log(spliNums);
var sum = 0;

for (var i = 0; i < spliNums.length; i++){
    var elem = spliNums[i];
    sum += Number(elem);
}
console.log(sum)