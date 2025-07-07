document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('meuBotao');
    const mensagem = document.getElementById('mensagemOculta');

    if (botao && mensagem) { // Verifica se os elementos foram encontrados
        botao.addEventListener('click', function() {
            mensagem.classList.toggle('mensagem-visivel');

            if (mensagem.classList.contains('mensagem-visivel')) {
                botao.textContent = 'Ocultar Mensagem';
            } else {
                botao.textContent = 'Clique para uma mensagem!';
            }
        });
    } else {
        console.error("Erro: Botão ou mensagem não encontrados no DOM.");
    }
});

