/*2. Desenvolver a classe Clientes, que armazenará todos os clientes do banco num array de clientes (atributo da classe), e terá os seguintes métodos: */
class Clientes {
    constructor() {
        this._clientes = new Array();
        const c1 = new Cliente('João', 100, new Conta('1', 100));
        const c2 = new Cliente('Jose', 200, new Conta('2', 200));
        this._clientes.push(c1, c2);
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        const clienteRemover = this.pesquisar(cpf);
        if (clienteRemover) {
            const indiceCliente = this._clientes.indexOf(clienteRemover);
            if (indiceCliente > -1) {
                this._clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this._clientes.find(cliente => cliente.cpf == cpf);
    }
    listar() {
        return this._clientes;
    }
}
