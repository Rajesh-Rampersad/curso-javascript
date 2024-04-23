// Forma 1 - Palabra export

// export const nombre = 'John';

// export const obtenerPosts = () =>{
//     return [{
//         id:1,
//         titulo:'hola'
//     },{
//         id:2,
//         titulo:'mundo'

//     }]
// }

// Forma 2 - Final del documento
const nombre = 'John';

const obtenerPosts = () =>{
    return ['Alejandro', 'Cesar', 'Manuel'];
};



export  { nombre, obtenerPosts };
