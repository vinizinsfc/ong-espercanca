import {inicioTemplate,projetosTemplate,cadastroTemplate} from './templates.js';
import {iniciarFormulario} from './form.js';
import {abrirModal,fecharModal} from './components.js';
const rotas={inicio:inicioTemplate,projetos:projetosTemplate,cadastro:cadastroTemplate};
export function navegar(rota='inicio'){const pagina=rotas[rota]?rota:'inicio';document.querySelector('#conteudo').innerHTML=rotas[pagina]();history.replaceState(null,'',`#${pagina}`);document.querySelector('#menu')?.classList.remove('ativo');document.querySelector('#menuToggle')?.setAttribute('aria-expanded','false');iniciarFormulario();document.querySelector('#abrirModal')?.addEventListener('click',abrirModal);document.querySelector('#conteudo').focus()}
export function iniciarRouter(){document.addEventListener('click',e=>{const link=e.target.closest('[data-route]');if(!link)return;e.preventDefault();fecharModal();navegar(link.dataset.route)});window.addEventListener('hashchange',()=>navegar(location.hash.slice(1)));navegar(location.hash.slice(1)||'inicio')}
