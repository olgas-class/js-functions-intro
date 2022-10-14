// alert("Buongiorno Maria");
// // 100 righe di codice
//
// alert("Buongiorno Anna");
//
// // 200 righe di codice
// alert("Buongiorno Marco");

// DICHIARAZIONE DELLE FUNZIONI
// function sayHello(userName) {
//     alert(`Good morning ${userName}`);
// }
//
// // ESECUZIONE DEL CODICE
// const yourName = prompt("Come ti chiami?");
//
// sayHello(yourName);
//
// // altri righe di codice
//
// sayHello("Anna");
//
// sayHello("Marco");

// Creare una funzione che somma due numeri

let sum = sumTwoNumbers(2, 4); //---> 6 --> codice eseguito qui

console.log(sum, "fuori dalla funzione");

// FUNCTIONS
/**
 * Description Questa funzione somma due numeri
 * @param {number} firstNumber il primo numero da sommare
 * @param {number} secondNumber il secondo numero da sommare
 * @returns {number} ritorna un numero che rappresenta la somma di due numeri in ingresso
 */
function sumTwoNumbers(firstNumber, secondNumber) {
  const numbersSum = firstNumber + secondNumber;
  console.log(numbersSum, "nella funzione");
  return numbersSum;
}

