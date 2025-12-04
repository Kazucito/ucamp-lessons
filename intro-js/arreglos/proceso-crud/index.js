//CRUD con Arreglos y LocalStorage
//Elementos del DOM
const createContentButton = document.getElementById("crearContacto")

//1.-Crear mi coleccion
const contactos =[]

console.log(contactos)

//2.-Create: utilizando en metodo push
function createContact(contact/*objeto*/){
    let total = contactos.push(contact)
    console.log(`${total} contacto(s):`)
    console.log(contactos)
}

//ejecutar funcion createContact
/*createContact(
        {
        nombre: "maria",
        telefono: "0123456789",
        correo: "pruieba@gmail.com",
        direccion: "Av. Chilaquiles, col. Santa Maria la Rivera, No.15",
        cp: "55792"
        },
)*/

//Eventos del DOM
//Create
createContentButton.addEventListener("click", function(){
    createContact(
        {
        nombre: "maria",
        telefono: "0123456789",
        correo: "pruieba@gmail.com",
        direccion: "Av. Chilaquiles, col. Santa Maria la Rivera, No.15",
        cp: "55792"
        },
    )
})