/* Desenvolver a classe Cliente, contendo como atributos:
 nome, cpf e uma conta (apenas para simplificar), e seus respectivos métodos get e set;*/

class Cliente {

    constructor(protected _nome: string,protected _cpf: number, protected _conta : Conta) {
     
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    get nome() {
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }


    toString(): string {
        return `
         Nome: ${this._nome}
         Cpf: ${this._cpf} 
         Número da Conta: ${this._conta.numero}
         Saldo: ${this._conta.saldo}`;
    }
}
