let cantidad = 1;

const params = new URLSearchParams(window.location.search);
const nombre = params.get("nombre");
const precio = params.get("precio");
const imagen = params.get("imagen");

const cantidadElemento = document.getElementById("cantidad");
const botonMas = document.getElementById("mas");
const botonMenos = document.getElementById("menos");

document.getElementById("nombreProducto").innerText = nombre;
document.getElementById("precioProducto").innerText = `Precio: $${precio}`;
document.getElementById("imagenProducto").src = `img/${imagen}`;

document.getElementById("comprarBtn").addEventListener("click", function() {
    const precioNumerico = parseFloat(precio);
    const precio_total = cantidad * precioNumerico;
    alert(`Has comprado ${cantidad} unidad(es) de ${nombre} por un total de $${precio_total}`);
});

botonMas.addEventListener("click", function() {
    cantidad++;
    cantidadElemento.innerText = cantidad;
});

botonMenos.addEventListener("click", function() {
    if (cantidad > 1) {
        cantidad--;
        cantidadElemento.innerText = cantidad;
    }
});

let lista = [{
    "nombre" : "Iphone 11",
    "descripcion" : ["64 GB", "4 ram"],
    "precio" : precio
}];

const contenedor = document.getElementById("especificaciones_lista");

const ul = document.createElement("ul");

let dispositivo = lista.find(persona => persona.nombre === nombre);
let descripcion_dispositivo = dispositivo.descripcion.join("");  

let li = document.createElement("li"); 
li.textContent = descripcion_dispositivo; 

contenedor.appendChild(li);
