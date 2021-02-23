/* Alterar o arquivo app.ts para criar um objeto da classe Clientes e inserir
clientes dentro, listar, remover e pesquisar (pode fazer o código diretamente no app.ts e imprimir no console o resultado) */
let clienteController = new ClienteController();
clienteController.listar();
const cl = new Clientes();
const c1 = new Conta('1', 100);
const c2 = new Conta('2', 200);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
cl.inserir(new Cliente('Maria', 100, c1));
cl.inserir(new Cliente('Carlos', 200, c2));
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
