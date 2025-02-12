document.getElementById('plano-ensino').addEventListener('click', function () {
    const infoSection = document.querySelector('.item-mostrado');
    if (infoSection.classList.contains('show')) {
        infoSection.classList.remove('show');
        setTimeout(() => {
            infoSection.style.display = 'none';
        }, 500); // Match the duration of the CSS transition
    } else {
        infoSection.style.display = 'flex';
        setTimeout(() => {
            infoSection.classList.add('show');
        }, 10); // Small delay to ensure the display property is set before adding the class
    }
});

// Initially hide the "informação da disciplina" section
document.querySelector('.item-mostrado').classList.remove('show');
document.querySelector('.item-mostrado').style.display = 'none';
