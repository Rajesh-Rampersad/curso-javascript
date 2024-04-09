/* 📌 Tipos de datos que podemos guardar en las variables:
	string - Cadena de Texto
	number - Numero
	boolean - Booleano (verdadero o falso)
	object - Objeto
	function - Funciones

	null - Valor nulo
	undefined - Valor sin definir
*/

// 📌 Cadena de Texto
// Pueden llevar comillas simples, comillas dobles  o backticks.
// Regularmente se escriben con comillas simples o backticks.
const nombre = 'Carlos Arturo';
const parrafo = "Este es un parrafo que usa 'comillas' simples";
const parrafo2 = 'Este es un parrafo que usa "comillas" dobles';
// const parrafo3 = 'Este es un parrafo que usa \'comillas\' simples';
// console.log(parrafo2.match(/es/g)); // Muestra todas las ocurrencias de la palabra "es".

// 📌 Numero
// Cualquier numero positivo o negativo, entero o decimal.
const numero = 4;
const numero2 = 4.123;

// 📌 Boleano
const usuarioConectado = true; // true o false
const mayorQue = 1 > 2; // False

// 📌 Arrays - Arreglos
// En javascript son un tipo de objeto. Esto es porque cuentan con propiedades y métodos.
// Los arreglos nos permiten guardar varios valores y cada valor puede ser de cualquier tipo.
const arreglo = ['Texto', 456, true, { propiedad: 'valor' }, [0, 1, 2, 3]];
console.log(arreglo[4]); // Accedemos a los elementos por su ind

// 📌 Objeto
// Los objetos nos permiten guardar informacion mediante parejas de claves y valores.

// En javascript existen 6 tipos de objetos:
// Object, Date, Array, String, Number, Boolean.
// Los objetos en javascript tienen propieades y valores.

// A las propiedades de un objeto les podemos asignar cualquier tipo de dato.
const persona = {
	// Propiedad: nombre
	// Valor: Carlos
	nombre1: 'Carlos',
	edad: 27,
	carro: {
		marca: '...',
		color: 'Negro',
	},
};
console.log(persona); // Accediendo a una propiedad dinamica

// 📌 Function
// Las funciones son bloques de codigo que podemos reutilizar.
function hola() {
	// console.log('Hola!');
}

hola();

// 📌 Null
// Normalmente lo usamos cuando queremos especificar que un valor sea nulo.

// 📌 Undefined
// Undefined se usa para indicarnos que un valor no esta definido.