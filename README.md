# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### O Projeto está disponível em:
https://sogo-selection-test.vercel.app/

Para rodar o projeto, pode rodar:

### Clonar o projeto
Rode o comando `git clone https://github.com/victor1822/sogo-selection-test.git` para clonar esse projeto para seu diretório local, na pasta de sua preferência 

### `yarn`
para instalar as dependências 

### `yarn start`
para executar o projeto assim que terminar de baixar a node modules.

Abrir o seguinte link: [http://localhost:3000](http://localhost:3000) para ver no seu browser.

A página recarregará com mudanças de código.\
Também imprime erros no console.

### Este código foi desenvolvido para atender às tarefas da seleção da SOGO tecnologia

#### O usuario pudesse criar um novo contrato
O contrato deve ter uma pessoa com nome, email, cpf e endereço completo, além disso, o contrato deve ter número, data de registro e data de validade.
Aproveitei para consumir a API do VIACEP para preenchimento automático de endereços, usando o axios, está na pasta services o serviço.
Além disso, como pedido, deveria ter na aplicação uma notificação de erro e de alerta, coloquei as notificações de erro, caso o usuário tente cadastrar um fornecedor com o mesmo nome, email, ou cpf, ou um contrato com o mesmo número. O teste exigia também a responsividade do formulario para que para larguras maiores que 1024px exibisse o  formulário com campos em duplas, caso contrário, apenas um por linha. Assim foi feito usando as media queries do css. 
Para submeter os formulários, utilizei o useForm() do react-hook-form e o yup para validação dos dados dos formulários.
No formulário de criar novo contrato usei useEffects para disparar as mensagens de erro, caso o usuario tentasse cadastrar um novo contrato com uma pessoa já cadastada, ou com um número igual a de outro contrato.

#### O usuario tem uma dasboard
Criei uma profile page com um menu lateral para o usuario escolher que opção exibir. Criei um state do redux para guardar esse state global definindo qual componente seria exibido em tela(substitui o useContext pelo redux). Para os popups de formulário e as notificações também usei um state do redux separado para isso. Os arquivos das actions, dos reducers estão todos na pasta ducks, que está dentro da pasta src da raíz do projeto. Como os contratos são exibidos em vários componentes diferentes, pra não precisar fazer prop drilling, eu criei um state para guardar os contratos e a medida que fosse criando novos contratos, ia salvando eles na cache do navegador, usando a lib 'js-cookie'. Dessa forma, caso o usuario desse um refresh no navegador, recarregaria as invormações anteriores. 
##### O menu lateral do dashboard tem largura maxima de 150px conforme o pedido, fiz isso usando a propriedade max-width do css, acompanhado de um width: com uma porcentagem, deessa forma, ele fica responsivo e ao mesmo tempo não passa do valor pedido.

#### O usuario poderia ver uma pagina de dashboard com as estatisticas principais, número de contratos cadastrados, contratos à vencer, tempo de prestação de serviços, a primeira opção do menu atende a esta expectativa.

#### O usuario deve ter uma lista paginada com filtros por vencimento de contrato. 
Criei essa busca com esses filtros e com o nome do fornecedor para facilitar a busca ainda mais. Foi nesta página que mais usei o useState para manipular o estado da página de busca, dependendo das opções escolhidas pelo usuário. Aqui aproveitei para exibir uma notificação de warning em caso do usuario escolher os filtros de modo que não tenha registros que correspondam aos valores da busca.

#### Essa é apenas uma visão geral do que foi feito, infelizmente não tive muito tempo para detalhar melhor o que foi feito, mas se quiser marcar um papo pra eu explicar como eu fiz as coisas, sem problema! Agradeço a atenção e até mais! 
