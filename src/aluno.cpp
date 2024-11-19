#include "aluno.h"
#include <iostream>
#include "minhaString.h"
using namespace std;


Aluno::Aluno(const string n = ""):
Pessoa(n)
{
    raAluno = 2000 + id;
    coefRend = calculaCoefRend();
}

Aluno::~Aluno()
{
    nome = "";
    contPessoas--;
    raAluno = -1;
    coefRend = -1.0;
}

const int Aluno::getRaAluno()
{
    return raAluno;
}

const float Aluno::getCoefRend()
{
    return coefRend;
}

const float Aluno::calculaCoefRend()
{
    //desenvolver algoritmo do calculo
}
