let list = ["spiderman@gmail.com", "capitanamerica@libero.it", "hulk@hotmail.com",  "ironman@gmail.com"]
let email = prompt("inserisci qui la tua email")
let mail
let mailPresent = list.includes(email);
if(mailPresent == true){
    alert("Puoi entrare")
}else{
    alert("Non puoi entrare")
}