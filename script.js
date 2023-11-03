const arrayTest = [5, 45, 8, 78, 6, 91, 7];
const arrayTestTwo = ["ciao", "come", "45", "stiamo", "gigi"];
console.log(arrayTest);
console.log(arrayTestTwo);

console.log(contaElementi(arrayTest));
console.log(stampa(arrayTest));
console.log(togliDallaCoda(arrayTest));
console.log(inserisciInCoda(arrayTest, 5));
console.log(togliDallaTesta(arrayTest));
console.log(inserisciInTesta(arrayTest, 78));
console.log(join(arrayTest, arrayTestTwo));
console.log(cerca(arrayTest, "ciao"));
console.log(cercaIndice(arrayTest, 45));
console.log(ordina(arrayTest));

// FUNCTION

function contaElementi (array) {
    const length = array.length;
    return length;
}

function stampa (array) {
    let string = "";
    for (let i = 0; i<array.length; i ++) {
        string += `${array[i]}, `
    }
    return string;
}

function togliDallaCoda (array) {
    const arrayMeno1 = [];
    for (let i = 0; i<array.length -1; i ++) {
        arrayMeno1.push(array[i]);
    }
    return arrayMeno1;
}

function inserisciInCoda (array, element) {
    const arrayCopy = [];
    for (let i = 0; i<array.length; i ++) {
        arrayCopy.push(array[i]);
    }
    arrayCopy.push(element);
    return arrayCopy;
}

function togliDallaTesta (array) {
    const arrayMenoTesta = [];
    for (let i = 1; i<array.length; i ++) {
        arrayMenoTesta.push(array[i]);
    }
    return arrayMenoTesta;
}

function inserisciInTesta (array, element) {
    const arrayPiuTesta = [];
    arrayPiuTesta.push(element);
    for (let i = 0; i<array.length; i ++) {
        arrayPiuTesta.push(array[i]);
    }
    return arrayPiuTesta;
}

function join (arrayOne, arrayTwo) {
    // const totalLength = arrayOne.length + arrayTwo.length;
    const arrayJoin = [];
    for (let i = 0; i<arrayOne.length; i ++) {
        arrayJoin.push(arrayOne[i]);
    }
    for (let i = 0; i<arrayTwo.length; i ++) {
        arrayJoin.push(arrayTwo[i]);
    }
    return arrayJoin;
}

function cerca (array, element) {
    let bool = false;
    for (let i = 0; i<array.length; i ++) {
        if (array[i] === element && bool === false) {bool = true;}
    }
    return bool;
}

function cercaIndice (array, element) {
    let bool = -1;
    for (let i = 0; i<array.length; i ++) {
        if (array[i] === element) {bool = i;}
    }
    return bool;
}

function ordina (array) {
    let elementMin = 0;
    let temp = 0;
    for (let i = 0; i<array.length -1; i ++) {
        elementMin = i;
        for (let j = i +1; j<array.length; j ++) {
            if (array[j] < array[i]) {
                elementMin = j;
            }
        }
        temp = array[elementMin];
        array[elementMin] = array[i];
        array[i] = temp;
    }
    return array;
}