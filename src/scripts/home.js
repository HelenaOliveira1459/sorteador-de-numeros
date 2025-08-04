// A função que vai sortear e mudar de página
function sortearENavegar() {
    // ... (seu código de sorteio)
    console.log("A função foi chamada!"); // Verifique isso no console do navegador
    window.location.href = "result.html";
}

// Pega o botão do HTML pelo seu ID
const botaoSortear = document.getElementById('drawNumber');

// Adiciona o "ouvinte" de clique ao botão
if (botaoSortear) {
    botaoSortear.addEventListener('click', sortearENavegar);
}