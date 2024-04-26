// /*
// 	📌 Eliminar eventos de un elemento
// */

// const boton1 = document.getElementById('boton1');
// const boton2 = document.getElementById('boton2');
// const primeraCaja = document.querySelector('.caja');

// const toggleClase = () => {
// 	primeraCaja.classList.toggle('activa');
// };

// // Click boton 1
// boton1.addEventListener('click', () => {
    
// 	// Agregamos el evento
// 	primeraCaja.addEventListener('click', toggleClase);
// });

// // Click boton 2
// boton2.addEventListener('click', () => {
// 	// Eliminamos el evento
// 	primeraCaja.removeEventListener('click', toggleClase);
// });

const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const contenedores = document.querySelectorAll('.contenedor');

const toggleClase = (event) => {
  const caja = event.target;
  caja.classList.toggle('activa');
};

// Click boton 1
boton1.addEventListener('click', () => {
  // Agregamos el evento a todas las cajas
  contenedores.forEach(contenedor => {
    const cajas = contenedor.querySelectorAll('.caja');
    cajas.forEach(caja => {
      caja.addEventListener('click', toggleClase);
    });
  });
});

// Click boton 2
boton2.addEventListener('click', () => {
  // Eliminamos el evento de todas las cajas
  contenedores.forEach(contenedor => {
    const cajas = contenedor.querySelectorAll('.caja');
    cajas.forEach(caja => {
      caja.removeEventListener('click', toggleClase);
    });
  });
});
