// pari o dispari: scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari
// ESECUZIONE
const userNumber = parseInt(prompt("Dimmi un numero"));
console.log(userNumber); // --> 8

//              8
const userResult = isEvenOrOdd(userNumber); // ---> "pari"
console.log(userResult);
//
let userMessage = `Il tuo numero ${userNumber} è ${userResult}`;
// if (userResult === "pari") {
//     userMessage = `Il tuo numero ${userNumber} è pari`;
// } else {
//     userMessage = `Il tuo numero ${userNumber} è dispari`;
// }

alert(userMessage);

// FUNCTIONS
/**
 * Description: La funzione restituisce "pari" se numero è pari, "dispari" se numero è dispari
 * @param {number} numberToCheck il numero da controllare se pari o diapri
 * @returns {string} "pari" | "dispari"
 */
//                          8
function isEvenOrOdd(numberToCheck) {
    let result = "";
    if (numberToCheck % 2 === 0) {
        result = "pari"
    } else {
        result = "dispari";
    }
    return result;
}

// TEST
// console.log(isEvenOrOdd(6)); // "pari"