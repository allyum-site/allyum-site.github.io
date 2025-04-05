// Fonction pour générer un nombre aléatoire entre 3 et 15 secondes
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

// Générer des boîtes animées de manière aléatoire
function generateRandomBoxes(numBoxes) {
    for (let i = 0; i < numBoxes; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.top = `${Math.random() * 100}%`;
        box.style.left = `${Math.random() * 100}%`;
        box.style.animationDuration = `${Math.random() * 3 + 3}s`; // Animation entre 3 et 6 secondes
        document.body.appendChild(box);
    }
}

// Générer 10 boîtes animées
generateRandomBoxes(10);
