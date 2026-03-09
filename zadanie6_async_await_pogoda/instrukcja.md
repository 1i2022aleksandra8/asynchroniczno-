# Błyskawice Magicznego Płaszcza Awaiterów Try Catch

## Cel
Wychdozimy z starości Promise kropkowania. Utworz obietice pogody (j/w instancji po  2 s odda 'Mrozy'). Stworz jednak supernowoczesną fnikcje np. `pobierzZDomu()` obarczoną na korornie slowem z zaklciami `async`!

## Krótka teoria
> *Dzieiki opocjom Aync function obsluga()... mozemy w brzuszu podwiatować magiczną pauza  tzew `let pogodynka = await pobieracPromise()`. Zauwza omijamy calutką sfere okrutnego Thena a JS wyciagnie loga nam tak samo idealnie za dwno - obarcajac starodawnym cudo i bezpieczym blokem try {} catch(err){}.*
>
> 💡 *Przydatne przypomnienia API:*  
> Pamiętaj, asynchroniczność nie lubi wrzucać zwrotów rzutnia bezpośrednie `let wynik = setTimeout()`. Aby zabić cykl, rzutujesz z uchwytu referncyjnego `clearInterval(uchwyt)`.  W blokach `try/catch` z użyciem `await` - await wyłapuje obiekty Resolvy, natomiast Catch łapie wyrzuty zza burt Rejecty z Obietnic. Wyprowadź cierpliwość by JS "nie przebiegł" wylądowań!

## Wymagania i Kryteria
1. Wydolub z zaimplemtonowanego zzew Promise zjawisk opcje we frontach za pomotwa waita dla function z ayncami w klamrrze Tryuow. Udowoddnij ze konsola log wyrzcona pod Awaitem grzecznie poczkeka az pogoda wleci do ram miennnejej!

## Oczekiwany Wynik
Silnik wyrzuca prawidłowy wynik po rzekomym odczekaniu (nie natychmiastowym uśmiechu UI konsoli/elementu). W zadanaich z pętlami widoczne musi być zabicie pętli i brak zaśmiecenia zżerania ciągłego, z logami rzetelnie wyciąganymi pod opublikowaną zmienną referencyjną JS.
