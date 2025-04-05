// Fonction pour générer un nombre aléatoire entre 3 et 15 secondes
function getRandomTime() {
    return Math.floor(Math.random() * (15000 - 3000 + 1)) + 3000; // entre 3000ms (3s) et 15000ms (15s)
}

// Délai aléatoire pour simuler le chargement
setTimeout(function() {
    // Masquer l'écran de chargement
    document.getElementById('loader-container').style.display = 'none';
    
    // Rediriger vers la page /app/index.html après le temps de chargement
    window.location.href = '/app/index.html';  // Redirection vers /app/index.html
}, getRandomTime());
