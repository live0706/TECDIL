document.addEventListener('DOMContentLoaded', (event) => {
    const funButton = document.getElementById('funButton');
    if (funButton) {
        funButton.addEventListener('click', () => {
            alert('Surprise ! 🎉 Vous avez cliqué sur le bouton.');
            funButton.style.backgroundColor = '#4CAF50';
            funButton.style.color = 'white';
            funButton.textContent = 'Merci d\'avoir cliqué !';
        });
    }

    // Afficher le slogan avec un délai
    const slogan = document.querySelector('.slogan');
    if (slogan) {
        setTimeout(() => {
            slogan.style.opacity = 1;
        }, 500); // Délai de 1 seconde avant l'affichage du slogan
    }

    // Menu hamburger
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
    }
});