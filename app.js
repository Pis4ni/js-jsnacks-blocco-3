// chiedo all utente il primo numero
const min = prompt('metti un numero');
// chiedo all utente il secondo numero
const max = prompt('meti un num'); 
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