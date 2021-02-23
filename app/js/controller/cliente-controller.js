class ClienteController {
    constructor() {
        this._inputNumero =
            document.querySelector("#conta");
        this._inputSaldo =
            document.querySelector("#saldo");
        this._inputNome =
            document.querySelector("#nome");
        this._inputCpf =
            document.querySelector("#cpf");
        this._contas = new Contas();
        this._clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novoCliente = new Cliente(this._inputNome.value, parseInt(this._inputCpf.value), new Conta(this._inputNumero.value, parseFloat(this._inputSaldo.value)));
        this._clientes.inserir(novoCliente);
        this.inserirContaNoHTML(novoCliente);
    }
    listar() {
        this._clientes.listar().forEach(cliente => {
            this.inserirContaNoHTML(cliente);
        });
    }
    inserirContaNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this._clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
