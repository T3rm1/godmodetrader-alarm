GodmodeTrader Kursalarm
=======================

![Bild](alarm.jpg)

Das Bookmarklet fügt nebem dem Wertpapiernamen ein Eingabefeld hinzu. Über den Button "Speichern" wird der Alarm aktiviert. Erreicht der Kurs den angegebenen Wert, erfolgt eine Benachrichtigung und ein kurzes akustisches Signal.

# Verwendung
1. Neues Lesezeichen anlegen. Am besten in die Symbolleiste.
2. Im Feld für die Adresse folgendes eintragen:

        javascript:
        var gmScriptLoader = document.createElement("script");
        gmScriptLoader.src = "https://raw.githubusercontent.com/T3rm1/godmodetrader-alarm/master/alarm.js";
        document.head.appendChild(gmScriptLoader);

3. Eine Seite mit Chart auf GodmodeTrader besuchen und das Lesezeichen anklicken. Bei erster Verwendung fragt Sie der Browser nach der Erlaubnis Benachrichtigungen anzuzeigen. Dies muss akzeptiert werden.

# Hinweise
Eine Benachrichtigung kann nur erfolgen, wenn die Seite im Vordergrund oder Hintergrund im Browser geöffnet bleibt.