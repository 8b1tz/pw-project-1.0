class ClienteEspecial extends Cliente {
    constructor() {
        super(...arguments);
        this._dependentes = [];
    }
}
