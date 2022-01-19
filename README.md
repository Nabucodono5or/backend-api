<h1 align="center"> Livraria Nabucodonosor - API  </h1>

## Descrição do projeto

<p align=justify>API que trabalha com o projeto <a href="https://github.com/Nabucodono5or/frontend-api-consume">frontend-api-consume</a> fornecendo os endpoints e a conexão com um banco de dados em nuvem</p>

 ![Badge](https://img.shields.io/node/v/express?style=for-the-badge) ![Badge](https://img.shields.io/static/v1?label=Node&message=express&color=green&style=for-the-badge&logo=EXPRESS) ![Badge](https://img.shields.io/static/v1?label=firebase&message=firestore&color=orange&style=for-the-badge&logo=FIREBASE)

### Principais funcionalidades

- CRUD dos livros no banco de dados em nuvem.
  - Cadastro de novos livros
  - Listagem de todos os livros
  - Listagem das informações de um único livro.
  - Atualização e edição dos dados de um livro.
  - A remoção de um livro da coleção.
- Comunicação com o banco de dados em nuvem

> Status do Projeto: Concluído :heavy_check_mark:

### Como rodar a aplicação

Para executar a aplicação você precisará ter a versão node mais recente. Então no terminal do seu computador clone o projeto:

```
git clone git@github.com:Nabucodono5or/backend-api.git
```

Entre na pasta do projeto

```
cd backend-api
```

Antes de executar a aplicação instale as dependências e configure o acesso ao banco de dados:

```
npm install
```

Instale o dotenv para criar as variáveis de ambiente caso ele não seja instalado junto com as demais dependências.

```
npm install dotenv
```

Crie o arquivo .env para colocar as variáveis de ambiente

```
touch .env
```

Baixe o arquivo JSON de sua conta no Google Platform Firebase.

Dentro do arquivo .env preencha a variável de ambiente com o caminho do arquivo JSON. O valor da variável será o do arquivo onde estão suas chaves.

```
GOOGLE_APPLICATION_CREDENTIALS="Endereço-da-chave.json"
```
Para mais informações sobre o uso das chaves, segue o link [firebase credenciais](https://firebase.google.com/docs/projects/api-keys)

Execute a api

```
npm start
```

Para testar as rotas faça o uso do programa insomnia, postman ou caso esteja utilizando o editor Visual Studio Code use o Plugin REST Client.

- [Insomnia](https://insomnia.rest)
- [Postman](https://www.postman.com)
- [REST Client](https://github.com/Huachao/vscode-restclient)

### Linguagens, dependências e libs utilizadas

- [javascript](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [express](http://expressjs.com/pt-br/)
- [firebase](https://firebase.google.com/)

Para todas as ações de comunicação com o banco de dados o SDK [firebase-admin](https://firebase.google.com/docs/admin/setup) foi quem se saiu melhor.

##### JSON

```json
{
    "id": "Gerado pelo firebase",
    "titulo": String,
    "autor": String,
    "editora": String,
    "paginas": Number,
    "preco": Number
    "imagem": "URL do tipo String"
}
```
