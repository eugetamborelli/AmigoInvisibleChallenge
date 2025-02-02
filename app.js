
//Array para almacenar el listado de amigos:
let amigos = [];

//Función para agregar amigos al array, verificar que el nombre no sea ingresado en blanco y emitir un alerta:
function agregarAmigo(){

    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); //remover espacios.

    if (nombreAmigo === "") {
        alert("Has ingresado un nombre en blanco, por favor ingresa un nombre válido."); 
    } else {
        amigos.push(nombreAmigo);

        // Crear un elemento de lista y agregarlo a la lista de amigos
        const listaAmigos = document.getElementById("listaAmigos");
        const li = document.createElement("li");
        li.textContent = nombreAmigo;
        listaAmigos.appendChild(li);


        // Limpiar el campo de texto
        inputAmigo.value = "";
        
    }
};

function sortearAmigo() {
    if (amigos.length === 0) {
        // Alerta si no hay amigos en la lista
        alert("La lista está vacía. Agrega al menos un amigo para realizar el sorteo.");
    } else {
        // Seleccionar un nombre al azar
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];

        // Mostrar el resultado en el contenedor de resultados
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
    }
}

