/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
{
const tareas = require('./tareas')

export function leerTareas() {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
        tareas.leer();
   return 
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
   tareas.leer() 
   let estado = process.argv[2];
   let tempData = [];
   switch(tareas.titulo === "terminada"){
       case 'listar':
       for(let i = 0; i < listado.length; i++){
           console.log('titulo: ${listado[i].titulo status: $(listado[i].status)}')
           tempData.push(tareas.titulo);
           tempData.push(tareas.status);
       }
       break;
   }  
}
}

module.exports = app.js