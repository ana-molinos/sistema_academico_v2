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