//Il software deve chiedere per 10 volte all’utente di inserire un numero.
var somma = 0;

for (var i = 0; i < 10; i++ ){
    var askedNumbers = Number(prompt("inserisci un numero"));
    console.log(askedNumbers);
    somma += askedNumbers
}

console.log(somma);


//Il programma stampa la somma di tutti i numeri inseriti.