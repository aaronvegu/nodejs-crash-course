const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    // Call event / Evento emisor
    this.emit('message', { id: uuid.v4(), msg: msg });
  }
}

module.exports = Logger;
