# bootcamp-gostack-desafio05

<h1 align="center">
  <img src="https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67" width="85%">
</h1>

## 🚀 Indice

- 📓 [Sobre](#-Sobre)
- 👨‍💻 [Tecnologias utilizadas](#-Tecnologias-utilizadas)
- 📦 [Como baixar o projeto](#-Como-baixar-o-projeto)
- 🤝 [Considerações](#-Considerações)

## 📓 Sobre

Referência do projeto [Primeiro projeto Node.js](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-fundamentos-nodejs) da [Rocketseat](https://github.com/Rocketseat)

"Essa será uma aplicação para armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações."

### Rotas da aplicação

- **POST /transactions**: A rota deve receber title, value e type dentro do corpo da requisição, sendo type o tipo da transação, que deve ser income para entradas (depósitos) e outcome para saídas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro de um objeto com o seguinte formato :

```bash

{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}

```

- **GET /transactions**: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir:

```bash

{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}

```

### Específicação dos testes

- **should be able to create a new transaction**: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criada.

- **should be able to list the transactions**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **should not be able to create outcome transaction without a valid balance**: Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo outcome extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: { error: string }

---

## 👨‍💻 Tecnologias utilizadas

- [NodeJs](https://nodejs.org/en/)
- [express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [uuidv4](https://github.com/uuidjs/uuid#readme)
- [jest](https://jestjs.io/)

---

## 📦 Como baixar o projeto

### Com [Yarn](https://yarnpkg.com/) :

```bash

 # Clonar o repositório
 $ git clone https://github.com/CristianWesleyFront/# bootcamp-gostack-desafio05

 # Entrar no diretorio
 $ cd # bootcamp-gostack-desafio05

 # Instalar as dependências
 $ yarn install

 # Iniciar o projeto
 $ yarn dev


```

### Com [Npm](https://www.npmjs.com/) :

```bash

 # Clonar o repositório
 $ git clone https://github.com/CristianWesleyFront/# bootcamp-gostack-desafio05

 # Entrar no diretorio
 $ cd # bootcamp-gostack-desafio05

 # Instalar as dependências
 $ npm i

 # Iniciar o projeto
 $ npm run dev


```

---

## 🤝 Considerações

#### Ideia do projeto : https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodejs
