const min = prompt('metti un numero'); // chiedo all utente il primo numero
const max = prompt('meti un num'); // chiedo all utente il secondo numero
const random = Math.floor(Math.random() * (max - min)+ min );//creo un numro casuale compreso tra i due numeri cheisti all utente
console.log(random);