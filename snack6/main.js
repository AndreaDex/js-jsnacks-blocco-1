/* Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente */

var userNum = Number(prompt("Inserisci un numero da elevare")) +1;

for (var i = 1; i < userNum; i++){
   var n3 = Math.pow(i, 3)
   console.log(n3);

}
