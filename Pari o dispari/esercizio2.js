

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. */

let scegliPariDispari = prompt("scegli pari o dispari");
let numeroUtente =parseInt (prompt("scegli un numero da 1 a 5"));

console.log(`Hai scelto:${scegliPariDispari}`);
console.log(`numero da te scelto:${numeroUtente}`);

/* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). */

function generaNumeroRandom(min, max){

    const newRandomNum = Math.floor(Math.random() * (max - min) + min);
    return newRandomNum
}

let numeroRandom = generaNumeroRandom (1, 5);
console.log(`numero scelto dal computer:${numeroRandom}`); 



/* Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) */

function sommaElementi(elemento1, elemento2){

    let somma = elemento1 + elemento2;
    

    if (somma % 2 ===0) {
        somma = "pari";
    }

    else{
        somma = "dispari";
    }

    return somma;
}

/* Dichiariamo  chi ha vinto. */

let pariDispari = sommaElementi (numeroUtente, numeroRandom);
console.log(`risultato somma = ${pariDispari}`); 

if (pariDispari === scegliPariDispari) {
    let risultato = "Hai vinto!";
    console.log(risultato);
}
else {
    let risultato = "Hai perso!";
    console.log(risultato);
}