document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formLogin");
    const mensaje = document.getElementById("mensajeLogin");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
  
      const usuario = document.getElementById("usuario").value.trim();
      const pass = document.getElementById("contraseña").value.trim();
  
      
      mensaje.textContent = "";
      mensaje.classList.remove("alert", "alert-danger", "alert-success");
  
     
      if (!usuario || !pass) {
        mensaje.textContent = "Por favor, completa ambos campos.";
        mensaje.classList.add("alert", "alert-danger");
        return;
      }
  
      
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
      
      const usuarioEncontrado = usuarios.find(
        (u) => u.usuario === usuario && u.contraseña === pass
      );
  
      if (!usuarioEncontrado) {
        mensaje.textContent = "Usuario o contraseña incorrectos.";
        mensaje.classList.add("alert", "alert-danger");
        return;
      }
  
      
      mensaje.textContent = "Inicio de sesión exitoso. Redirigiendo...";
      mensaje.classList.add("alert", "alert-success");
  
      
      setTimeout(() => {
        window.location.href = "index.html"; 
      }, 1500); 
    });
  });
  