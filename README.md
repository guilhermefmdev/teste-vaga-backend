# teste-vaga-backend
Seja bem vindo ao meu __Teste para vaga de Desenvolvedor Backend__!

Nesse teste, o objetivo era elaborar uma aplicação no estilo <i>RESTful</i> para o gerenciamento de um <i>e-comerce</i>.

# O que é possível fazer?
__Registro de:__
- [x] clientes
- [x] produtos
      
__Listagem de:__
- [x] clientes
- [x] produtos

__Exclusão de:__
- [x] clientes
- [x] produtos

Tendo o cliente cadastrado e os produtos já registrados, é possível realizar:
- [x] Criação de pedidos
- [x] Exlusão de pedidos

# Como utilizar?
Antes de tudo verifique se a conexão ao banco de dados `MongoDB` e suas dependências foi sucedida.

A listagem dos itens de cada módulo é dada pela requisição __GET__ às seguintes rotas:
- `/costumers` para a __listagem__ de __`clientes`__;
- `/products` para a __listagem__ de __`produtos`__;
- `/orders` para a __listagem__ de __`pedidos`__.

OBS: Caso não haja nenhum documento referente à requisição, a API retornará um `JSON` com uma mensagem indicando que nada foi encontrado.

As mesmas rotas se aplicam ao método __POST__:
- `/costumers` para o __registro__ de __`clientes`__;
- `/products` para o __registro__ de __`produtos`__;
- `/orders` para o __registro__ de __`pedidos`__.

E os campos preenchidos para cada módulo devem ser:
- Cliente: `nome`, `email`, `telefone` e `endereço`;
- Produto: `nome` e `preço`;
- Pedido: `ID do cliente` e `ID do produto`.

Também é possível excluir os itens com o método __DELETE__, inserindo o `_ID` do item desejado para a remoção na rota da request:
- `/costumers/:id` para a __remoção__ de __`clientes`__;
- `/products/:id` para a __remoção__  de __`produtos`__;
- `/orders/:id` para a __remoção__  de __`pedidos`__.
