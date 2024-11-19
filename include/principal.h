#pragma once
#include "pessoa.h"
#include "professor.h"
#include "aluno.h"
#include "disciplina.h"
#include "listaPessoa.h"
#include "universidade.h"

class Principal
{
private:
    Professor simao;
    Professor einstein;
    Professor newton;

    Universidade utfpr;

    Departamento daeln;
    Departamento dainf;
    Departamento damat;

    Disciplina logica;
    Disciplina tecProg;
    Disciplina gaal;
    Disciplina fsi;
    Disciplina socio;
    Disciplina ed1;
    
    Aluno ana;
    Aluno beto;
    Aluno carla;

    ListaPessoa objListaPessoas;
    
public:
    Principal();
    ~Principal();
    void inicializaUniversidade();
    void inicializaDepartamentos();
    void inicializaProfessores();
    void inicializaDisciplinas();
    void inicializaAlunos();
    void calculaIdades();
    void imprimeDadosProfs();
    void imprimeDptos();
    void imprimeDisciplinas();
    void imprimeAlunos();
    void executar(); //função que executa todos os passos que antes eram executados na main
};