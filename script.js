document.addEventListener("DOMContentLoaded", function() {
    const numeroSecreto = generarNumeroSecreto();
    const intentos = [];

    function generarNumeroSecreto() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function esNumeroValido(numero) {
        return !isNaN(numero) && Number.isInteger(Number(numero)) && numero >= 1 && numero <= 100;
    }

    window.verificarNumero = function() {
        const guessInput = document.getElementById("guessInput");
        const guessList = document.getElementById("guessList");
        const message = document.getElementById("message");

        let intentoUsuario = guessInput.value;

        if (!esNumeroValido(intentoUsuario)) {
            message.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
            return;
        }

        intentoUsuario = parseInt(intentoUsuario, 10);
        intentos.push(intentoUsuario);

        if (intentoUsuario === numeroSecreto) {
            message.textContent = "Felicidades, adivinaste el número secreto.";
            guessList.innerHTML = "Lista de números introducidos: " + intentos.join(', ');
            guessInput.disabled = true;
        } else {
            message.textContent = "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
        }

        guessInput.value = "";
    }

    const guessInput = document.getElementById("guessInput");

    guessInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            verificarNumero();
        }
    });
});
