fetch("https://autos-backendss.onrender.com/autos")
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById("vehiculos");

        data.forEach(auto => {
            const autoHTML = `
  <div class="auto">
    <h2>${auto.marca} ${auto.modelo}</h2>
    <p>Año: ${auto.año}</p>
    <p>Precio: $${auto.precio}</p>

    <button onclick="editarAuto('${auto._id}')">Editar</button>
    <button onclick="eliminarAuto('${auto._id}')">Eliminar</button>
  </div>
  
`;
function editarAuto(id) {
  const nuevoPrecio = prompt("Ingrese nuevo precio:");

  fetch(`https://autos-backendss.onrender.com/autos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      precio: Number(nuevoPrecio)
    })
  })
  .then(res => res.json())
  .then(data => {
    alert("Auto actualizado 🚗");
    location.reload();
  })
  .catch(err => console.error(err));
}

            contenedor.innerHTML += autoHTML;
        });
    })
    .catch(error => console.error("Error:", error));
