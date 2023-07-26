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



const w1 ='' 
const w2 ='' 
while (w1==Number) {
    //chiedo all utente la prima parola
    w1= prompt('prima parola')
}
while(w2==Number){
    //chiedo all utente la seconda parola
    w2= prompt('seconda parola')
}
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