const paragrafos = document.getElementsByClassName("paragrafo");
const botao = document.getElementById("botao-sobre");

// Adiciona o evento de clique
botao.addEventListener("click", function() {
    // Esconde o primeiro parágrafo
    paragrafos[0].style.display = "none";

    // Exibe o segundo parágrafo
    paragrafos[1].style.display = "block";
});
