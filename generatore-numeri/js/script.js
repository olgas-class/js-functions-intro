// Dato un'array vuoto, chiedere all'utente di inserire un nuovo numero finchè l'array ha 3 elementi.
// Nell'array non devono esserci duplicati.

// Chiedere all'utente un numero finché non ci sono 3 elemnti nell'array
    // Se il numero non sia presente nell'array
    //      pushare nell'array
    // Altrimenti richiedere il numero

const numbersArray = [];
while (numbersArray.length < 3) {
    const userNumber = parseInt(prompt("Dimmi un numero"));
    console.log(userNumber);
    // const isInArray = elementIsInArray(numbersArray, userNumber);
    if (!elementIsInArray(numbersArray, userNumber)) {
        numbersArray.push(userNumber);
    }
}

console.log(numbersArray);


// FUNCTIONS
/**
 * Description: Funzione che controlla se un elemento sia presente nell'array 
 * @param {array} Array nel quale cercare l'elemento
 * @param {number, string} element è l'elmento da cercare nell'array
 * @returns {boolean} valore true se è presente, false se non è presente
 */
function elementIsInArray(arrayToCheck, element) {
    let elementFound = false;
    for(let i = 0; i < arrayToCheck.length; i++) {
        if (element === arrayToCheck[i]) {
            elementFound = true;
        }
    }
    return elementFound;
}

// TEST
// const numbers = [23, 6, 89, 1, 5];
// console.log(elementIsInArray(numbers, 3)); // false