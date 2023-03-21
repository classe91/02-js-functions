// scrivere una funzione che presi 2 numeri ne restituisca la somma

function somma(numero1, numero2) {
    return numero1 + numero2;
}

// console.log('somma', somma(1, 2));
// console.log('somma', somma(4, 5));

const sommaArrow = (numero1, numero2) => {
    return numero1 + numero2
};

// console.log('sommaArrow', sommaArrow(4, 5));
// console.log('sommaArrow', sommaArrow(7, 5));

document.querySelector('.cliccami').addEventListener('click', function () {

    console.log('click listener con funzione normale', this);

    const funzioneInnestata = () => {
        console.log('arrow function innestata', this)
    }
    funzioneInnestata();

});


document.querySelector('.cliccami').addEventListener('click', () => {
    console.log('click listener con arrow function', this);
});

function provaThis() {

    console.log(this);
}

provaThis();