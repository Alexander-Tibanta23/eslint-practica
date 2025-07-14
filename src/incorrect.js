// Errores de sintaxis y estilo
var x = 5  // Sin punto y coma
var y = "10"  // Comillas dobles

// Uso de == en lugar de ===
if (x == y) {
  console.log("x and y are equal")  // Comillas dobles y falta ;
}

// Espacios inconsistentes y comas innecesarias
const numbers = [1,  2,  3,  4, ]  

// Objeto mal formateado
const person = {name: 'Bob', age:30,}

// Función innecesariamente con var
var sum = function(a, b) {
  return a + b
}

// Variable no usada
const unusedVar = 'Hello';