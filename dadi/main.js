/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo. */

/* genera un numero random da 1 a 6 */

let firstUser = prompt("inserisci il nome del primo giocatore")
let lastName = prompt("inserisci il nome del secondo giocatore")
let punteggioFirstUser = Math.floor(Math.random() * 6)+1;
console.log(punteggioFirstUser);

alert(`${firstUser} Ha realizzato ${punteggioFirstUser} punti`)
let punteggioSfidante = Math.floor(Math.random() *6)+1;
console.log(punteggioSfidante);

alert (`${lastName} ha realizzato ${punteggioSfidante} punti`);


if(punteggioFirstUser > punteggioSfidante){
    alert(`HA VINTO ${firstUser}`)
    console.log(`HA VINTO ${firstUser}`);
    
    
    
}else if(punteggioFirstUser == punteggioSfidante){
    alert (`NON HA VINTO NESSUNO`)
    console.log(`NESSUN VINCITORE`);
    
}else{
    alert(`HA VINTO ${lastName}`)
    console.log(`HA VINTO ${lastName}`);
    
    
}








