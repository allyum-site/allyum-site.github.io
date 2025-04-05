// Simule l'état de connexion utilisateur
const isLoggedIn = false; // À changer plus tard

window.onload = () => {
  const overlay = document.getElementById('login-overlay');
  if (isLoggedIn) {
    overlay.style.display = 'none';
  } else {
    overlay.style.display = 'flex';
  }
};
