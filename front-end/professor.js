import { Usuario } from "./usuario.js";
import { Disciplina } from "./disciplina.js";

export class Professor extends Usuario
{
    //Atributos privados para proteção
    #departamento;
    #disciplinasLecionadas = []; //Um array de disciplinas que o professor leciona

    constructor(nome, cpf, login, senha, departamento)
    {
        super(nome, cpf, login, senha);

        this.#departamento = departamento;
    }

    getDepartamento() { return this.#departamento; }

    adicionarDisciplina(disciplina) { this.#disciplinasLecionadas.push(disciplina); }

    //Sobrecarga do método mostrar infos
    mostrarInfos()
    {
        return "Nome: " + this.getNome() +
               " CPF: " + this.getCpf() +
               " ID: "  + this.getIdUsuario();
    }

    listaDisciplinas()
    {
        console.log(this.#disciplinasLecionadas);
    }
}