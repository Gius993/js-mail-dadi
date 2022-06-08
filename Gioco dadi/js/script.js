//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.


//numeri utente-pc
var numeroUtente = Math.floor(Math.random()*6) + 1;
var numeroPc = Math.floor(Math.random()*6) + 1;
//punteggio
if (numeroUtente > numeroPc){
	document.getElementById('estrazione').innerHTML = "Vinci";
}else if(numeroUtente < numeroPc){
	document.getElementById('estrazione').innerHTML = "Perdi";
}else if(numeroUtente = numeroPc){
	document.getElementById('estrazione').innerHTML = "Pareggio";
}