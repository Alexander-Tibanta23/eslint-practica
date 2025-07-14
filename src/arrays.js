// Uso incorrecto de métodos de array
const numbers = [1, 2, 3, 4];

// forEach sin return (no debería usarse para crear nuevos arrays)
const doubled = [];
numbers.forEach((num) => {
  doubled.push(num * 2);
});

// Uso de map correcto (pero asignado a una variable no-const)
let tripled = numbers.map(function(num) {
  return num * 3;
});

// Uso de find con comparación débil (==)
const found = numbers.find((num) => num == '2');

console.log(doubled, tripled, found);