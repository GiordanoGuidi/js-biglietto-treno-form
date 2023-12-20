console.log('JS OK')
// INITIAL VARIABLES

// Form ELEMENTS
const kmsField = document.getElementById('kms')
console.log(kms)
const ageFiled = document.getElementById('age')
console.log(age)
const nameField = document.getElementById('name');
console.log(userName)

// / Prendiamo i Buttons
const confirmButton = document.getElementById('confirm-button')
console.log('mi hai cliccato',confirmButton)
const resetButton = document.getElementById('reset-button')
console.log('mi hai cliccato',resetButton)

// Iniziamo a creare il messaggio
const message=('Il prezzo del biglietto è : ')
// console.log(message)


// TICKET ELEMENTS
const ticketSection= document.getElementById('ticket-section')
const passengerElement= document.getElementById('passenger-name')
const rateElement= document.getElementById('rate')
const carElement= document.getElementById('car')
const pnrElement= document.getElementById('pnr')
const priceElement= document.getElementById('price')

//VARIABILI INIZIALI
const kilometersPrice = 0.21
console.log(kilometersPrice)
let rateName = 'Tariffa Ordinaria'



// Calcoliamo il prezzo base
const basePrice = kilometersPrice * inputKilometers.value
console.log(basePrice)

// Calcoliamo il prezzo del biglietto per i minorenni//
const ticketPriceMinors = basePrice - (basePrice / 100 * 20);

// Calcoliamo il prezzo del biglietto per gli over 65//
const ticketPriceOver65= basePrice - (basePrice / 100 * 40);


//MAIN LOGICS
// generates.addEventListener('click', function(){
 
//  console.log('kilometri percorsi',parseInt(inputKilometers.value))
//  console.log('età', select.value)
//  console.log('Prezzo biglietto', basePrice)
//  console.log('Prezzo biglietto minorenni', ticketPriceMinors.toFixed(2))
//  console.log('Prezzo biglietto over65', ticketPriceOver65.toFixed(2))

//     if(select.value == 'Minorenne'){
//         result.innerText = `${message} ${ticketPriceMinors.toFixed(2)}€`
//         console.log(paragraph)
//     }
//     else if(select.value == 'Over 65'){
//         result.innerText = `${message} ${ticketPriceOver65.toFixed(2)}€`
//         console.log(paragraph)
//     }
//     else{
//         result.innerText = `${message} + ${basePrice}`
//         console.log(paragraph)
//     }
// });


