function przeliczaj() {
    var krok1;
    var krok2;
    var pln = 1.00;
    var eur = 4.55;
    var usd = 3.27;
    switch (przelicznik.co.value) {
        case "PLN":
            krok1 = przelicznik.ile.value * pln;
            break;
        case "EUR":
            krok1 = przelicznik.ile.value * eur;
            break;
        case "USD":
            krok1 = przelicznik.ile.value * usd;
            break;
        default:
            krok1 = "Error";
    }
    switch (przelicznik.naCo.value) {
        case "PLN":
            krok2 = krok1 / pln;
            break;
        case "EUR":
            krok2 = krok1 / eur;
            break;
        case "USD":
            krok2 = krok1 / usd;
            break;
        default:
            krok2 = "Error";
    }
    przelicznik.wynik.value = Math.round(krok2 * 100) / 100;
}