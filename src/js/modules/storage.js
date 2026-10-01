const CHAVE_CADASTROS='ongEsperancaCadastros';
const CHAVE_TEMA='ongEsperancaTema';
export function obterCadastros(){try{return JSON.parse(localStorage.getItem(CHAVE_CADASTROS))??[]}catch{return[]}}
export function salvarCadastro(cadastro){const dados=obterCadastros();dados.push(cadastro);localStorage.setItem(CHAVE_CADASTROS,JSON.stringify(dados))}
export function salvarTema(tema){localStorage.setItem(CHAVE_TEMA,tema)}
export function obterTema(){return localStorage.getItem(CHAVE_TEMA)||'claro'}
