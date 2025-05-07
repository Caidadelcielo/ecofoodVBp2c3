
document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
    cargarFaqs();
  
    const formComentario = document.getElementById("formComentario");
    formComentario.addEventListener("submit", agregarComentario);
  
    const formContacto = document.getElementById("formContacto");
    formContacto.addEventListener("submit", validarContacto);
  });
  
  
  const productos = [
    {
      nombre: "Caja Orgánica",
      descripcion: "Frutas y verduras frescas cultivadas sin pesticidas.",
      precio: "$10.000",
      imagen: "ruta/a/imagen1.jpg",
    },
    {
      nombre: "Snack Vegano",
      descripcion: "Galletas energéticas sin conservantes ni azúcar.",
      precio: "$4.500",
      imagen: "ruta/Pap.jpg",
    },
    {
      nombre: "Jugo Natural",
      descripcion: "Jugo prensado en frío, 100% fruta.",
      precio: "$3.000",
      imagen: "ruta/a/imagen3.jpg",
    },
  ];
  
  function cargarProductos() {
    const contenedor = document.getElementById("contenedorProductos");
  
    productos.forEach((producto) => {
      const col = document.createElement("div");
      col.classList.add("col-md-4", "mb-4");
  
      col.innerHTML = `
        <div class="card h-100">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text"><strong>${producto.precio}</strong></p>
          </div>
        </div>
      `;
  
      contenedor.appendChild(col);
    });
  }
  
  
  function agregarComentario(e) {
    e.preventDefault();
  
    const comentario = document.getElementById("comentarioTexto").value.trim();
    const lista = document.getElementById("listaComentarios");
  
    if (!comentario) return;
  
    const nombreUsuario = "Usuario"; // Puedes reemplazar con un nombre real si estás logueando
  
    const div = document.createElement("div");
    div.classList.add("alert", "alert-secondary");
    div.textContent = `${nombreUsuario}: ${comentario}`;
  
    lista.appendChild(div);
    document.getElementById("comentarioTexto").value = "";
  }
  
  
  const faqs = [
    {
      pregunta: "¿Los productos son 100% orgánicos?",
      respuesta: "Sí, trabajamos con productores certificados.",
    },
    {
      pregunta: "¿Hacen envíos a regiones?",
      respuesta: "Por ahora solo enviamos dentro de la Región Metropolitana.",
    },
    {
      pregunta: "¿Cómo puedo pagar?",
      respuesta: "Aceptamos tarjetas, transferencia y efectivo contra entrega.",
    },
  ];
  
  function cargarFaqs() {
    const lista = document.getElementById("listaFaqs");
  
    faqs.forEach((faq) => {
      const div = document.createElement("div");
      div.classList.add("mb-3");
  
      div.innerHTML = `
        <h5>${faq.pregunta}</h5>
        <p>${faq.respuesta}</p>
      `;
  
      lista.appendChild(div);
    });
  }
  
  
  function validarContacto(e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombreContacto").value.trim();
    const correo = document.getElementById("emailContacto").value.trim();
    const mensaje = document.getElementById("mensajeContacto").value.trim();
  
    if (!nombre || !correo || !mensaje) {
      alert("Por favor completa todos los campos.");
      return;
    }
  
   
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    document.getElementById("formContacto").reset();
  }
  