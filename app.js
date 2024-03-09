function CalcolaBiglietto() {
    //Recuperare i valori dagli input chilometri e eta//
    var chilometri = parseFloat(document.getElementById("validationCustom01").value);
    var eta = parseInt(document.getElementById("validationCustom02").value);


    // Calcola il prezzo per km //
    var prezzoAlKm = 0.21;

    //Calcolare il prezzo in base ai km //
    var prezzoTotale = chilometri * prezzoAlKm;

    // Applica sconti in base all'età //
    if (eta < 18) {
        // Sconto del 20% se sei minorenne //
        prezzoTotale *= 0.8;
    } else if (eta >= 65) {
        // Sconto  40% se sei over 65 //
        prezzoTotale *= 0.6;
    }

    var risultatoElement = document.getElementById("risultato");
    risultatoElement.innerHTML = "Il prezzo totale del viaggio è: " + prezzoTotale.toFixed(2) + " €";
    document.body.appendChild(risultatoElement);

}
