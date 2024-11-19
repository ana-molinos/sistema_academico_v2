#include "professor.h"
#include <iostream>
using namespace std;

Professor::Professor(const string n):
Pessoa(n)
{
    pDpto = NULL;
}

Professor::~Professor()
{
    nome = "";
    id = -1;
    contPessoas--;
    pDpto = NULL;
}


void Professor::setDepartamento(Departamento* pDp)
{
    if(pDp)
        pDpto = pDp;
}