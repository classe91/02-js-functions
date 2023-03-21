// Abbiamo 3 div
// Un div conterrà numeri pari, uno numeri dispari, un altro la somma dei numeri
// Chiediamo all'utente di inserire numeri finchè il numero è diverso da 0
// Stampiamo nel div dei numeri pari i numeri che sono pari,
// nel div dei numeri dispari quelli dispari
// e nel div della somma la somma dei numeri

// 1) creo un array vuoto
const listaNumeri = [];

let numeroInserito = 0;
let somma = 0;

do {

    const userNumber = prompt('Inserisci un numero');
    numeroInserito = parseInt(userNumber);

    if (numeroInserito != 0) {
        listaNumeri.push(numeroInserito);
        somma += numeroInserito;
    }


} while (numeroInserito != 0);

separazionePariDispari(listaNumeri);
printToDOM("sum", somma);

/**
 * separazionePariDispari
 * La funzione si occupa di separare in due gruppi (pari e dispari) un array di numeri
 * @param {array} arrayNumeri Un array di numeri interi
 */
function separazionePariDispari(arrayNumeri) {

    // creo un ciclo per iterare i singoli elementi dell'array
    for (let i = 0; i < arrayNumeri.length; i++) {

        const numero = arrayNumeri[i];

        // verifico quali numeri sono pari e quali sono dispari
        const numeroPari = isEven(numero);
        if (numeroPari === true) {
            // qui ho i numeri pari
            printToDOM("green", numero + "<br>");
        } else {
            // qui ho i numeri dispari
            printToDOM("red", numero + "<br>");
        }
    }
}

/**
 * printToDOM - stampo del testo in un elemento della pagina, selezionato tramite ID
 * @param {string} id ID di un elemento del DOM
 * @param {string} text stringa da stampare
 */
function printToDOM(id, text) {
    // recuperare elementi dal DOM tramite ID
    let content = document.getElementById(id).innerHTML;

    // inserire testo nell'elemento
    content += text;

    document.getElementById(id).innerHTML = content;
}

/**
 * isEven
 * @param {int} numero
 * @returns {boolean}
 */
function isEven(numero) {

    let result = false;
    if (numero % 2 === 0) {
        // restituisce true se il numero è pari
        result = true;
    }

    return result;
}