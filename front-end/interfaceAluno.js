document.addEventListener('DOMContentLoaded', function () {
    const botaoBoletim = document.getElementById('botao-boletim');
    if (botaoBoletim) {
        botaoBoletim.addEventListener('click', function () {
            window.location.href = './interfaceBoletim.html';
        });
    }

    // Initially hide the "informação da disciplina" section
    const boletimMostrado = document.querySelector('.boletim-mostrado');
    if (boletimMostrado) {
        boletimMostrado.classList.remove('show');
        boletimMostrado.style.display = 'none';
    }
});