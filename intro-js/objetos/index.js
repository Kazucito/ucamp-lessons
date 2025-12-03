//Acceso a elementos(atributos) de un objeto 
const usuario = {
    nombre:"Yo",
    edad: 25,
    genero: "Masculino"
}

//Acceso por punto
console.log(`Me llamo ${usuario.nombre} y tengo ${usuario.edad} años`) //al poner el punto te da acceso a los atributos disponibles 

//Acceso por desestructuracion
const  {genero, nombre, edad } = usuario
console.log(`Me llamo ${nombre} y tengo ${edad} años`)