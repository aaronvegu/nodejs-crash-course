// FS - File System Module nos permite interactuar con el sistema de archivos

// Traemos los modulos fs y path
const fs = require('fs');
const path = require('path');

// Creamos un folder
// El metodo mkdir es asincrono, lo cual significa que hace uso de un callback para llevar la funcion y ejecutarla
// mientras continuamos con la ejecucion de nuestro programa
fs.mkdir(path.join(__dirname, '/test'), {}, (error) => {
  if (error) throw error;
  console.log('Folder created!');
});
/**
 * Le pasamos la ruta del folder a crear mediante el metodo join de path, donde le pasamos el nombre del directorio
 * actual + test folder, ademas de un objeto vacio de opciones que acepta como param el metodo mkdir y nuestra funcion
 * callback donde cachamos el error de existir o hacer un log de folder creado si no hay ningun error.
 */

// Creamos un archivo y escribimos en él
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello World!',
  (e) => {
    if (e) throw e;
    console.log('File written to...');

    // Concatenamos texto al archivo ya creado con appendFile
    fs.appendFile(
      path.join(__dirname, '/test', 'hello.txt'),
      ' I love NodeJS',
      (e) => {
        if (e) throw e;
        console.log('Text append it!');
      }
    );
  }
);

// Para leer un archivo
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (e, data) => {
//   if (e) throw e;
//   console.log(data);
// });

// Para renombrar un archivo
// fs.rename(
//   path.join(__dirname, '/test', 'hello-world.txt'),
//   path.join(__dirname, '/test', 'hello.txt'),
//   (e) => {
//     if (e) throw e;
//     console.log('File renamed...');
//   }
// );
