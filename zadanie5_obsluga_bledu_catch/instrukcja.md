# Odrzucający Silnik Oczekiwania Rejects

## Cel
Zabawą asynchronicznym promise - symuluj np odwage logowania usera uzyjac u góry `Math.random() > 0.5`. Jesli wyrzucil prawdę pod resolve, ale tu ciekawoscia jesli falty -> uderz reject('Brak Odpowiedzi logina HTTP:403'). Odbierz na dole w wywyolaniu kropkowych.

## Krótka teoria
> *Silnik po 1s w Promises wysypie if'elsem o opocju albo A albo B - Then lapie odczyt szczesliwy, a od rzutu reject podczpeisz catch po then aby bezpiecznienie wylaczeyc w interefejsie blad i pokazac czerwony rzut dla user bez wyrzucania crashów f12.*
>
> 💡 *Przydatne przypomnienia API:*  
> Pamiętaj, asynchroniczność nie lubi wrzucać zwrotów rzutnia bezpośrednie `let wynik = setTimeout()`. Aby zabić cykl, rzutujesz z uchwytu referncyjnego `clearInterval(uchwyt)`.  W blokach `try/catch` z użyciem `await` - await wyłapuje obiekty Resolvy, natomiast Catch łapie wyrzuty zza burt Rejecty z Obietnic. Wyprowadź cierpliwość by JS "nie przebiegł" wylądowań!

## Wymagania i Kryteria
1. Skrypt podrzuca rzut resolve i reject wg opznionego randdomowych ifów 
2. Przechcywc do z interfejsowej .then oraz .catch rzucajcej na ziolony ok/czerwony fal ekran alert HTML.

## Oczekiwany Wynik
Silnik wyrzuca prawidłowy wynik po rzekomym odczekaniu (nie natychmiastowym uśmiechu UI konsoli/elementu). W zadanaich z pętlami widoczne musi być zabicie pętli i brak zaśmiecenia zżerania ciągłego, z logami rzetelnie wyciąganymi pod opublikowaną zmienną referencyjną JS.
