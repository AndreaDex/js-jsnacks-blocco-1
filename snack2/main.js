//L’utente inserisce due parole in successione, con due prompt.
var word1 = prompt("Scrivi una parola")
var word2 = prompt("Scrivi una seconda parola")

//Il software stampa prima la parola più corta, poi la parola più lunga.
if (word1.length > word2.length) {
    console.log(word1);
    console.log(word2);
} else if (word1.length < word2.length) {
    console.log(word2);
    console.log(word1);
} else {
    console.log("le due parole hanno la stessa lunghezza");
}