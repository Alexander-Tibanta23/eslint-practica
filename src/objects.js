// Objeto con formato inconsistente
const car = {
  brand: 'Toyota',  
  model: 'Corolla', year: 2020,
  color: 'blue'
};

// Uso de var en lugar de const
var owner = {
  name: 'John', age: 30
};

// Modificación directa de objeto (debería ser inmutable)
owner.age = 31;

// Copia superficial con spread operator (pero usando var)
var newCar = { ...car, year: 2021 };

// Método innecesariamente como función clásica
newCar.displayInfo = function() {
  console.log(this.brand + ' ' + this.model);
};

console.log(owner, newCar);