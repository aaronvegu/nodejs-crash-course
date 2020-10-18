// Importamos nuestro modulo Person y lo definimos como Person
const Person = require('./Person');

// Instanciamos un objeto de Person
const johnDoe = new Person('John Doe', 30);

// Usamos su metodo greeting
johnDoe.greeting();
