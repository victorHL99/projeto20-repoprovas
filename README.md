# <p align = "center"> RepoProvas </p>

<p align="center">
   <img src="https://user-images.githubusercontent.com/72531277/178094665-f46c6a55-c821-42a0-bb9c-d5dd5f2d69fa.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-SEU_NOME-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/SEU_NOME/NOME_DO_PROJETO?color=4dae71&style=flat-square" />
</p>

## :clipboard: Descrição

- Desta vez, vamos implementar o RepoProvas, um sistema de compartilhamento de provas entre estudantes!
- No RepoProvas qualquer pessoa pode procurar provas antigas de suas disciplinas e professores ou enviar provas antigas para ajudar os calouros :)
- Se ao menos existisse no mercado uma [plataforma](https://respondeai.com.br) com provas resolvidas né? ☹️

---

## :computer: Tecnologias e Conceitos

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript
- PostgreSql
- Prisma

---

## :rocket: Rotas

```yml

POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
         "email":"devinho@dev.com",
         "password":"Teste@teste1",
         "confirmPassword": "Teste@teste1"
}
```

```yml

POST /signin
    - Rota para realizar Login
    - headers: {}
    - body:{
         "email":"devinho@dev.com",
         "password":"Teste@teste1"
}
```

---

## 🏁 Rodando a aplicação

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/victorHL99/projeto20-repoprovas.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor

```
npm start
```
