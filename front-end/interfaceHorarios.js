
// Função para destacar o dia atual
function highlightCurrentDay() {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const today = new Date().getDay();
    if (today > 0 && today < 6) { // Segunda a Sexta
        const cells = document.querySelectorAll(`td:nth-child(${today + 2})`);
        cells.forEach(cell => cell.style.backgroundColor = '#f7f7f7');
    }
}

// Função para destacar horário atual
function highlightCurrentTime() {
    const now = new Date();
    const currentTime = now.getHours() * 100 + now.getMinutes();

    const rows = document.querySelectorAll('.table tr');
    rows.forEach(row => {
        const startTime = row.cells[0]?.textContent;
        const endTime = row.cells[1]?.textContent;

        if (startTime && endTime) {
            const start = parseInt(startTime.replace('h', '')) * 100;
            const end = parseInt(endTime.replace('h', '')) * 100;

            if (currentTime >= start && currentTime <= end) {
                row.style.backgroundColor = '#f7f7f7';
            }
        }
    });
}

// Função para mostrar relógio digital
function updateClock() {
    const clockDiv = document.createElement('div');
    clockDiv.id = 'clock';
    clockDiv.style.cssText = 'position: fixed; top: 20px; right: 20px; font-size: 1.2em; font-weight: bold;';
    document.body.appendChild(clockDiv);

    setInterval(() => {
        const now = new Date();
        clockDiv.textContent = now.toLocaleTimeString();
    }, 1000);
}

// Inicializar todas as funcionalidades
document.addEventListener('DOMContentLoaded', () => {
    highlightCurrentDay();
    highlightCurrentTime();
    updateClock();

    // Atualizar highlight do horário a cada minuto
    setInterval(highlightCurrentTime, 60000);
});
