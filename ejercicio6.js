var cantidadElementos = parseInt(prompt("Ingrese la cantidad de elementos a agregar al arreglo:"));

var arreglo = [];

for (var i = 0; i < cantidadElementos; i++) {
  var elemento = prompt("Ingrese el elemento " + (i + 1) + ":");
  arreglo.push(elemento);
}

console.log("Elementos del arreglo:", arreglo);
