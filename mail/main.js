/* Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

let list = ["spiderman@gmail.com", "capitanamerica@libero.it", "hulk@hotmail.com",  "ironman@gmail.com"]
let email = prompt("inserisci qui la tua email")
let mail
for(let i=0 ; i < list.length; i++){
    let listaMail = list[i];
    if(listaMail === email){
        mail =  true
    }
}
if(mail == true){
    alert("Puoi entrare");
    
} else {
    alert("non puoi entrare");
    
}
