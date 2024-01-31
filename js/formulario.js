const formulario = document.querySelector('form');

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector('form button');
  botao.disabled = true;
  botao.innerText = 'Enviando...';

  const data = new FormData(formulario);

  fetch('');
}

formulario.addEventListener('submit', enviarFormulario);
