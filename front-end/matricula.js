import { Aluno } from "./aluno.js";
import { Disciplina } from "./disciplina.js";

export class Matricula
{
    #qtddFaltas = 0;
    #parcial1 = 0.0;
    #parcial2 = 0.0;
    #recuperacao = 0.0;
    #media = 0.0;
    #aluno = null;
    #disciplina = null;
    #aprovado = false;

    constructor(aluno, disciplina)
    {
        this.#aluno = aluno;
        this.#disciplina = disciplina;
    }

    atualizaFaltas() { this.#qtddFaltas++; }
    getQtddFaltas() { return this.#qtddFaltas; }

    getParcial1() { return this.#parcial1; }
    setParcial1(valor) { this.#parcial1 = valor; }

    getParcial1() { return this.#parcial2; }
    setParcial1(valor) { this.#parcial2 = valor; }

    getRecuperacao() { return this.#recuperacao; }
    setRecuperacao(valor) { this.#recuperacao = valor; }

    calculaMedia()
    {
        this.#media = (this.#parcial1 + this.#parcial2)/2

        if(!this.aprovadoPorNota())
            this.#media = (Math.max(this.#parcial1, this.#parcial2) + this.#recuperacao)/2;

        if(this.aprovadoPorPresenca() && this.aprovadoPorNota())
            this.#aprovado = true;
    }

    getMedia() { return this.#media; }

    getAluno() { return this.#aluno; }

    getDisciplina() {return this.#disciplina; }

    aprovadoPorPresenca() { return this.#qtddFaltas <= this.#disciplina.getLimiteFaltas(); }

    aprovadoPorNota() { return this.#media >= 6.0; }

    getAprovado() { return this.#aprovado; }
}