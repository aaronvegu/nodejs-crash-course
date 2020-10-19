// Traemos nuestros Core modules de NodeJS
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //   // console.log(req.url); // Para observar en que url se esta respondiendo
  //   if (req.url === '/') {
  //     // Si la url es home (/) mostramos el contenido de index.html en public
  //     fs.readFile(
  //       path.join(__dirname, 'public', 'index.html'),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { 'Content-Type': 'text/html' }); // Indicamos al cliente el tipo de contenido que sera retornado
  //         res.end(content);
  //       }
  //     );
  //   }
  //   if (req.url === '/api/users') {
  //     // Si se tratara de una API Rest
  //     const users = [
  //       // Simulamos un fetch a una base de datos
  //       { name: 'Bob Smith', age: 40 },
  //       { name: 'John Doe', age: 30 },
  //     ];
  //     res.writeHead(200, { 'Content-Type': 'application/json' });
  //     res.end(JSON.stringify(users)); // Retornamos nuestros users en JSON
  //   }

  // -------------------

  // Construimos nuestra direccion url de manera dinamica segun el valor de nuestro request url
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url // If ternario: si la url de nuestro request es home, muestras index.html
    // de lo contrario, la url contenida en request
  );

  // Obtenemos la extension de nuestro archivo
  let extName = path.extname(filePath);

  // Obtenemos el tipo de contenido inicial, que siempre sera html en homepage
  let contentType = 'text/html';

  // Y ya dependiendo hacia donde se diriga el request, hacemos un switch para obtener
  // el contentType segun la extension del archivo que queremos manejar en el server
  switch (extName) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Si el contentType es html pero su extension esta vacia, le agregamos la extension .html
  if (contentType == 'text/html' && extName == '') filePath += '.html';

  // Leemos el archivo alojado
  fs.readFile(filePath, (err, content) => {
    // Creamos callback para la lectura de archivos
    if (err) {
      // verificamos errores y si es un 404 o cualquier otro error 500 de servidor
      if (err.code == 'ENOENT') {
        // pagina no encontrada
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            if (err) throw err;
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        // De no ser ENOENT, sera otro error en el servidor
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // De no haber error
      res.writeHead(200, { 'Content-Type': contentType }); // Escribimos cabecera con codigo y tipo de contenido
      res.end(content, 'utf8'); // Cerramos la respuesta retornando el contenido del archivo
    }
  });
});

// Guardamos el puerto en una constante, donde primero intentara buscar en el puerto
// definido en nuestro ambiente de desarrollo de encontrarse en produccion, o si no,
// tomar el puerto 5000 y correr ahí
const PORT = process.env.PORT || 5000;

// Configuramos el puerto donde nuestro server estara a la escucha
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
