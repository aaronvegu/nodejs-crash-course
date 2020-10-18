// Modulo Path. Nos provee de utilities para manejar archivos y rutas de archivos

// Traemos el modulo path. Lo agregamos con solo su nombre y no una direccion debido a que es un core module
const path = require('path');

// Basename. Nos retorna el ultimo pedazo o nombre de la direccion de un archivo
console.log(path.basename(__filename)); // Nos trae solo el nombre del archivo de este modulo

// Dirname. Nos retorna el nombre del directorio de la ruta o archivo especificado como parametro
console.log(path.dirname(__filename));

// Extname File extension. Nos retorna la extension del archivo pasado como parametro
console.log(path.extname(__filename));

// Pase. Nos retorna un objeto creado en base al path o ruta del archivo pasado como parametro
console.log(path.parse(__filename));
// Ademas podemos acceder a solo un valor del objeto:
console.log(path.parse(__filename).ext);

// Join. Nos permite concatenar direcciones para obtener una ruta completa
console.log(path.join(__dirname, 'test', 'example.html'));
// Esto nos concatena una ruta con la direccion actual de nuestro modulo, agregando un folder test y el archivo html
