/* Alterar o arquivo app.ts para criar um objeto da classe Clientes e inserir
clientes dentro, listar, remover e pesquisar (pode fazer o código diretamente no app.ts e imprimir no console o resultado) */
let clienteController = new ClienteController();
const cl = new Clientes();
const c1 = new Conta('1', 100);
const c2 = new Conta('2', 200);
cl.inserir(new Cliente('Maria', 100, c1));
cl.inserir(new Cliente('Carlos', 200, c2));
console.log(cl.pesquisar(200));
console.log(cl.listar());
cl.remover(100);
console.log(cl.listar());
cl.remover(200);
console.log(cl.listar());
