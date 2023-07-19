const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 2990,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 3050,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 3600,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 3990,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 3800,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "Pizza con Anana",
    precio: 3150,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// ejercicio a) Las pizzas que tengan un id impar. // 
const IdImpar = pizzas.filter ((pizza) => pizza.id % 2 !== 0);
console.log("Ejercicio a: Las pizzas con id impar son:");
IdImpar.forEach((pizza) => {
  console.log(`·${pizza.nombre}, ya que su id es ${pizza.id}`);
});

// ejercicio b) Responder: ¿Hay alguna pizza que valga menos de $600? //
console.log("Ejercicio b: ¿Hay alguna pizza que valga menos de $600?")
const PizzaMenosDe600 = pizzas.find ((pizza) => pizza.precio < 600);
if (PizzaMenosDe600) {
  console.log("Sí! La(s) siguiente(s) pizza(s) tienen un valor menor a $600:");
  console.log(`${PizzaMenosDe600.nombre}, Precio: $${PizzaMenosDe600.precio}`)
} else {
  console.log("No, actualmente nuestro catálogo de pizzas arranca en un valor igual o superior a $600")
}

//ejercicio c) El nombre de cada pizza con su respectivo precio. //
console.log("Ejercicio c: Aquí se indican los nombres de cada pizza con sus respectivos precios:");
pizzas.forEach((pizza) =>{
  console.log(`·${pizza.nombre}, Precio: $${pizza.precio}`);
});

//ejercicio d) Todos los ingredientes de cada pizza. //
console.log("Ejercicio d: Aquí se indican todas las variedades de pizza con sus respectivos ingredientes:");
pizzas.map((pizza) => {
  console.log(`·${pizza.nombre}:`);
  pizza.ingredientes.map((ingrediente) => {
    console.log(` ◦${ingrediente}`);
  });
});