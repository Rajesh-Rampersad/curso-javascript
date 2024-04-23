'use strict';

console.log('Soy codigo que se ejecuta desde el archivo emptyExport.js');

const correo = 'correo@correo.com';

/* 
	📌 Named Imports
*/
/* 
	📌 Named Imports
	Podemos importar variables y funciones que han sido exportadas mediante la palabra "export".
	Podemos importarlas con el mismo nombre o podemos usar un alias usando la palabra "as".
	Normalmente todos los import se establecen al inicio del documento.
*/
// import { nombre as nombreImportado, obtenerPosts } from './namedExports';
// console.log('Mi nombre es ' + nombreImportado);
// console.log(obtenerPosts());

console.log(correo);
