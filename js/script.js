console.log('JS OK')
// INITIAL VARIABLES
// Prendiamo l'elemento button
const button = document.getElementById('button')

// Prendiamo l'elemento input
const input = document.getElementById('kilometers')

// Prendiamo l'elemento select
const select = document.getElementById('età')

// Prendiamo l'elemento paragraph
const paragraph = document.getElementById('paragraph');

// Iniziamo a creare il messaggio
const message=('Il prezzo del biglietto è : ')

// Prezzo al chilometro
const kilometersPrice = 0.21

// Calcoliamo il prezzo base
const basePrice = kilometersPrice * input.value

// Calcoliamo il prezzo del biglietto per i minorenni//
const ticketPriceMinors = basePrice - (basePrice / 100 * 20);

// Calcoliamo il prezzo del biglietto per gli over 65//
const ticketPriceOver65= basePrice - (basePrice / 100 * 40);


//MAIN LOGICS
button.addEventListener('click', function(){
 console.log('kilometri percorsi',parseInt(input.value))
 console.log('età', select.value)
 console.log('Prezzo biglietto', basePrice)
 console.log('Prezzo biglietto minorenni', ticketPriceMinors.toFixed(2))
 console.log('Prezzo biglietto over65', ticketPriceOver65.toFixed(2))

    if(select.value == 'Minorenne'){
        paragraph.innerText = `${message} ${ticketPriceMinors.toFixed(2)}€`
        console.log(paragraph)
    }
    else if(select.value == 'Over 65'){
        paragraph.innerText = `${message} ${ticketPriceOver65.toFixed(2)}€`
        console.log(paragraph)
    }
    else{
        paragraph.innerText = `${message} + ${basePrice}`
        console.log(paragraph)
    }
});


