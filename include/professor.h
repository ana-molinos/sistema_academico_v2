#pragma once
#include "pessoa.h"
#include "departamento.h"

class Professor : public Pessoa
{
private:
    Departamento *pDpto;
    //adicionar lista de disciplinas que o professor leciona
    //listaDisciplinaProfessor disciplinasLecionadas;

public:
    Professor(const string n = "");
    ~Professor();
    
    void setDepartamento(Departamento* pDp);
    Departamento* getDepartamento();
};