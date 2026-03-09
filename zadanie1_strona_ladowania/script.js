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
    
    setTimeout((uruchomTest) => {
        loadingAnim.style.display = "none";
        wynikUI.innerHTML = "Gotowe!";
    }, 2000);
});


