//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

//list mail
var btn = document.getElementById('btn');
var mailList = ["gionnilel@gmail.com", "tonyfontana@boolean.com", "silvioberignoli@yhaoo.it"];
var emailRisultato = document.getElementById('emailrisultato');
//false
btn.addEventListener("click",function () {
var emailInserita = document.getElementById('emailPrincipale').value;
var emailTrovata = false;
//true
for (var i = 0; i < mailList.length; i++) {
    if (emailInserita == mailList[i]) {
        emailTrovata = true;
    }
}
//stamp
if (emailTrovata == true) {
    emailRisultato.innerHTML = "La tua email è presente in elenco";
} else {
    emailRisultato.innerHTML = "La tua email non è presente in elenco";
}

});