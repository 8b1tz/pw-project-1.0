/*Desenvolver a classe ClienteEspecial,
 que herda de Cliente e tem uma lista de dependentes (array de Cliente)
 (mas a tela de Cliente não precisa pensar em colocar os dependentes, apenas um cliente básico)
*/
class ClienteEspecial extends Cliente {
    constructor(_nome, _cpf, _conta, _dependetes = []) {
        super(_nome, _cpf, _conta);
        this._dependetes = _dependetes;
    }
}
