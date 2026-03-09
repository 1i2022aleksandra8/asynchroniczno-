# Zrozumienie Asynchroniczności (Timery, Promises, async/await)

## 1. Jak JS radzi sobie z upływającym czasem? (Pętla Wywołania - Nie Blokowanie)
JavaScript ma jeden główny rdzeń (One Thread). Wykonuje linijkę po linijce, a jeśli któraś zawiesiłaby kod na np. 5 sekund (np. symulowany, twardo zablokowany pobór z serwera), cały interfejs (UI, przyciski i animacje) by zamarzł! Czekając w zgiełku.

Dlatego w JS używamy sztuczek tzw. **API Webowej Przeglądarki** (Web API). Silnik JS rzuca uciążliwy kod "Opóźniający" do strefy oczekującej obok przeglądarki, po czym sam natychmiast pędzi na sam dól! Kiedy w strefie oczekującej minie np. upragnione 5 sekund - silnik JS łapie go z powrotem i wyświetla. Nie było Zamarzania Kodu! Nazywamy to Asynchronicznością (Asynchronous Execution).

---

## 2. Timery: Strażnicy Czasu (SetTimeout i SetInterval)

### Opóźnione wykonanie (Jednorazowe): `setTimeout`
Opóźnia wybuch podanej Funkcji (Callbacku) o sztywno określoną ilośc milisekund (ms). $1000ms = 1s$. Użyteczne do okienek ładujących powitanie, lub uciekania powiadomień po 3s.

```javascript
console.log("Start!");

setTimeout(() => {
    console.log("Sekunda minęła! Pojawiam się ukradkiem.");
}, 1000);

console.log("Koniec?"); // UWAGA! Wypisze się jako Drugie w konsoli, PRZED SetTimeoutem! Bo JS go ominął czekając!
```

### Pętla Nieskończona Czasu: `setInterval`
Podobna logika, lecz po wybuchu sekundowym funkcja nie umiera – wchodzi w nieskończoną rotację uderzeniową co te właśnie 1000ms. Służy do Stoperów, Odliczań (Tic-Tac) czy Slajderów w Zdjęciach. Należy jednak go ZABIĆ by uchronić RAM Komputera!

```javascript
let sekundy = 0;
// 1. Zapakuj Interwał do identyfikatora by mieć nad nim bat z ramienia pamieci!
const stoperId = setInterval(() => {
    sekundy++;
    console.log("Minęła kolejna " + sekundy + " Sekunda.");
    
    if (sekundy === 5) {
        // 2. Po spełnieniu logicznym (5 raz) załóż Mordercę Interwału celując w jego zrzucony Identifikator referencyjny ramowy (stoperId).
        clearInterval(stoperId);
        console.log("Zabito pętlę! Ufff...");
    }
}, 1000);
```

---

## 3. Obietnice (Promises) i .then() .catch()
Stare metody asynchroniczne tworzyły tasiemce i piramidy "Ifów" na dole (tzw Callback Hell). Współczesny Dev ratuje świat obiektem **Promise (Obietnicą)**.

Obietnica symbolizuje coś co przybędzie na 100%, nie wiemy jeszcze czy z Sukcesem, czy z Porażką (bo pobierze się z Poczty np serwera z lagiem 4s).  
* `resolve` - Wykonuje spełnienie i wita radośnie obietnicę.
* `reject` - Uziemia Odrzuceniem ciskając czerwony alarm błędów.

```javascript
// 1. Tworzenie pustej nowej symulacji serwera banku rzucającego rzut moneta
const pobierzZBanku = new Promise((resolve, reject) => {
    setTimeout(() => {
        let serwerDziala = true; // Zmien na false by przetestowac
        if(serwerDziala) resolve("Dane odebrane! Oto 500 PLN.");
        else reject("Brak Pieniędzy (Error 500)!");
    }, 2000);
});

// 2. ODBIÓR OBIETNNICY! Nie ułozysz logów pod nią bo wyświetlą się za wcześnie - zawiąż strukture oczekujacą Łączoną (Chainingiem) kropkami:
pobierzZBanku
    .then( (dane) => console.log("SUKCES: " + dane) ) // Odbiera z Resolva
    .catch( (error) => console.error("KATASTROFA: " + error) ); // Odbiera z Rejecta 
```

---

## 4. Ostateczna nowoczesność (async / await) - Zabójcy Łańcuchów .then()
Standard `ES8` zmodernizował asynchroniczność. Programiści uznali, że `then().then().then()` to wciąż brzydki Chaining po Obiektach.

Chcieli powrotu do korzeni – rzucania "let wynik = pobierz()" w 1 prostej linii bez kropek, który sam z siebie w magiczny bezpieczny potoczyści zatrzyma kompilator JS do czasu ocknięcia serwera bankowego. 
Tak powstał pancerz **`async {}`** i kotwica wymuszająca oczekiwanie: **`await`**!

```javascript
// To te same wywołanie Promises co u góry z 2012...
// ...Ale Zobacz jakie przejrzyste - jak w 1999 ze starych synchro książek!!

async function obslugaUI() {
    try {
        console.log("Ładowanie z Banku...");
        
        // Zatrzymujemy ten 1 blok Async w JS! Kompilator stoi tutaj i dyszy przez np 2s.
        let kwotaZBanku = await pobierzZBanku; 
        
        console.log("Mam! Wyrzucam do frontendu po lagach!: " + kwotaZBanku); 
    } catch (err) {
        // Łapie Odrzuty cichcem w try-catch z catch(err) omijając starą funkcję kropkową obietnic !
        console.error("Panika Try-Catch! Wypluwam czerwień: " + err);
    }
}
obslugaUI();
```
