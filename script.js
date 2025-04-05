// Fonction pour générer un temps de chargement aléatoire entre 3 et 15 secondes
function getRandomTime() {
    return Math.floor(Math.random() * (15000 - 3000 + 1)) + 3000; // Entre 3000ms (3s) et 15000ms (15s)
}

// Délai aléatoire pour simuler le chargement
setTimeout(function() {
    // Masquer l'écran de chargement
    document.getElementById('loader-container').style.display = 'none';
    
    // Afficher le contenu du réseau social
    document.getElementById('main-content').style.display = 'block';
    
    // Rediriger vers /app/index.html après un certain temps (si nécessaire)
    // window.location.href = '/app/index.html'; 
}, getRandomTime());
