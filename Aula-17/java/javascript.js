function limpeza() {
    const input = document.getElementById("input");
    input.value = "";   
}

const fotos = ["praia-01.jpg", "praia-02.jpg", "praia-03.jpg", "praia-04.jpg", "praia-05.jpg"];
const img = document.getElementById("foto");
const btnParar = document.getElementById("Parar");
const label = document.querySelector("label[for='nome']");
const btnAvancar = document.getElementById("avancar");

function slideShow() {
    return setInterval(() => {
        const foto = fotos[Math.floor(Math.random() * fotos.length)];
        img.src = `./img/${foto}`;
        label.textContent = `Foto atual: ${foto}`;
    },4000)
}

btnParar.addEventListener("click", () => {
    clearInterval(intervalId);
    label.textContent = "Slide show parado.";
});

btnAvancar.addEventListener("click", () => {
    window.open("preview-IA.html", "_blank");
});

const intervalId = slideShow();