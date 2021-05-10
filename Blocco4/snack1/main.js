/* 
 * 1A:
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla */
Peso = 10
var palla = {
    nome: "palla",
    peso: 10,
}

/* 
*1B
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla. 
*/
palla.peso = parseInt(prompt("Cambia il peso di 'palla'"))
console.log(palla);