/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

Sottoproblemi
{
    -n° km
    -età
    -costante prezzo 0.21 €/km
    -Minorenni
    {
        20% Sconto
    }
    -Maggiorenni
    {
        Nessuno sconto :'(
    }
    -Over 65
    {
        40% Sconto
    }
}
    
*/
let nChilometri = 100;
let etaPasseggero = 20;
let prezzoBiglietto = parseFloat(0.21) * nChilometri;
let sconto;
let prezzoTotale;

// let prezzoFinale = prezzo - sconto;
// console.log(prezzoFinale);

// ________________ IF Minorenne ________________
if(etaPasseggero < 18)
{
    sconto = prezzoBiglietto * 0.20;
    prezzoTotale = parseFloat(prezzoBiglietto - sconto).toFixed(2);
}


// ________________ IF Maggiorenne ________________
else if(etaPasseggero >= 65)
{
    sconto = prezzoBiglietto * 0.40;
    prezzoTotale = parseFloat(prezzoBiglietto - sconto).toFixed(2);
}

// ________________ IF Over65 ________________
else
{
    prezzoTotale = prezzoBiglietto;
}


document.getElementById('risultatoPrezzo').innerHTML = `Prezzo Totale: ${prezzoTotale}`;





























////////////////// FINE //////////////////