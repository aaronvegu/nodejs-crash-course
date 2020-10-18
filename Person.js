/**
 * En NodeJS todas funciones, objetos, clases, etc que creamos para nuestro proyecto
 * los vamos a tratar como modulos, los cuales los creamos y despues definimos como modulos
 * de exportacion para usarlos en nuestro proyecto. Esto se logra definiendo:
 *      module.exports = NombreModulo;
 * De esta manera definimos nuestro modulo de exportacion, el cual traeremos despues desde donde
 * lo necesitemos mediante un require(<nombre> o <ubicacion del modulo>)
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

// Declaramos la exportacion del modulo
module.exports = Person;
