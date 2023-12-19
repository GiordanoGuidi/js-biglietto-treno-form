console.log('JS OK')
// INITIAL VARIABLES
const button = document.getElementById('button')
const input = document.getElementById('kilometers')
const select = document.getElementById('età')
document.getElementById=('paragraph')

//MAIN LOGICS
button.addEventListener('click', function(){
 console.log('kilometri percorsi',parseInt(input.value))
 console.log('età', select.value)
 console.log('Prezzo biglietto', basePrice)
 console.log('Prezzo biglietto minorenni', ticketPriceMinors.toFixed(2))
 console.log('Prezzo biglietto over65', ticketPriceOver65.toFixed(2))
 if(select.value == 'Minorenne'){
        paragraph.innerText= `${message} ${ticketPriceMinors.toFixed(2)}€`
        console.log(paragraph)
    }
});

// Calcoliamo il prezzo del biglietto//
const kilometersPrice = 0.21
const basePrice = kilometersPrice * input.value

// Calcoliamo il prezzo del biglietto per i minorenni//
const ticketPriceMinors = basePrice - (basePrice / 100 * 20);

// Calcoliamo il prezzo del biglietto per gli over 65//
const ticketPriceOver65= basePrice - (basePrice / 100 * 40);

// Prendiamo l'elemento nell'html//
document.getElementById=('paragraph')

// Costruisco il messaggio passeggeri compresi tra i 18 e i 65 anni di età//
const message=('Il prezzo del biglietto è : ')
// paragraph.innerText= `${message} ${basePrice.toFixed(2)}€`
// Messaggio per passeggeri minorenni//
// if(select.value < 18){
//     paragraph.innerText= `${message} ${ticketPriceMinors.toFixed(2)}€`
//     console.log(paragraph)
// }
// Messaggio per passeggeri over 65//
// else if(select.value > 65){
//     paragraph.innerText= `${message} ${ticketPriceOver65.toFixed(2)}€`
//     console.log(paragraph)
// }
