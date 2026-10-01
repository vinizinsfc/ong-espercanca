# ONG Esperança

SPA front-end acadêmica para uma ONG fictícia, com foco em projetos sociais, voluntariado e doações.

## Funcionalidades
- Navegação SPA sem recarregar a página
- Formulário com validação em JavaScript
- Persistência de cadastros e tema com `localStorage`
- Modo claro/escuro
- Menu responsivo
- Modal acessível e feedback com SweetAlert2
- HTML semântico e atributos WAI-ARIA

## Tecnologias
HTML5, CSS3, JavaScript ES6 Modules, Vite, SweetAlert2, Git e GitHub.

## Estrutura
```text
ong-esperanca/
├── index.html
├── package.json
├── README.md
├── .gitignore
└── src/
    ├── css/style.css
    ├── imagens/
    └── js/
        ├── main.js
        └── modules/
            ├── components.js
            ├── form.js
            ├── router.js
            ├── storage.js
            └── templates.js
```

## Instalação local
Pré-requisitos: Node.js e Git.

```bash
git clone URL_DO_SEU_REPOSITORIO
cd ong-esperanca
npm install
npm run dev
```

## Build de produção
```bash
npm run build
npm run preview
```
A build é gerada em `dist/`.

## Versionamento
O projeto adota GitFlow: `main` para versões estáveis, `develop` para integração e `feature/*` para funcionalidades. As mensagens seguem Conventional Commits (`feat:`, `fix:`, `docs:`) e as releases usam SemVer (`MAJOR.MINOR.PATCH`). Versão proposta: `v1.3.1`.

Exemplos:
```text
feat: cria estrutura inicial da aplicação
feat: adiciona validação de formulário
feat: adiciona persistência com localStorage
feat: implementa navegação SPA
fix: corrige eventos e validações
```

## Acessibilidade
Foram usados landmarks (`header`, `nav`, `main`, `section`, `footer`), foco visível, link de salto, labels, `aria-expanded`, `aria-invalid`, `aria-live`, `role="dialog"` e `aria-modal="true"`.

## Deploy na Vercel
Importe o repositório na Vercel. Framework: Vite. Build command: `npm run build`. Output directory: `dist`.

## Observação
Projeto acadêmico fictício. Os cadastros ficam somente no navegador do usuário via `localStorage`; não há backend ou banco de dados remoto.
