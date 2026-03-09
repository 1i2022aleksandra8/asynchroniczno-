# Kreacja Mojej Własnej Oboętnicy Async

## Cel
Chcemy przestac ladowac asynch w function - ładujemy go wg standaru. Zwroc w zmiennej np testowej instncje od obiektu (klasycznej matki JS) via `new Promise((resolve,reject)=>{{}})` a tam schowaj asynchro opóźnienie i pod nim walnij np resolve(`Poczta przyjezdzila w 2030r`).

## Krótka teoria
> *Przydatne: Obietnice powalają nowicjuszy strukturą. Wrzuc asyncha timeout np 1000ms a na srodku zamiast konsollogów i alertow (jak to brudny kod robil) użyj callbacków z deklaraci - czyli zrzutuj resolve(dane). Zrzutujesz zlapana poczte The-nem*
>
> 💡 *Przydatne przypomnienia API:*  
> Pamiętaj, asynchroniczność nie lubi wrzucać zwrotów rzutnia bezpośrednie `let wynik = setTimeout()`. Aby zabić cykl, rzutujesz z uchwytu referncyjnego `clearInterval(uchwyt)`.  W blokach `try/catch` z użyciem `await` - await wyłapuje obiekty Resolvy, natomiast Catch łapie wyrzuty zza burt Rejecty z Obietnic. Wyprowadź cierpliwość by JS "nie przebiegł" wylądowań!

## Wymagania i Kryteria
1. Zamknij deklarację timeoutu we wnętrzu sztucznej Promises'ówki. 
2. Obierz o obrob z lapaniem na `then()` wyciagajac zawartosc poczty w klamarach konslolic dla alertow web!

## Oczekiwany Wynik
Silnik wyrzuca prawidłowy wynik po rzekomym odczekaniu (nie natychmiastowym uśmiechu UI konsoli/elementu). W zadanaich z pętlami widoczne musi być zabicie pętli i brak zaśmiecenia zżerania ciągłego, z logami rzetelnie wyciąganymi pod opublikowaną zmienną referencyjną JS.
