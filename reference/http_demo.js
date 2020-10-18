// HTTP Module

// Traemos nuestro HTTP Module
const http = require('http');

// Creamos un objeto Server
http
  .createServer((request, response) => {
    // Cuando recibimos un request, escribimos una respuesta:
    response.write('Hello World!');
    response.end();
  })
  .listen(5000, () => console.log('Server running...')); // Ponemos nuestro server en escucha en el
// puerto 500 y un callback que escribe en consola
