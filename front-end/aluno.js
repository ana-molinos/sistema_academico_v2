import { Usuario } from "./usuario.js";

export class Aluno extends Usuario
{
    #registroAcademico
    #coeficienteRendimento = 0.0;
    #periodoAtual = 1;
    #disciplinasMatriculadas = [];

    constructor(nome, cpf, login, senha)
    {
        super(nome, cpf, login, senha);

        this.#registroAcademico = Usuario.getIdSistema() + 2000;
    }

    getRegistroAcademico() { return this.#registroAcademico; }

    atualizarCoeficienteRendimento()
    {
        //Adicionar lógica pra calculo do cr
    }

    getCoeficienteRendimento() { return this.#coeficienteRendimento; }

    atualizarPeriodoAtual() { this.#periodoAtual++; }

    getPeriodoAtual() { return this.#periodoAtual; }

    addDisciplina(disc)
    {
        this.#disciplinasMatriculadas.push(disc);
    }

    mostrarInfos()
    {
        return "Nome: " + this.getNome() +
               " CPF: " + this.getCpf() +
               " ID: "  + this.getIdUsuario();
    }
}