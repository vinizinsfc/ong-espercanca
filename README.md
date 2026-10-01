# ONG Esperança

Aplicação web acadêmica desenvolvida para uma ONG fictícia, com foco em projetos sociais, voluntariado e doações.

O projeto foi desenvolvido como uma SPA (Single Page Application), utilizando HTML, CSS e JavaScript, com navegação dinâmica, validação de formulários e persistência de dados no navegador.

## Funcionalidades

- Navegação SPA sem recarregar a página
- Página inicial institucional
- Área de projetos sociais
- Formulário de cadastro de voluntários e doadores
- Validação de nome, e-mail, CPF, telefone e CEP
- Feedback visual para campos válidos e inválidos
- Persistência dos cadastros utilizando localStorage
- Persistência da preferência de tema
- Modo claro e escuro
- Menu responsivo
- Modal de feedback com SweetAlert2
- Recursos de acessibilidade
- Interface adaptada para diferentes tamanhos de tela

## Tecnologias

- HTML5
- CSS3
- JavaScript ES6
- JavaScript Modules
- Vite
- SweetAlert2
- Git
- GitHub
- Vercel

## Estrutura do Projeto

```text
ong-esperanca/
├── src/
│   ├── css/
│   └── js/
│       ├── modules/
│       │   ├── components.js
│       │   ├── form.js
│       │   ├── router.js
│       │   ├── storage.js
│       │   └── templates.js
│       └── main.js
├── index.html
├── package.json
└── README.md
Versionamento
O projeto utiliza Git e GitHub para controle de versão.
Durante o desenvolvimento foram utilizadas branches separadas para implementação das funcionalidades, incluindo:
- main — versão principal e estável
- develop — integração das funcionalidades
- feature/formulario — implementação e validação do formulário
- feature/localstorage — persistência de dados com localStorage
As funcionalidades foram integradas por meio de Pull Requests.
Organização do Projeto
Também foram utilizados recursos do GitHub para organizar o desenvolvimento:
- Issues para registrar tarefas e correções
- Milestone para acompanhar a conclusão das funcionalidades
- Pull Requests para integração das branches
- Commits para registrar as alterações realizadas
- Release para disponibilizar uma versão estável da aplicação
Release
Versão estável disponibilizada:
v1.3.1 — ONG Esperança
Deploy
A aplicação foi publicada utilizando a Vercel.
Aplicação:
https://ong-esperanca.vercel.app
Objetivo Acadêmico
Este projeto foi desenvolvido com o objetivo de aplicar conhecimentos de desenvolvimento web, incluindo HTML semântico, CSS responsivo, JavaScript, manipulação do DOM, SPA, validação de formulários, armazenamento local, acessibilidade e controle de versão com Git e GitHub.
Projeto acadêmico — ONG Esperança © 2026
