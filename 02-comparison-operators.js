/* ===================================================================================================
 Ü1 | Gleichheitsoperatoren
--------------------------------------------------------------------------------------------------- */

// Prüfe ob die erreichten Punkte gleich den maximalen Punkten sind und speichere das Ergebnis in die Variable prüfungBestanden.
let erreichtePunkte = 15;
let maxPunkte = 15;

let prüfungBestanden;

// Prüfe ob der aktuelle User "James" ist und ob er online ist, speichere das Ergebnis in die Variable istJamesOnlineUndAktuellerUser.
let onlineStatus = true;

let istJamesOnline;

// Prüfe ob die Frucht "Apfel" ist und speichere das Ergebnis in die Variable istApfel.
let frucht = "Orange";

let istApfel;

/* ===================================================================================================
 Ü2 | Ungleichheitsoperatoren
--------------------------------------------------------------------------------------------------- */

// Schaue ob die Person NICHT "online" ist, verwende den Ungleichheitsoperator und speichere das Ergebnis in die Variable istAbgemeldet.
let userStatus = "abwesend";

let istAbgemeldet;

// Schaue ob der User nicht "Admin" ist, verwende den Ungleichheitsoperator und speichere das Ergebnis in der Variablen istKeinAdmin.
let userRolle = "Gast";

let istKeinAdmin;

// Prüfe ob das Glas nicht leer ist, verwende den Ungleichheitsoperator und speichere das Ergebnis in der Variablen istGlasNichtLeer.
let glasInhalt = "halbvoll";
let istGlasNichtLeer;

/* ===================================================================================================
  Ü3 | Größer- und Kleiner-Operatoren
--------------------------------------------------------------------------------------------------- */

// Prüfe ob genug Geld für ein Kaffe vorhanden ist und speichere das Ergebnis in die Variable kaffeeKauf.
let kaffeePreis = 2.5;
let geldImPortemonnaie = 1.5;

let kannKaffeeKaufen;

// Prüfe ob die Person alt genug ist um in den Club zu kommen und speichere das Ergebnis in die Variable istVolljährig.
let alter = 21;
let volljährig = 18;

let istVolljährig;

// Prüfe ob du genug Stühle oder gleich viele Stühle wie Personen hast und speichere das Ergebnis in die Variable stühleGenug.
let stühle = 5;
let personen = 10;

let genugStühle;

// Prüfe ob die Person genug Geld für ein Ticket hat und speichere das Ergebnis in die Variable istTicketKaufMöglich.
let ticketPreis = 120;

let sparKonto = 75;
let bargeld = 55;

let kannTicketKaufen;

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
checkResult(istJamesOnline, "James ist online: ", true);
checkResult(istApfel, "Frucht ist kein Apfel: ", false);

console.log("\n", "*** Ü2 | Ungleichheitsoperatoren ***", "\n");
checkResult(istAbgemeldet, "User ist abgemeldet: ", true);
checkResult(istKeinAdmin, "User ist kein Admin: ", true);
checkResult(istGlasNichtLeer, "Glas ist nicht leer: ", true);

console.log("\n", "*** Ü3 | Größer- und Kleiner-Operatoren ***", "\n");
checkResult(kannKaffeeKaufen, "Zu wenig Geld für Kaffee: ", false);
checkResult(istVolljährig, "Darf in den Club: ", true);
checkResult(genugStühle, "Es fehlen Stühle: ", false);
checkResult(
  kannTicketKaufen,
  "Du Person hat genug Geld für ein Ticket: ",
  true
);
