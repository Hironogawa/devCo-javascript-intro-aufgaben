/* ===================================================================================================
 Ü1 | Gleichheitsoperatoren
--------------------------------------------------------------------------------------------------- */
// Vergleiche zwei Werte miteinander und speichere das Ergebnis in einer Variablen

// Prüfe ob die erreichten Punkte gleich den maximalen Punkten sind
let erreichtePunkte = 15;
let maxPunkte = 15;

let prüfungBestanden;

// -------------------------------------------------------------------------------------------------
// Prüfe ob genug Geld für ein Kaffe vorhanden ist

let kaffeePreis = 2.5;
let geldImPortemonnaie = 1.5;

// Schreibe den Vergleichsoperator in die Variable kaffeeKauf um zu prüfen ob genug Geld für einen Kaffee vorhanden ist.
let kaffeeKauf;

/* ===================================================================================================
 Ü2 | Ungleichheitsoperatoren
--------------------------------------------------------------------------------------------------- */
// Vergleiche zwei Werte miteinander und speichere das Ergebnis in einer Variablen

// Schaue ob die person sich schon angemeldet hat

let onlineStatus = false;
let istOnline = true;

// Schreibe den Vergleichsoperator in die Variable istAngemeldet um zu prüfen ob die Person sich schon angemeldet hat.
let istAbgemeldet;

/* ===================================================================================================
  Ü3 | Größer- und Kleiner-Operatoren
--------------------------------------------------------------------------------------------------- */
// Vergleiche zwei Werte miteinander und speichere das Ergebnis in einer Variablen

// Prüfe ob die Person alt genug ist um in den Club zu kommen
let alter = 18;
let volljährig = 18;

// Schreibe den Vergleichsoperator in die Variable volljährigGleich um zu prüfen ob die Person volljährig ist.
let istVolljährig;

// ---------------------------------------------------------------------------------------------------
// Prüfe ob du genug Stühle für alle Personen hast
let stühle = 5;
let personen = 10;

// Schreibe den Vergleichsoperator in die Variable stühleGenug um zu prüfen ob genug Stühle für alle Personen vorhanden sind.
let genugStühle;

// -------------------------------------------------------------------------------------------------
// Prüfe ob die Person genug Geld für ein Ticket hat
let ticketPreis = 10;
let sparKonto = 15;

// Schreibe den Vergleichsoperator in die Variable ticketKauf um zu prüfen ob genug Geld für ein Ticket vorhanden ist.
let istTicketKaufMöglich;

/* ===================================================================================================
 Ü4 | Logische Operatoren und Rechenoperatoren
--------------------------------------------------------------------------------------------------- */

// Prüfe ob genug Akku vorhanden ist um ein Video zu schauen

let akkuLaptop = 10;
let akkuverbrauchVideoProMinute = 2;
let videoLängeInMinuten = 6;

// Berechne Akkuverbrauch pro Minute multipliziert mit der Videolänge
let videoAkkuVerbrauch;

// Prüfe nun ob der akkuLaptop grösser oder gleich dem videoAkkuVerbrauch ist
let genugAkku;

/* ===================================================================================================
END of working area, please write your code above this area to avoid potential conflicts
=================================================================================================== */

function checkResult(test, prefix, result) {
  if (test === result) {
    console.log(`✅ - ${prefix} Das Resultat ${test} ist korrekt`);
  } else {
    console.log(
      `❌ - ${prefix} Resultat ${test} ist falsch, erwartet war ${result}`
    );
  }
}

console.log("\n", "*** Ü1 | Gleichheitsoperatoren ***", "\n");
checkResult(prüfungBestanden, "Prüfung bestanden: ", true);
checkResult(kaffeeKauf, "KaffeeKauf möglich: ", false);
console.log("\n", "*** Ü2 | Ungleichheitsoperatoren ***", "\n");
checkResult(istAbgemeldet, "Ist abgemeldet: ", true);
checkResult(istVolljährig, "Darf in den Club: ", true);
console.log("\n", "*** Ü3 | Größer- und Kleiner-Operatoren ***", "\n");
checkResult(genugStühle, "Genug Stühle: ", false);
checkResult(istTicketKaufMöglich, "Ticketkauf möglich: ", true);
console.log(
  "\n",
  "*** Ü4 | Logische Operatoren und Rechenoperatoren ***",
  "\n"
);
checkResult(genugAkku, "Nicht genug Akku: ", false);
