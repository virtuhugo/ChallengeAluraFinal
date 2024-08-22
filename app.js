// Exibe uma mensagem de alerta quando a página é carregada
alert('Apenas letras minúsculas e sem acento.');

// Função chamada ao clicar no botão "Criptografar"
function cript() {
    const textarea = document.getElementById('inserirTexto');
    let texto = textarea.value.trim();

    // Verifica se o campo de texto está vazio
    if (texto === '') {
        const elementoFeedbackVazio = document.getElementById('feedbackVazio');
        elementoFeedbackVazio.style.display = "block";
        return;
    }

    // Realiza a substituição de letras por códigos
    texto = texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

    // Oculta a mensagem de feedback vazio
    const elementoFeedbackVazio = document.getElementById('feedbackVazio');
    elementoFeedbackVazio.style.display = "none";

    // Exibe o texto criptografado no mesmo elemento
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.style.display = "block";
    elementoResultado.innerText = texto;   
}

// Função chamada ao clicar no botão "Descriptografar"
function descript() {
    const textarea = document.getElementById('inserirTexto');
    let texto = textarea.value.trim();

    // Verifica se o campo de texto está vazio
    if (texto === '') {
        const elementoFeedbackVazio = document.getElementById('feedbackVazio');
        elementoFeedbackVazio.style.display = "block";
        return;
    }

    // Realiza a substituição de códigos por letras
    texto = texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

    // Oculta a mensagem de feedback vazio
    const elementoFeedbackVazio = document.getElementById('feedbackVazio');
    elementoFeedbackVazio.style.display = "none";

    // Exibe o texto descriptografado no mesmo elemento
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.style.display = "block";
    elementoResultado.innerText = texto;    
}
