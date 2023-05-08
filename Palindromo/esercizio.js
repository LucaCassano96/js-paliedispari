
/* Chiedere all’utente di inserire una parola */

let parolaUtente = prompt("Inserisci una parola");
console.log(parolaUtente);


/* Creare una funzione per capire se la parola inserita è palindroma */


function palindromo(parola){

    let reverseParola = parola.split('');
    let parolaDivisa = reverseParola.reverse();
    let parolaInvertita = parolaDivisa.join('');
    

    if (parola === parolaInvertita) {
        parolaInvertita = ("la parola è palindroma");
    }

    else{
        parolaInvertita = ("la parola non è palindroma");
    }

    return parolaInvertita;
}

let parolaPalindroma = palindromo (parolaUtente);
console.log(parolaPalindroma);

































