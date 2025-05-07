
const frasesMotivadoras = [
  "¡Únete al cambio, juntos podemos reducir el desperdicio de alimentos!",
  "Cada acción cuenta. ¡Haz tu parte para cuidar el planeta!",
  "Reducir, reutilizar y reciclar, ¡hazlo parte de tu vida diaria!"
];


function cargarFraseMotivadora() {
  const frase = frasesMotivadoras[Math.floor(Math.random() * frasesMotivadoras.length)];
  document.getElementById('fraseMotivadora').textContent = frase;
}


function redirigirRegistro() {
  window.location.href = "registro.html"; 
}


function redirigirLogin() {
  window.location.href = "login.html";  
}


window.onload = function() {
  cargarFraseMotivadora();
};

  