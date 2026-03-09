# Kontrolka Interwałowa Tiktock

## Cel
Gracz gra w gierce, u rzutu okna sekundy znikają na dol w grze (albo idą w góre podbijajac score za odczekanie!). Twoj wlasy w dom `let time=0` musi odliczac a na guzik uiczyc się po `stop`! 

## Krótka teoria
> *Przydatne: Nie wrzucaj let timeoutID wewnstrz - wyrzuc u gory korzenia by gładko i czysto pzycisk mial tam dostęp. Nastepnie interwal co 1s niech modyfikuje dom w ++.*
>
> 💡 *Przydatne przypomnienia API:*  
> Pamiętaj, asynchroniczność nie lubi wrzucać zwrotów rzutnia bezpośrednie `let wynik = setTimeout()`. Aby zabić cykl, rzutujesz z uchwytu referncyjnego `clearInterval(uchwyt)`.  W blokach `try/catch` z użyciem `await` - await wyłapuje obiekty Resolvy, natomiast Catch łapie wyrzuty zza burt Rejecty z Obietnic. Wyprowadź cierpliwość by JS "nie przebiegł" wylądowań!

## Wymagania i Kryteria
1. Przy użyciu Timera `setInterval` powiąż go z puszczajaca zmienna i rzutuj do zewntrzna 
2. Stwórz pzycik dom dla czyszczacza Clear i udowodij zastoj pamieci bez bledu!

## Oczekiwany Wynik
Silnik wyrzuca prawidłowy wynik po rzekomym odczekaniu (nie natychmiastowym uśmiechu UI konsoli/elementu). W zadanaich z pętlami widoczne musi być zabicie pętli i brak zaśmiecenia zżerania ciągłego, z logami rzetelnie wyciąganymi pod opublikowaną zmienną referencyjną JS.
