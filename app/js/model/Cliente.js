/* Desenvolver a classe Cliente, contendo como atributos:
 nome, cpf e uma conta (apenas para simplificar), e seus respectivos métodos get e set;*/
class Cliente {
    constructor(_nome, _cpf, _conta) {
        this._nome = _nome;
        this._cpf = _cpf;
        this._conta = _conta;
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
    set nome(nome) {
        this._nome = nome;
    }
    toString() {
        return `
         Nome: ${this._nome}
         Cpf: ${this._cpf} 
         Número da Conta: ${this._conta.numero}
         Saldo: ${this._conta.saldo}`;
    }
}
