// seleciona o icone de alternancia e o campo de senha
const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    // alterna o tipo do campo de senha
    const isPasswordVisible = passwordInput.type === "text";
    passwordInput.type = isPasswordVisible ? "password" : "text";

    // alterna o icone (mostrar ou ocultar)
    togglePassword.classList.toggle("bx-show", isPasswordVisible);
    togglePassword.classList.toggle("bx-hide", !isPasswordVisible);
});

// validacao de login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulario
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "a1234567" && password === "1") {
        window.location.href = "professor.html";
    }

    else if (username === "a0123456" && password === "01234567") {
        window.location.href = "aluno.html";
    }

    else {
        alert("Usuário ou senha inválidos!");
    }
});

// //Teste -------------------------------------------------------------------------
// import { Usuario } from "./usuario.js";
// import { Professor } from "./professor.js";
// import { Disciplina } from "./disciplina.js";
// import { Aluno } from "./aluno.js";

// //cria e imprime dados de um usuário p/ teste
// let user = new Usuario("Usuário da Silva", "00000000000", "user", 11223344);

// console.log(user);
// document.getElementById("teste").innerHTML = user.mostrarInfos();

// //cria e imprime dados de um professor p teste
// let prof = new Professor("Laudelino Bastos", "12345678900", "lbastos@utfpr.edu.br", 12345678);

// console.log(prof);
// document.getElementById("teste").innerHTML += "\n\n" + prof.mostrarInfos();

// //cria e imprime dados de uma disciplina p teste
// let disc = new Disciplina("Análise e projeto de sistemas", "ICSG20", "DAINF", 45, 15, prof);

// console.log(disc);
// document.getElementById("teste").innerHTML += "\n\n" + disc.mostrarInfos();

// //cria uma seegunda disciplina associada ao mesmo prof
// let disc2 = new Disciplina("Qualquer Matéria", "ABC00", "DAINF", 45, 15, prof);

// //mostra todas as disciplinas q o professor leciona no console
// console.log(disc2);
// prof.listaDisciplinas();

// //cria 2 alunos e imprime
// let aluno1 = new Aluno("Ana Julia Molinos Leite da Silva", "09672263929", "anamolinos", "04052001");

// console.log(aluno1);
// document.getElementById("teste").innerHTML += "\n\n" + aluno1.mostrarInfos();

// let aluno2 = new Aluno("Julia Oliveira", "11111111111", "juloli", "87654321");

// console.log(aluno2);
// document.getElementById("teste").innerHTML += "\n\n" + aluno2.mostrarInfos();

// //matricula os alunos nas disciplinas
// disc.matricularAluno(aluno1);
// disc.matricularAluno(aluno2);

// console.log(disc);
// console.log(aluno1);