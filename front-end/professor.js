document.getElementById("pagina-disciplinas").addEventListener("click", function () {
    const containerBox = document.querySelector(".container-box");
    if (containerBox.style.opacity === "0" || containerBox.style.opacity === "") {
        containerBox.style.display = "flex";
        setTimeout(() => {
            containerBox.style.opacity = "1";
        }, 10); // Small delay to ensure display is set before opacity transition
    } else {
        containerBox.style.opacity = "0";
        setTimeout(() => {
            containerBox.style.display = "none";
        }, 500); // Match the transition duration in CSS
    }
});

const items = [
    { name: "Análise e Projeto de Sistemas", url: "aps.html" },
    { name: "Disciplina 2", url: "pagina2.html" },
    { name: "Disciplina 3", url: "pagina3.html" }
];

const containerBox = document.querySelector(".container-box");
containerBox.innerHTML = ""; // Clear existing content

items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.innerHTML = `
        <div class="icon">${item.name.charAt(0)}</div>
        <p>${item.name}</p>
    `;
    itemDiv.addEventListener("click", () => {
        window.open(item.url, "_blank");
    });
    containerBox.appendChild(itemDiv);
});