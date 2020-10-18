// OS Module - Nos provee con utils para leer e interactuar con la informacion del sistema operativo

// Traemos el modulo OS
const os = require('os');

// Platform - Info sobre el nombre identificado del OS
console.log(os.platform());

// CPU Arch - Info sobre la arquitectura del equipo
console.log(os.arch());

// CPU Core Info - Info sobre cada core del CPU
console.log(os.cpus());

// Memory - Info sobre la memoria disponible en el quipo
console.log(os.freemem());

// Totalm Memory - Info sobre la memoria total del equipo
console.log(os.totalmem());

// Home Directory - Devuelve la ruta del home
console.log(os.homedir());

// Uptime - Tiempo que el sistema ha estado trabajando sin apagarse (en secs)
console.log(os.uptime());
