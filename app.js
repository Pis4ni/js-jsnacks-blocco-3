//!=========================================================================================================================
/* // chiedo all utente il primo numero
const min = parseInt(prompt('metti un numero'));
// chiedo all utente il secondo numero
const max = parseInt(prompt('meti un num')); 
//creo un numro casuale compreso tra i due numeri cheisti all utente
const random = 0;
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
    
} */

//!=========================================================================================================================

/* //chiedo all utente la prima parola
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
} */

//!=========================================================================================================================

/* //creo un array vuoto
let empty = []
// immagazino il totale
let total = 0
// FINCHÉ il totale della somma degli elementi é inferiore a 50
while (total<50) {
    //chiedo all utente un numero
    let number = parseInt(prompt('inserisci un numero'))
    total += number
    empty.push(number)

    console.log(number)
    console.log(total)
    console.log(empty)
}
 */


//!=========================================================================================================================
/* //creo un array vuoto
let empty = []
// immagazino il totale
let total = 0
// FINCHÉ il totale della somma degli elementi é inferiore a 50
while (total<50) {
    //chiedo all utente un numero
    let number = parseInt(prompt('inserisci un numero'))
    total += number
    empty.push(number)

    console.log(number)
    console.log(total)
    console.log(empty)
}


//calcolo la media dei numeri inseriti
let media = total / empty.length  
console.log(media) */

//!=========================================================================================================================

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] %2 !== 0 && numbers[i] < 7) {
        evenNumbers.push(numbers[i]) ;
    }
}

console.log(evenNumbers)
// dovrebbe restituire [1,3,5]	


