const infoProductos = [
  {
    id: 1,
    nombre: "Remera roja",
    precio: "$15,000.00",
  },
  {
    id: 2,
    nombre: "Buzo",
    precio: "$30,000.00",
  },
  {
    id: 3,
    nombre: "Conjunto",
    precio: "$50,000.00",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const producto = urlParams.get("producto");

// Obtener el h2 para cambiar el nombre del producto
const nombreProducto = document.getElementById("nombreProducto");

// Cambiar el nombre según el parámetro
if (producto) {
  // Busca el producto en el array por su nombre
  const productoEncontrado = infoProductos.find((item) =>
    item.nombre.toLowerCase().includes(producto.toLowerCase())
  );

  if (productoEncontrado) {
    // Actualiza el nombre y el precio según el producto encontrado
    nombreProducto.textContent = productoEncontrado.nombre;
    document.getElementById("precioProducto").textContent =
      productoEncontrado.precio;
  } else {
    // Si no se encuentra el producto, muestra un mensaje genérico
    nombreProducto.textContent = "Producto no encontrado";
    document.getElementById("precioProducto").textContent = "-";
  }
}
