class ClienteController {

    private _inputNumero: HTMLInputElement;
    private _inputSaldo: HTMLInputElement;
    private _inputNome: HTMLInputElement;
    private _inputCpf: HTMLInputElement;

    private _contas: Contas;
    private _clientes : Clientes;

    constructor() {
        this._inputNumero =
            <HTMLInputElement>document.querySelector("#cliente");
        this._inputSaldo =
            <HTMLInputElement>document.querySelector("#saldo");
        this._inputNome=
            <HTMLInputElement>document.querySelector("#nome");
        this._inputCpf=
            <HTMLInputElement>document.querySelector("#cpf");
        this._contas = new Contas();
        this._clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente(this._inputNome.value, parseInt(this._inputCpf.value),new Conta(this._inputNumero.value,
            parseFloat(this._inputSaldo.value)));

        this._clientes.inserir(novoCliente);
        this.inserirContaNoHTML(novoCliente);
    }

    listar() {
        this._clientes.listar().forEach(
            cliente => {
                this.inserirContaNoHTML(cliente);
            }
        );
    }

    inserirContaNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this._clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }


}
