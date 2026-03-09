document.addEventListener('uruchomTest', () => {
    const wynikUI = document.getElementById('wynikUI');
    const loadingAnim = document.getElementById('loadingAnim');

    loadingAnim.style.display = "block";
    wynikUI.innerText = "Trwa wykonywanie logiki opóźnionej...";

    const mojaPoczta = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("📬 Poczta przyjechała w 2030r!");
        }, 1500);
    });

    mojaPoczta.then((dane) => {
        loadingAnim.style.display = "none";
        wynikUI.innerText = dane;
    });
});