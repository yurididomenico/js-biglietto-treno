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

let nChilometri = 10;
console.log(nChilometri);

let etaPasseggero = 18;
console.log(etaPasseggero);

const prezzoBiglietto = parseFloat(0.21);
console.log(prezzoBiglietto);

let risultatoPrezzo = nChilometri * prezzoBiglietto;

document.getElementById('risultatoPrezzo').innerHTML = `Il prezzo è: ${risultatoPrezzo}`




























////////////////// FINE //////////////////