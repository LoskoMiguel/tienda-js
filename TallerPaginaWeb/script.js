let cantidad = 1;
// Obtener parámetros de la URL
const params = new URLSearchParams(window.location.search);
const nombre = params.get("nombre");
const precio = params.get("precio");
const imagen = params.get("imagen");

const cantidadElemento = document.getElementById("cantidad");
const botonMas = document.getElementById("mas");
const botonMenos = document.getElementById("menos");

// Insertar datos en la página
document.getElementById("nombreProducto").innerText = nombre;
document.getElementById("precioProducto").innerText = `Precio: $${precio}`;
document.getElementById("imagenProducto").src = `img/${imagen}`;

// Evento al hacer clic en "Comprar"
document.getElementById("comprarBtn").addEventListener("click", function() {
    const precioNumerico = parseFloat(precio);
    const precio_total = cantidad * precioNumerico;
    alert(`Has comprado ${cantidad} unidad(es) de ${nombre} por un total de $${precio_total}`);
});

botonMas.addEventListener("click", function() {
    cantidad++;
    cantidadElemento.innerText = cantidad;
});

// Disminuir cantidad (mínimo 1)
botonMenos.addEventListener("click", function() {
    if (cantidad > 1) {
        cantidad--;
        cantidadElemento.innerText = cantidad;
    }
});

// Lista de elementos
let lista = [{
    "nombre" : "Iphone 11",
    "descripcion" : ["64 GB", "4 ram"],
    "precio" : precio
}];

// Seleccionar el div donde se agregará la lista
const contenedor = document.getElementById("especificaciones_lista");

// Crear el elemento <ul>
const ul = document.createElement("ul");

// Recorrer la lista y crear los  <li>
let dispositivo = lista.find(persona => persona.nombre === nombre);
let descripcion_dispositivo = dispositivo.descripcion.join("");  

let li = document.createElement("li"); // Crear <li>
li.textContent = descripcion_dispositivo; // Agregar texto al <li>

// Insertar el <ul> dentro del contenedor
contenedor.appendChild(li);
