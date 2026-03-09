# Opóźnione Wyłanianie Danych z Timeout

## Cel
Gdy klikamy, pokazujemy styl loadera kręconego na kółeczku z CSS z HTML o klasie `loader`, a napis w wyniku informuje Użytkownika o odpytce serwerka. Po 2-3 sek wywołujemy `setTimeout` by zmienł spowrotrm display oraz dorzucił np dane w Div.

## Krótka teoria
> *Przydatne: Modyfikacja na klasach w callbacku `setTimeout(()=>{{ ... }}, 2000)` zadziała magicznie udowadniając asynchronicznosć braku mrozu GUI paska bocznego przy mrozach poboru z sieci komórek!*
>
> 💡 *Przydatne przypomnienia API:*  
> Pamiętaj, asynchroniczność nie lubi wrzucać zwrotów rzutnia bezpośrednie `let wynik = setTimeout()`. Aby zabić cykl, rzutujesz z uchwytu referncyjnego `clearInterval(uchwyt)`.  W blokach `try/catch` z użyciem `await` - await wyłapuje obiekty Resolvy, natomiast Catch łapie wyrzuty zza burt Rejecty z Obietnic. Wyprowadź cierpliwość by JS "nie przebiegł" wylądowań!

## Wymagania i Kryteria
1. Podepnij klik w przycisk pod ustawianie np widocznosc flex Loadera 
2. Zaproponuj Timeout wywalajacy tego flexa na zewn zastepujac strin HTML gotowym np listą.

## Oczekiwany Wynik
Silnik wyrzuca prawidłowy wynik po rzekomym odczekaniu (nie natychmiastowym uśmiechu UI konsoli/elementu). W zadanaich z pętlami widoczne musi być zabicie pętli i brak zaśmiecenia zżerania ciągłego, z logami rzetelnie wyciąganymi pod opublikowaną zmienną referencyjną JS.
