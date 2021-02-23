1. Desenvolver a classe Cliente, contendo como atributos: nome, cpf e uma conta (apenas para simplificar), e seus respectivos métodos get e set;
2. Desenvolver a classe Clientes, que armazenará todos os clientes do banco num array de clientes (atributo da classe), e terá os seguintes métodos:
   2.1 inserir, que recebe um parâmetro do tipo Cliente inserirá um cliente no array de clientes da classe Clientes
   2.2 remover, que recebe um cpf e removerá o cliente daquele cpf, se existir
   2.3 listar, que devolverá um array de Cliente
   2.4 pesquisar, que receberá o cpf do cliente e devolverá o cliente encontrado (se encontrar)
3. Alterar o arquivo app.ts para criar um objeto da classe Clientes e inserir clientes dentro, listar, remover e pesquisar (pode fazer o código diretamente no app.ts e imprimir no console o resultado)
4. Criar o html clientes.html, que terá os inputs para acrescentar para inserir um novo cliente, e inserirá as referências para os arquivos .js necessários
5. Desenvolver a classe ClienteController, que fará a ponte entre a tela e as ações que podem ser feitas em clientes
6. Desenvolver a classe ClienteEspecial, que herda de Cliente e tem uma lista de dependentes (array de Cliente) (mas a tela de Cliente não precisa pensar em colocar os dependentes, apenas um cliente básico)
