# Cadastro de Metas

Este projeto é uma aplicação para **cadastro de metas**, desenvolvida utilizando **React**, **TypeScript**, **PostgreSQL**, **Drizzle ORM** e **Tailwind CSS**. O sistema foi criado como parte de um curso prático.

## Tecnologias Usadas

- **React**: Biblioteca para construção de interfaces de usuário interativas e reativas.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **PostgreSQL**: Banco de dados relacional de código aberto.
- **Drizzle ORM**: ORM moderno e otimizado para trabalhar com SQL de forma segura e eficiente.
- **Tailwind CSS**: Framework de CSS para estilização utilitária e responsiva.

## Funcionalidades

- Permite o cadastro de metas.
- Listagem de todas as metas cadastradas.

## Como Executar o Projeto  

1. Clone o repositório:  
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

4. Configure o banco de dados:  
   Certifique-se de que você tenha o **PostgreSQL** instalado e configurado. Crie um banco de dados e defina as variáveis de ambiente para conexão.

5. Rode as migrações com Drizzle:
   ```bash
   npx drizzle-kit push
   ```

6. Inicie o servidor:
   
   Como o projeto está separado em pastas diferentes, execute os seguintes comandos em terminais separados:
   
   Para rodar o **backend**:
   ```bash
   cd server
   npm run dev
   ```
   
   Para rodar o **frontend**:
   ```bash
   cd web
   npm run dev
   ```


