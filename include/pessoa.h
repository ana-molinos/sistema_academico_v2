#pragma once
#include <string.h>

class Pessoa
{

protected:
    string nome;
    int id;
    static int contPessoas;

public:
    Pessoa(const string n = "");
    virtual ~Pessoa();

    void setNome(const string n);
    const string getNome();

    const int getId();
};