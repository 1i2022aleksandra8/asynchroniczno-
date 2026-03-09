# Detonator Samoczyszczącego Wnętrza PętliCzasowej

## Cel
W interwale mozemy zabic interwal... we wneetrzu wlasnego interwalu! W 10 do dołu rzucasz --1 w zmiennej uzytkowej licznika. Gdy licznik rzuci w logicznym iF'sie rzetelnie wynik 0, nie zapodajesz bomby i liczysz na minusach. Zamiast tego zrzucasz wewnątrz interwalu twarde ClearInterval a na ekranie BOMBA BUM divo.

## Krótka teoria
> *Przydatne: Uchwyt `let bombaID` u samej góry pliku `let bombaID = setInterval(...)` dziala mimo ze zainicjalizowane w tym samym momencie w jego trzewiowach klamr ciala - silnik juz załapał ID wiecc spokojenie da obronic!*
>
> 💡 *Przydatne przypomnienia API:*  
> Pamiętaj, asynchroniczność nie lubi wrzucać zwrotów rzutnia bezpośrednie `let wynik = setTimeout()`. Aby zabić cykl, rzutujesz z uchwytu referncyjnego `clearInterval(uchwyt)`.  W blokach `try/catch` z użyciem `await` - await wyłapuje obiekty Resolvy, natomiast Catch łapie wyrzuty zza burt Rejecty z Obietnic. Wyprowadź cierpliwość by JS "nie przebiegł" wylądowań!

## Wymagania i Kryteria
1. Utworz opadający mechanizm po sek od 5 do 0. 
2. Wykarz logiki wybuchu na 0 wraz z przerwaniem silinkowych wyciekó ramów stoperem.

## Oczekiwany Wynik
Silnik wyrzuca prawidłowy wynik po rzekomym odczekaniu (nie natychmiastowym uśmiechu UI konsoli/elementu). W zadanaich z pętlami widoczne musi być zabicie pętli i brak zaśmiecenia zżerania ciągłego, z logami rzetelnie wyciąganymi pod opublikowaną zmienną referencyjną JS.
