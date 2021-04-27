//Crea un array vuoto.
var numeri = [];

/*Chiedi per 6 volte all’utente di inserire un numero 
se è dispari inseriscilo nell’array. */

for (var i = 0; i < 6; i++){
    var numeriUtente = Number(prompt("Inserisci un numero"));
    
    if (numeriUtente % 2 !==  0){
        numeri.push(numeriUtente)
    }
}
console.log(numeri);