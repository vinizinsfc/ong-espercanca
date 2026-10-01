const CHAVE_CADASTROS = 'ongEsperancaCadastros';
const CHAVE_TEMA = 'ongEsperancaTema';

export function obterCadastros() {
  const dados = localStorage.getItem(CHAVE_CADASTROS);

  if (!dados) {
    return [];
  }

  try {
    return JSON.parse(dados);
  } catch (erro) {
    console.error('Erro ao recuperar os cadastros:', erro);
    return [];
  }
}

export function salvarCadastro(novoCadastro) {
  const cadastros = obterCadastros();

  const cadastro = {
    ...novoCadastro,
    id: Date.now(),
    criadoEm: new Date().toISOString()
  };

  cadastros.push(cadastro);

  localStorage.setItem(
    CHAVE_CADASTROS,
    JSON.stringify(cadastros)
  );

  return cadastro;
}

export function salvarTema(tema) {
  localStorage.setItem(CHAVE_TEMA, tema);
}

export function obterTema() {
  return localStorage.getItem(CHAVE_TEMA) || 'claro';
}

export function limparCadastros() {
  localStorage.removeItem(CHAVE_CADASTROS);
}
