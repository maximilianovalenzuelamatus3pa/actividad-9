const input = document.querySelector("#input-1");
const botonEjecutar = document.querySelector("#run-button");
const resultado = document.querySelector("#demo-output");

const mensajes = {
    1: "Eres genial.",
    2: "Vas muy bien.",
    3: "Excelente trabajo.",
    4: "Sigue así.",
    5: "Lo estás haciendo muy bien.",
    6: "Cada vez mejor.",
    7: "Gran esfuerzo.",
    8: "Ya casi lo logras.",
    9: "Un paso más.",
    10: "Lo lograste, eres increíble."
};

botonEjecutar.addEventListener("click", () => {
    const valor = Number(input.value);

    if (!Number.isInteger(valor) || valor < 1 || valor > 10) {
        resultado.textContent = "Escribe un número entero del 1 al 10.";
        return;
    }

    resultado.textContent = mensajes[valor];
});
