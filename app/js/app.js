/* Alterar o arquivo app.ts para criar um objeto da classe Clientes e inserir
clientes dentro, listar, remover e pesquisar (pode fazer o código diretamente no app.ts e imprimir no console o resultado) */
let clienteController = new ClienteController();
const cl = new Clientes();
const c1 = new Conta('1', 100);
const c2 = new Conta('2', 200);
cl.inserir(new Cliente('Maria', 11100322311, c1));
cl.inserir(new Cliente('Carlos', 20022222211, c2));
console.log(cl.pesquisar(11100322311));
console.log(cl.pesquisar(20022222211));
cl.remover(20022222211);
let lista = cl.listar();
for (let i in lista) {
    console.log(lista[i]);
}
cl.remover(11100322311);
