# JS SNACKS 3
By pisani fabio

## TRACCIA 1
Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.

### SVOLGIMENTO
- chiedo all utente il primo numero
- chiedo all utente il secondo numero
- creo un numro casuale compreso tra i due numeri cheisti all utente
- stampo il risultato a schermo


## TRACCIA 2
Dare la possibilità di inserire due parole. Verificare che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

### SVOLGIMENTO
- chiedo all utente la prima parola
- chiedo all utente la seconda parola
- verifico la lunghezza delle parole
- **SE** hanno la stessa lunghezza
    - le stampo entrambe
- **ALTRIMENTI** 
    -   stampo solo la piú lunga


## TRACCIA 3
Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

### SVOLGIMENTO
- creo un array vuoto
- chiedo all utente un numero
- **FINCHE**la somma del valore degli elementi dell array non supera 50
- chiedo all utente un numero
- **SE** il totale della somma degli elementi nell array é inferiore a 50
    - aggiungo il numero all array

## TRACCIA 4
Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.
Calcola la media dei numeri inseriti.
### SVOLGIMENTO
- creo un array vuoto
- chiedo all utente un numero
- **FINCHE**la somma del valore degli elementi dell array non supera 50
- chiedo all utente un numero
- **SE** il totale della somma degli elementi nell array é inferiore a 50
    - aggiungo il numero all array
- calcolo la media dei numeri inseriti


## TRACCIA 5

CORREGGI QUESTO CODICE:
--------------------------
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = "";
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
    }
    console.log(evenNumbers);

    // dovrebbe restituire [1,3,5]	
--------------------------