document.addEventListener('DOMContentLoaded', () => {
    // Rango de números para el juego
    const rangoMinimo = 1;
    const rangoMaximo = 100;
    // Genera un número aleatorio entre rangoMinimo y rangoMaximo
    let numeroAleatorio = Math.floor(Math.random() * (rangoMaximo - rangoMinimo + 1)) + rangoMinimo;

    // Referencias a los elementos del DOM
    const entradaAdivinanza = document.getElementById('entradaAdivinanza');
    const botonAdivinar = document.getElementById('botonAdivinar');
    const mensaje = document.getElementById('mensaje');
    const botonReiniciar = document.getElementById('botonReiniciar');
    const pista = document.getElementById('pista');

    // Muestra una pista con la primera cifra del número aleatorio
    pista.textContent = `Pista: El número comienza con ${Math.floor(numeroAleatorio / 10)}.`;

    // Evento al hacer clic en el botón de adivinar
    botonAdivinar.addEventListener('click', () => {
        // Obtiene el valor introducido por el usuario
        const adivinanzaUsuario = Number(entradaAdivinanza.value);
        
        // Validación del número introducido
        if (adivinanzaUsuario < rangoMinimo || adivinanzaUsuario > rangoMaximo) {
            mensaje.textContent = `Por favor, introduce un número entre ${rangoMinimo} y ${rangoMaximo}.`;
        } else if (adivinanzaUsuario === numeroAleatorio) {
            mensaje.textContent = '¡Felicidades! Has adivinado el número.';
            botonAdivinar.disabled = true; // Desactiva el botón de adivinar
            botonReiniciar.style.display = 'inline-block'; // Muestra el botón de reiniciar
        } else if (adivinanzaUsuario < numeroAleatorio) {
            mensaje.textContent = 'El número es más alto. Intenta de nuevo.';
        } else {
            mensaje.textContent = 'El número es más bajo. Intenta de nuevo.';
        }
    });

    // Evento al hacer clic en el botón de reiniciar
    botonReiniciar.addEventListener('click', () => {
        // Genera un nuevo número aleatorio
        numeroAleatorio = Math.floor(Math.random() * (rangoMaximo - rangoMinimo + 1)) + rangoMinimo;
        // Actualiza la pista con la primera cifra del nuevo número
        pista.textContent = `Pista: El número comienza con ${Math.floor(numeroAleatorio / 10)}.`;
        // Limpia el campo de entrada y el mensaje
        entradaAdivinanza.value = '';
        mensaje.textContent = '';
        botonAdivinar.disabled = false; // Habilita el botón de adivinar
        botonReiniciar.style.display = 'none'; // Oculta el botón de reiniciar
    });
});
