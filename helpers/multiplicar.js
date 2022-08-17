const fs = require('fs');
const colors = require('colors');

//asyncrona

const crearArchivo =async( base=5 , listar = false, hasta=10) =>{

    try{
      
        let salida, consola ='';

        for (let i = 0; i <= hasta; i++) {
                 salida += `${base} x ${i} = ${base * i}\n`;
                 consola += `${base} ${ 'x'.green } ${i} ${'='.green} ${base * i}\n`;
        }
        
        if (listar){
            console.log('============'.green);
            console.log('TABAL DEL '.green, colors.blue(base));
            console.log('============'.green);
            console.log(consola);
        }
        
       
        
        fs.writeFileSync(`./salida/tabla-${base}.txt hasta el ${hasta}`, salida);
        return `tabla-${base}.txt hasta el ${hasta}`;

    }catch(err){
        throw err;
    }
        
  
    
}
module.exports = {
    crearArchivo
}


