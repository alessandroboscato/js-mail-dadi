
// Mail
// Chiedi all’utente la sua email
var email_utente = prompt("Inserisci la tua mail");
// controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato sull'esito del controllo.

var listaMail = ["alessandro.boscato@gmail.com", "mario.rossi@gmail.com", "virginia.raggi@yahoo.it", "carlo.santana@hotmail.it", "pincopallo@outlook.it"];

// Bisogna salvare l'informazione che la mail è stata trovata, altrimenti il ciclo for continua a girare

var mail_trovata = false;
for (var i = 0; i < listaMail.length; i++) {
  if (email_utente == listaMail[i]) {
    mail_trovata = true;
  }
}

if (mail_trovata == false) {
  alert("La mail inserita non è presente nel database.");
}

// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer

var genera = document.getElementById("genera");
genera.addEventListener("click",
function() {

var numeroG1 = Math.floor(Math.random() * 6 + 1);
var numeroCPU = Math.floor(Math.random() * 6 + 1);

// Stabilire il vincitore, in base a chi fa il punteggio più alto
if (numeroG1 > numeroCPU) {
  document.getElementById("risultato").innerHTML = "Complimenti! Hai vinto!";
} else if (numeroG1 < numeroCPU) {
  document.getElementById("risultato").innerHTML = "Mi dispiace, hai perso. Ritenta la fortuna.";
} else {
  document.getElementById("risultato").innerHTML = "Pari!";
}

}
)

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
