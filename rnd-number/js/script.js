// Gioco di dadi. Generare un numero random da 1 a 6 per l'utente, generare un numero random per il computer e definire il vincitore.

const userNumber = generateRndNumber(1, 6); // --> 
console.log(userNumber);

const computerNumber = generateRndNumber(1, 6); // -->
console.log(computerNumber);

// Definire chi ha vinto
const resultMessage = defineWinner(userNumber, computerNumber);

console.log(resultMessage);


// FUNCTIONS
/**
 * Description: La funzione che genera un numero random in un rage di numeri min e max (tutti i due inclusi)
 * @param {number} min -> minimo numero che si possa generare
 * @param {number} max -> massimo numero che si possa generare
 * @returns {number} numero random generato
 */
function generateRndNumber(min, max) {
    const generatedNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return generatedNumber;
}

/**
 * Description: la funzione che compara i due numeri di giocatori e forma il messaggio del risultato
 * @param {number} userNum il numero casuale dell'utente
 * @param {number} compNum il numero casuale del computer
 * @returns {string} messaggio che definisce il vincitore 
 */
function defineWinner( userNum, compNum ) {
    let message = "";
    if (userNum > compNum) {
        message = "Congratulazione! Hai vinto";
    }  else if (userNum < compNum) {
        message = "Mi dispiace, ha vinto il computer";
    } else {
        message = "Pareggio";
    }

    console.log(userNum, compNum, message);

    return message;
}