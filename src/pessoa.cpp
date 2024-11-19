#include "pessoa.h"
#include <iostream>
using namespace std;

int Pessoa::contPessoas = 0;

Pessoa::Pessoa(const string n){
    nome = n;
    id = ++contPessoas;
}

Pessoa::~Pessoa(){
    nome = "";
    id = -1;
    contPessoas--;
}

void Pessoa::setNome(const string n)
{
    nome = n;
}

const string Pessoa::getNome()
{
    return nome;
}


const int Pessoa::getId()
{
    return id;
}