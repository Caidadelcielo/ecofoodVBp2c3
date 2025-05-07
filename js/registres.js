document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRegistro");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault(); 
  
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const usuario = document.getElementById("usuario").value.trim();
        const pass = document.getElementById("contraseña").value;
        const confirmPass = document.getElementById("confirmar_contraseña").value;
        const telefono = document.getElementById("telefono").value.trim();
        const nacimiento = document.getElementById("fecha_nacimiento").value;
        const mensaje = document.getElementById("mensajeRegistro");
  
        
        mensaje.textContent = "";
        mensaje.classList.remove("alert", "alert-danger", "alert-success");
  
        if (!nombre || !correo || !usuario || !pass || !confirmPass || !telefono || !nacimiento) {
          mensaje.textContent = "Por favor, completa todos los campos.";
          mensaje.classList.add("alert", "alert-danger");
          return;
        }
  
        if (!correo.includes("@") || !correo.includes(".")) {
          mensaje.textContent = "Correo electrónico no válido.";
          mensaje.classList.add("alert", "alert-danger");
          return;
        }
  
        if (pass.length < 6) {
          mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
          mensaje.classList.add("alert", "alert-danger");
          return;
        }
  
        if (pass !== confirmPass) {
          mensaje.textContent = "Las contraseñas no coinciden.";
          mensaje.classList.add("alert", "alert-danger");
          return;
        }
  
        
        const usuarioData = {
          nombre: nombre,
          correo: correo,
          usuario: usuario,
          contraseña: pass,
          telefono: telefono,
          fecha_nacimiento: nacimiento
        };
  
        
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push(usuarioData);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
        
        mensaje.style.color = "green";
        mensaje.textContent = "¡Registro exitoso! Redirigiendo...";
        mensaje.classList.add("alert", "alert-success");
  
        
        setTimeout(() => {
          window.location.href = "login.html"; 
        }, 1500); 
      });
    }
  });
  