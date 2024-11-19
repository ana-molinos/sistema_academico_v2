#pragma once
#include "pessoa.h"

class Aluno : public Pessoa
{
private:
    int raAluno;
    float coefRend;
    //adicionar uma lista de disciplinas do aluno (necessario p calcular o cr)
    //listaDisciplinaAluno disciplinasCursadas;

public:
    Aluno(const string n = "");
    ~Aluno();

    const int getRaAluno();

    const float getCoefRend();
    const float calculaCoefRend();
};