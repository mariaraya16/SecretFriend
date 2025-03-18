//Autor: Maria Araya
//Date: 10-03-2025

let friends = []; // Arreglo para almacenar los amigos

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let nameInput = document.getElementById('amigo');
    let name = nameInput.value.trim(); // Eliminar espacios en blanco

    // Validar la entrada
    if (name === '') {
        alert('Por favor, inserte un nombre.');
        nameInput.classList.add('error'); // Agrega clase de error si el campo está vacío
        return; // Detiene la ejecución de la función
    }

    // Agregar el nombre al array de amigos
    friends.push(name);

    // Actualizar la lista en la interfaz
    actualizarLista();

    // Limpiar el campo de entrada
    nameInput.value = '';
    nameInput.classList.remove('error'); // Elimina la clase de error si estaba agregada
}


function actualizarLista() {
  // Obtener el elemento de la lista
  let listaAmigos = document.getElementById('listaAmigos');

  // Limpiar la lista existente
  listaAmigos.innerHTML = '';

  // Iterar sobre el array friends y agregar elementos <li>
  for (let i = 0; i < friends.length; i++) {
      let li = document.createElement('li');
      li.textContent = friends[i];

      // Botón para eliminar un amigo de la lista
      //let btnEliminar = document.createElement('button');
      //btnEliminar.textContent = '❌';
      //btnEliminar.classList.add('delete-button');
      //btnEliminar.onclick = function () {
        //  eliminarAmigo(i);
      //};

      //li.appendChild(btnEliminar);
      listaAmigos.appendChild(li);
  }
}

function eliminarAmigo(index) {
  // Eliminar el amigo del array
  friends.splice(index, 1);

  // Actualizar la lista después de eliminar un amigo
  actualizarLista();
}

function sortearAmigo() {
  // Validar que haya amigos en la lista
  if (friends.length === 0) {
      alert('No hay amigos en la lista para sortear.');
      return;
  }

  // Generar un indice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * friends.length);

  // Obtener el nombre sorteado
  let amigoSorteado = friends[indiceAleatorio];

  // Mostrar el resultado en la interfaz
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>🎉 ${amigoSorteado} ha sido seleccionado como amigo secreto! 🎁</li>`;
}





