const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    // Call event / Evento emisor
    this.emit('message', { id: uuid.v4(), msg: msg });
  }
}

// module.exports = Logger;

/**
 * Lo que haremos es crear un listener que estara en escucha del evento 'message', y cuando lo escuche,
 * nos hara un console.log que imprimira el mensaje emitido por nuestro evento emisor en Logger y el id
 * que se le asigno desde Logger, el cual emite el evento y un mensaje recibido junto al ID cuando se le
 * llama al metodo log de Logger que recibe un mensaje como parametro
 */

// Traemos nuestro modulo Logger
const Logger = require('./logger');

// Instanciamos nuestro Logger
const logger = new Logger();

// Creamos un event listener de message
logger.on('message', (data) => {
  console.log('Called Listener', data);
});

// Emitimos nuestro evento mediante el metodo log() de Logger
logger.log('Hello World!');
