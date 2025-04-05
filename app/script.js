// Fonction pour rediriger vers la page de connexion si l'utilisateur n'est pas connecté
function redirectToLogin() {
    window.location.href = '/app/login.html';
}

// Fonction pour vérifier si l'utilisateur est connecté (simplifié pour l'exemple)
function checkLoginStatus() {
    const isLoggedIn = false; // Simuler un utilisateur non connecté (on le changera plus tard avec un système d'authentification)

    if (isLoggedIn) {
        document.getElementById('content').style.display = 'block';
        document.getElementById('welcome-message').style.display = 'none';
    } else {
        document.getElementById('welcome-message').style.display = 'block';
        document.getElementById('content').style.display = 'none';
    }
}

// Appel de la fonction pour vérifier l'état de la connexion
checkLoginStatus();
