console.log('JS OK')
// INITIAL VARIABLES

// Form ELEMENTS
const kmsField = document.getElementById('kms')
const ageField = document.getElementById('age')
const nameField = document.getElementById('name');

// / Prendiamo i Buttons
const confirmButton = document.getElementById('confirm-button')
const resetButton = document.getElementById('reset-button')


// TICKET ELEMENTS
const ticketSection= document.getElementById('ticket-section')
const passengerElement= document.getElementById('passenger-name')
const rateElement= document.getElementById('rate')
const carElement= document.getElementById('car')
const pnrElement= document.getElementById('pnr')
const priceElement= document.getElementById('price')

//VARIABILI INIZIALI
const pricePerKms = 0.21
let rateName = 'Tariffa Ordinaria'

//EVENT LISTNER
confirmButton.addEventListener('click', function(){
    //RECUPERO I VALORI DAL FORM
    const nameValue = nameField.value.trim();
    const kmsValue = parseInt(kmsField.value);
    const ageValue = ageField.value;
    console.log(nameValue, kmsValue, ageValue)

    //CALCOLO IL PREZZO BASE
    let price = pricePerKms * kmsValue;

    //CALCOLO UN EVENTUALE SCONTO
     
    if(ageValue === 'minorenne'){
        rateName = 'Tariffa Under 18';
        price = price - ( price / 100 * 20)
    } else if(ageValue === 'Over 65'){
        rateName = 'Tariffa Senior';
        price = price - ( price / 100 * 40)

        console.log(price, rateName)
    }
})


