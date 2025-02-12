export class Usuario
{
    //Atributos privados para proteção
    #nome;
    #cpf;
    #login;
    #senha;
    static #idSistema = 0;
    #idUsuario;

    constructor(nome, cpf, login, senha)
    {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#login = login;
        this.#senha = senha;

        Usuario.#idSistema++;
        this.#idUsuario = Usuario.#idSistema;
    }

    getNome() { return this.#nome; }

    getCpf() { return this.#cpf; }

    getLogin() { return this.#login;}

    static getIdSistema() { return Usuario.#idSistema; }

    getIdUsuario() { return this.#idUsuario; }

    //Confere se a senha digitada confere com a senha do usuário
    conferirSenha(senha) {return senha == this.#senha; }

    //Função para testes
    mostrarInfos()
    {
        return "Nome: " + this.#nome +
               " CPF: " + this.#cpf +
               " ID: " + Usuario.#idSistema;
    }
}

//export default Usuario;