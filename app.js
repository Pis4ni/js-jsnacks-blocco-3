// chiedo all utente il primo numero
const min = parseInt(prompt('metti un numero'));
// chiedo all utente il secondo numero
const max = parseInt(prompt('meti un num')); 
//creo un numro casuale compreso tra i due numeri cheisti all utente
const random = Math.floor(Math.random() * (max - min)+ min );
// stampo il risultato a schermo
console.log(random);


if (min>max) {
    //creo un numro casuale compreso tra i due numeri cheisti all utente
    const random = Math.floor(Math.random() * (max - min)+ min );
    // stampo il risultato a schermo
    console.log(random)

}else{
    //creo un numro casuale compreso tra i due numeri cheisti all utente
    const random = Math.floor(Math.random() * (min - max)+ max );
    // stampo il risultato a schermo
    console.log(random)
    
}

//chiedo all utente la prima parola
const w1= prompt('prima parola')
//chiedo all utente la seconda parola
const w2= prompt('seconda parola')
//verifico la lunghezza delle parole
//SE hanno la stessa lunghezza
if (w1.length==w2.length) {
    //le stampo entrambe
    console.log(w1,w2)
    //ALTRIMENTI
    //stampo solo la p[iu lunga
}else if (w1.length>w2.length) {
    console.log(w1)
}else{
    console.log(w2)
}


//creo un array vuoto
let empty = []
// immagazino il totale
let total = 
// FINCHÉ il totale della somma degli elementi é inferiore a 50
while (total<50) {
    //chiedo all utente un numero
    number = parseInt(prompt('inserisci un numero'))
    somma += number
    if(total<50){
        empty.push(number)
    }

}