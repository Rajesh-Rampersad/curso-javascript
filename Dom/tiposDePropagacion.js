/*
	📌 	Cuando agregamos un evento a un elemento ese evento se propaga a los elementos hijo.
*/
/*
	📌 Bubbling (false, por defecto)
	En bubbling el evento del elemento hijo reacciona primero y despues el evento del elemento padre.
	
	📌 Capturing (true)
	En capturing el elemento padre reacciona primero y despues el elemento hijo.
*/
const contenedor = document.getElementById('contenedor1');
    contenedor.addEventListener('click', (e) => {
	console.log('Hiciste click en el contenedor 1');
    },
    true // Solo es necesario ponerlo en el elemento padre.
);

const contenedor2 = document.getElementById('contenedor2');
    contenedor2.addEventListener('click', (e) => {
	console.log('Hiciste click en el contenedor 2');
    },
    true // Solo es necesario ponerlo en el elemento padre.
);

const primeraCaja = document.querySelectorAll('.caja');
primeraCaja.forEach( (primeraCaja) =>{
    primeraCaja.addEventListener('click', (e) => {
       
    
        console.log(`Hiciste click en la ${e.target.innerText}`);
    });
    

});

// /*
// 	📌 Capturing
// 	En capturing el elemento padre reacciona primero y despues el elemento hijo.
// */
// document.querySelector('.contenedor').addEventListener(
// 	'click',
// 	() => {
// 		console.log('Click en el contenedor');
// 	},
// 	true
// );

// document.querySelector('.caja').addEventListener('click', () => {
// 	console.log('Click en la caja');
// });