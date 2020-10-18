// Events Module - El core de la API de NodeJS funciona en base a una arquitectura asincrona que es impulsada
// por eventos en los que tenemos un tipo de objeto llamados Emisores encargados de emitir eventos
// que hacen que otro tipo de objetos llamados listeners sean ejecutados

// Traemos nuestro modulo de eventos
const EventEmitter = require('events');

// Creamos una clase que hereda de nuestro modulo de eventos
class MyEmitter extends EventEmitter {}

// Inicializamos un objeto de esta clase recien creada
const myEmitter = new MyEmitter();

// Creamos un event listener
myEmitter.on('event', () => console.log('Event Fired!'));
// Este se encargara de emitir el callback una vez que escuche o sea emitido el evento 'event'

/**
 * Inicializamos un evento
 * Que emite un evento cualquiera, que al coincidir con un listener de ese evento, este listener se encargara
 * de ejecutar un callback que responde a la llamada el evento
 */
myEmitter.emit('event');
