let amigoSecreto = [];

function amigos() {
    agregarAmigo();
    actualizarLista();
    sortearAmigo();
}


function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if (amigo !== "") {
        creaLista(amigo);
    }
    else {
        alert("Por favor, ingresa un nombre válido.");
    }
}
        function creaLista(amigo) {
    amigoSecreto.push(amigo);
    document.getElementById("amigo").value = "";
    actualizarLista();
        }

function actualizarLista(){
// 1 Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
let listaAmigos = document.getElementById("listaAmigos");

// 2 Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
listaAmigos.innerHTML = "";

// 3 Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista para cada título.

listaLosNombres();
}
        function listaLosNombres(){
    for (let i = 0; i < amigoSecreto.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigoSecreto[i];
    listaAmigos.appendChild(li);
}
        }

function sortearAmigo(){
    // 1 Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
if (amigoSecreto.length === 0) {
    alert("No hay amigos disponibles para sortear.");
    }
// 2 Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
else {
    generaYMostrarAmigo();
    }
}

function generaYMostrarAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * amigoSecreto.length);
    // 3 Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
    let amigoSeleccionado = amigoSecreto[indiceAleatorio];
    // 4 Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "El amigo secreto es: " + amigoSeleccionado;
}
