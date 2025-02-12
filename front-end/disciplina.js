import { Professor } from "./professor.js";
import { Aluno } from "./aluno.js";
import { Matricula } from "./matricula.js";

//Declaração da classe disciplina
export class Disciplina
{
    //Atributos padrão
    #nome;
    #codigo;
    #departamento;
    #cargaHoraria;
    #qtddAulas;
    #limiteFaltas;
    #professor = null;
    #listaMatriculas = [];

    constructor(nome, codigo, dpto, ch, qtddAulas, professor)
    {
        this.#nome = nome;
        this.#codigo = codigo;
        this.#departamento = dpto;
        this.#cargaHoraria = ch;
        this.#qtddAulas = qtddAulas;
        this.#limiteFaltas = this.calculaLimiteFaltas(qtddAulas);

        this.setProfessor(professor);
    }

    getNome() { return this.#nome; }

    getCodigo() { return this.#codigo; }

    getDepartamento() { return this.#departamento; }

    getCargaHoraria() { return this.#cargaHoraria; }

    getQtddAulas() { return this.#qtddAulas; }

    getLimiteFaltas() { return this.#limiteFaltas; }

    calculaLimiteFaltas(qtddAulas) { return Math.floor(qtddAulas*0.25); }

    getProfessor() { return this.#professor; }

    setProfessor(valor) 
    { 
        this.#professor = valor;
        this.#professor.adicionarDisciplina(this);
    }

    matricularAluno(aluno)
    {
        let mat = new Matricula(aluno, this);

        this.#listaMatriculas.push(mat);
        aluno.addDisciplina(mat);
    }

    mostrarInfos()
    {
        return this.#codigo +
               " - " + this.#nome +
               " | " + this.#departamento +
               " Carga Horária: " + this.#cargaHoraria +
               " Limite de Faltas: " + this.#limiteFaltas;
    }
}