document.addEventListener('uruchomTest', () => {
    const wynikUI = document.getElementById('wynikUI');
    const loadingAnim = document.getElementById('loadingAnim');

    // Wizualizacja ładowania dla ucznia na START
    loadingAnim.style.display = "block";
    wynikUI.innerText = "Trwa wykonywanie logiki opóźnionej...";

    // -- Miejsce na autorskie wywołanie Asynchroniczności (Timery / Promise / async/await) --
    // Zastąp animacje i wynik w odpowiednim callbacku obróbki na mecie:
    // loadingAnim.style.display = "none";
    // wynikUI.innerHTML = "Gotowe!";

    let licznik = 5;
    let bombaID = null;
    wynikUI.innerText = `Odliczanie: ${licznik}`;

    bombaID = setInterval(() => {
        licznik--; 

        if (licznik > 0) {
            wynikUI.innerText = `Odliczanie: ${licznik}`;
        } 
        else if (licznik === 0) {
            clearInterval(bombaID);

            loadingAnim.style.display = "none";

            wynikUI.innerHTML = `
                <div class="stoper-box">0</div>
                <div><strong>BOMBA BUM 💥</strong><br>Interwał został poprawnie zatrzymany.</div>
            `;
        } 
        else {
            clearInterval(bombaID);
        }
    }, 1000);
});