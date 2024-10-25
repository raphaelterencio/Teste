// Função para formatar numero de telefone 
document.getElementById('whatsapp-input').addEventListener('input', function (e) {
    let input = e.target.value;
    
    // Remove tudo que não seja número
    input = input.replace(/\D/g, '');
    
    // Adiciona o "+" no início se ainda não estiver presente
    if (!input.startsWith("+")) {
        input = "+" + input;
    }
    
    // Aplica a máscara: +00 00 0000-0000
    input = input
        .replace(/^(\+\d{2})(\d)/, '$1 $2') // +00  -> +00 (espaço)
        .replace(/(\d{2})(\d)/, '$1 $2')    // +00 00 -> +00 00 (espaço)
        .replace(/(\d{5})(\d)/, '$1-$2')    // +00 00 0000 -> +00 00 0000-0000

    // Limita a 15 caracteres (tamanho máximo do telefone no formato)
    if (input.length > 17) {
        input = input.substring(0, 16);
    }

    // Atualiza o campo de entrada com o valor formatado
    e.target.value = input;


     // Verifica se está completo e aplica a classe para animação
     const startButton = document.querySelector('.start-button');
    if (input.length === 17) { // Tamanho total do formato +00 00 0000-0000 é 17 caracteres
        e.target.classList.add('input-complete');
        startButton.disabled = false; // Ativa o botão
        startButton.classList.remove('disabled'); // Remove o estilo cinza
    } else {
        e.target.classList.remove('input-complete');
        startButton.disabled = true; // Desativa o botão
        startButton.classList.add('disabled'); // Adiciona o estilo cinza
    }
});
//FIM

//AREA PARA SOM DE CONFIRMAÇÃO DO STAR
// Cria um novo objeto de áudio
const clickSound = new Audio('checkSound.mp3'); // Certifique-se de usar o caminho correto

// // Verifica se o som está carregado
// clickSound.addEventListener('canplaythrough', function() {
//     console.log("O som foi carregado com sucesso.");
// }, false);

// Adiciona um evento de clique ao botão "Start"
document.querySelector('.start-button').addEventListener('click', function () {
    // console.log("Botão clicado"); // Verifica se o evento está funcionando
    clickSound.currentTime = 0; // Reinicia o som para começar do início sempre
    clickSound.play().catch(function(error) {
        // console.log("Erro ao reproduzir o som:", error);
    });
});
//FIM





// // Função para obter o valor do telefone sem formatação
// function getCleanPhoneNumber() {
//     const input = document.getElementById('whatsapp-input').value;
//     return input.replace(/\D/g, ''); // Remove todos os não-numéricos
// }

// // Exemplo de uso ao clicar no botão "Start"
// document.querySelector('.start-button').addEventListener('click', function () {
//     const cleanPhone = getCleanPhoneNumber();
//     alert("Número limpo: " + cleanPhone);
// });
