console.log('JS OK')
// INITIAL VARIABLES

// Form ELEMENTS
const kmsField = document.getElementById('kms')
console.log(kmsField)
const ageField = document.getElementById('age')
console.log(ageField)
const nameField = document.getElementById('name');
console.log(nameField)

// / Prendiamo i Buttons
const confirmButton = document.getElementById('confirm-button')
console.log(confirmButton)
const resetButton = document.getElementById('reset-button')
console.log(resetButton)

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
let rateName = 'Tariffa Ordinaria'

//EVENT LISTNER
confirmButton.addEventListener('click', function(){
    //RECUPERO I VALORI DAL FORM
    const nameValue= nameField.value.trim();
    const kmsValue = parseInt(kmsField.value);
    const ageValue = ageField.value;
})


