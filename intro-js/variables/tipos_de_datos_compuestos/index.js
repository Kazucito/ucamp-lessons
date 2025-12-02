//Tipos de datos compuestos - contienen dos o mas tipos de datos
//1.-Arreglos: Son colexiones de elementos 
let nombres = new Array('yo','tu','el') //Coleccion de cadenas de texto

//Primitivo
let nombre = "yo" //un solo string o una sola cadena de texto
//console.log(`Hola soy ${nombre}`)

//2.-Objetos:  Son colecciones de datos de un solo elemento/atributos
const pedro ={
    nombre: 'Pedro', //atributo nombre 
    edad: 25,
    premium: false,
    genero: 'Hombre'
}

const tu = {
    nombre: 'Tu', //atributo nombre 
    edad: 25,
    premium: true,
    genero: 'Hombre'
}

const el ={
    nombre: 'El', //atributo nombre 
    edad: 25,
    premium: false,
    genero: 'Hombre'
}

//Arreglo de usuarios
const usuarios = [pedro, tu, el] //Coleccion de objetos