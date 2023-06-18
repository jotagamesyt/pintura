function mostrarTexto(numero) {
    const textoOculto = document.getElementById(`texto-oculto-${numero}`);
    if (textoOculto.style.display === 'none') {
      textoOculto.style.display = 'block';
    } else {
      textoOculto.style.display = 'none';
    }
  }
  