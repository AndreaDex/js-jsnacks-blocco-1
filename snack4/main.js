//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
var nomiPartecipanti = ["Giacomo", "Francesco", "Michele", "Marco","Alessandro"];


//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var nomeDaVerificare = prompt("Per favore inserisci il tuo nome");
var nomeVerificato = false

for (var i = 0; i < nomiPartecipanti.length; i++){
    if (nomeDaVerificare === nomiPartecipanti[i].toLowerCase()){
        nomeVerificato = true
    }
}

if (nomeVerificato){
    document.write("Sei dentro amico")
}else {
    document.write("Magari sarà per la prossima volta")
}