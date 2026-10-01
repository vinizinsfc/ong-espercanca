import { salvarCadastro } from './storage.js';

const regras = {
  nome: (valor) => valor.trim().length >= 3,

  email: (valor) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),

  cpf: (valor) =>
    /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(valor),

  telefone: (valor) =>
    /^\(\d{2}\) \d{5}-\d{4}$/.test(valor),

  cep: (valor) =>
    /^\d{5}-\d{3}$/.test(valor)
};

function validarCampo(campo) {
  const regra = regras[campo.name];

  if (!regra) {
    return true;
  }

  const valido = regra(campo.value);

  campo.classList.toggle('campo-invalido', !valido);
  campo.classList.toggle('campo-valido', valido);

  campo.setAttribute('aria-invalid', String(!valido));

  const mensagem = campo.parentElement.querySelector('.mensagem-erro');

  if (mensagem) {
    mensagem.textContent = valido
      ? ''
      : 'Verifique o preenchimento deste campo.';
  }

  return valido;
}

export function iniciarFormulario() {
  const form = document.querySelector('#formCadastro');

  if (!form) return;

  const campos = form.querySelectorAll('input');

  campos.forEach((campo) => {
    campo.addEventListener('input', () => {
      validarCampo(campo);
    });

    campo.addEventListener('blur', () => {
      validarCampo(campo);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let formularioValido = true;

    campos.forEach((campo) => {
      if (!validarCampo(campo)) {
        formularioValido = false;
      }
    });

    if (!formularioValido) {
      Swal.fire({
        icon: 'error',
        title: 'Dados inválidos',
        text: 'Corrija os campos destacados antes de continuar.'
      });

      return;
    }

    const dados = Object.fromEntries(new FormData(form).entries());

    salvarCadastro(dados);

    Swal.fire({
      icon: 'success',
      title: 'Cadastro realizado!',
      text: 'Seus dados foram armazenados com sucesso.'
    });

    form.reset();

    campos.forEach((campo) => {
      campo.classList.remove('campo-valido', 'campo-invalido');
      campo.setAttribute('aria-invalid', 'false');
    });
  });
}
