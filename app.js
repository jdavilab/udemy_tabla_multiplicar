
const { crearArchivo } = require('./helpers/multiplicar')
const colors = require('colors');
const  argv  = require('./config/yargs')

console.clear();


crearArchivo( argv.b , argv.l, argv.h)
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'Creado'))
    .catch(err => console.log(err));


  //por terminal  envio el valor de la base
  //node app.js --base=10