function raspunde(raspuns) {
    if (raspuns === 'da') {
        alert("Yey! Ne vedem la întâlnire! 🥳");
    } else {
        let mesaje = [
            "Ești sigură?",
            "Sigur-sigur? 😢",
            "Dar ar fi foarte frumos! 🥺",
            "Gândește-te mai bine! 💕",
            "Hai, nu fii rea! 😘",
            "O să fie distractiv! 🎉",
            "Te rog, Bea! 🥰"
        ];

        const mesajAleatoriu = mesaje[Math.floor(Math.random() * mesaje.length)];
        document.getElementById('nu').innerText = mesajAleatoriu;
        document.getElementById('da').style.fontSize = '24px';
        document.getElementById('da').style.transform = 'scale(1.2)';
    }
}
