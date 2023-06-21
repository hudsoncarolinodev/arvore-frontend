
# Nome do Projeto

Objetivo

Usando a API de Busca de Livros do Google, o candidato deve criar uma aplicação web responsiva em react baseada nesse layout: https://marvelapp.com/prototype/9e09a5i/screens.

Figma: https://www.figma.com/file/Jt31uGb6mXjj5OencjqHuW/Teste-Frontend?node-id=0%3A1


As prateleiras da tela inicial são resultados de busca pelo título da prateleira, por exemplo, tomando o layout proposto teríamos 4 chamadas diferentes para a API.

## Instalação

Certifique-se de ter o Node.js e o npm instalados em sua máquina. Em seguida, execute o seguinte comando para instalar as dependências: npm i

## Configurando variáveis de ambiente

Configure um arquivo .env com as seguintes variáveis e valores:

API URL: VITE_API_URL=https://www.googleapis.com/books/v1/
Key googleapis: VITE_API_KEY=AIzaSyDleIdhHFrEROuNSfnXEervdUwc5dsoU38
User id googleapis: VITE_USER_ID=106020563983637251370

### `npm run dev`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:5173/](http://localhost:5173/) para visualizá-lo no navegador.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\



### `npm run predeploy`

Executa o comando `npm run build` como etapa prévia à implantação. Isso é útil se você estiver implantando seu aplicativo em um serviço de hospedagem.

### `npm run deploy`

Implanta o aplicativo no GitHub Pages usando o comando `gh-pages -d build`.\
Certifique-se de que sua configuração do GitHub Pages esteja correta antes de executar este comando.

### `npm run preview`

Inicia um servidor de pré-visualização do aplicativo usando o Vite.\
Isso permite visualizar o aplicativo em um ambiente de desenvolvimento.

### Tela inicial

- A tela inicial consiste mostrar 4 carrosséis de prateleiras predefinidas no perfil do usuário do  [Google livros](https://books.google.com.br/)

- Também exibe uma barra de busca para que seja possível realizar uma pesquisa de livros.

### Tela pesquisa

- Consiste em listar todos os livros resultado da pesquisa realizada no campo de busca.
- Possível realizar filtros nos resultados
- Realizar uma nova busca
