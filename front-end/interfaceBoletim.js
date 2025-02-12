const disciplinas = [
    {
        codigo: "APS42A",
        nome: "Análise e Projeto de Sistemas",
        professor: "Laudelino Bastos",
        infos: {
            aulasPrevistas: 60,
            aulasDadas: 28,
            faltas: 0,
            limiteFaltas: 12,
            frequencia: 100,
            nota: "Indisponível",
            status: "Cursando"
        }
    },
    { codigo: "SO42A", nome: "Sistemas Operacionais", professor: "Professor 2" },
    { codigo: "BD42A", nome: "Banco de Dados", professor: "Professor 3" }
];

function criarInfoBox(infos) {
    return `
        <div class="container-box">
            <div class="item">
                <div class="icon">A</div>
                <p>Aulas Previstas:</p>
                <p style="font-size: 0.85em; text-align: right;">${infos.aulasPrevistas}</p>
            </div>
                <div class="item">
                <div class="icon">A</div>
                <p>Aulas Dadas:</p>
                <p style="font-size: 0.85em; text-align: right;">${infos.aulasDadas}</p>
            </div>
                <div class="item">
                <div class="icon">F</div>
                <p>Faltas:</p>
                <p style="font-size: 0.85em; text-align: right;">${infos.faltas}</p>
            </div>
                <div class="item">
                <div class="icon">L</div>
                <p>Limite de Faltas Previsto:</p>
                <p style="font-size: 0.85em; text-align: right;">${infos.limiteFaltas}</p>
            </div>
                <div class="item">
                <div class="icon">F</div>
                <p>Frequência (%):</p>
                <p style="font-size: 0.85em; text-align: right;">${infos.frequencia}</p>
            </div>
                <div class="item">
                <div class="icon">N</div>
                <p>Nota:</p>
                <p style="font-size: 0.85em; text-align: right;">${infos.nota}</p>
            </div>
                <div class="item">
                <div class="icon">S</div>
                <p>Status:</p>
                <p style="font-size: 0.85em; text-align: right;">${infos.status}</p>
            </div>
        </div>
    `;
}

function criarContainerDisciplina(disciplina) {
    const container = document.createElement('div');
    container.className = 'container-disc';
    container.innerHTML = `
        <p>${disciplina.codigo} - ${disciplina.nome}</p>
        <p style="font-size: 0.85em;">${disciplina.professor}</p>
    `;

    container.addEventListener('click', function () {
        const contentWrapper = document.querySelector('.content-wrapper');
        const infosContainer = document.getElementById('infos-container');
        const todosContainers = document.querySelectorAll('.container-disc');

        if (!contentWrapper.classList.contains('active')) {
            // Mostrar infos e reduzir todos os containers
            contentWrapper.classList.add('active');
            todosContainers.forEach(cont => cont.classList.add('active'));
            infosContainer.innerHTML = criarInfoBox(disciplina.infos);
            infosContainer.classList.add('active');

            setTimeout(() => {
                const containerBox = infosContainer.querySelector('.container-box');
                containerBox.classList.add('active');
            }, 100);
        } else {
            // Esconder infos e restaurar tamanho de todos os containers
            infosContainer.classList.remove('active');
            contentWrapper.classList.remove('active');
            todosContainers.forEach(cont => cont.classList.remove('active'));

            setTimeout(() => {
                infosContainer.innerHTML = '';
            }, 1000); // Aumentado para 2 segundos
        }
    });

    return container;
}

function inicializarDisciplinas() {
    const disciplinasContainer = document.getElementById('disciplinas-container');
    disciplinas.forEach(disciplina => {
        disciplinasContainer.appendChild(criarContainerDisciplina(disciplina));
    });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', inicializarDisciplinas);