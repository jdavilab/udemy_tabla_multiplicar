

const argv = require('yargs')
          .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: ' Es la Base de la tabla de Multiplicar '
          })
          .option('l', {
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false,
            describe: ' Muestra la tabla en consola '
          })
          .option('h', {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: ' Es la hasta donde multiplicar '
          })

          .check( (argv, options)  =>{
            if( isNaN( argv.b )){
              throw 'La base tiene q ser número'
            }
            if( isNaN( argv.h )){
                throw 'Hasta tiene q ser número'
              }
              
            return true;
          })
          .argv;

module.exports =  argv ;