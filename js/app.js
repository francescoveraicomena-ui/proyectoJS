// 1. Seleccionamos el formulario por su ID
const formulario = document.getElementById('contactForm');

// 2. Escuchamos el evento cuando el usuario presiona el botón "ENVIAR"
formulario.addEventListener('submit', function (e) {
  
  // Detenemos el envío predeterminado para que la página NO se recargue
  e.preventDefault(); 

  // 3. Mostramos la alerta de carga inicial
  Swal.fire({
    title: 'Enviando...',
    text: 'Por favor espera un momento',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading(); // Muestra el ícono de carga giratorio
    }
  });

  // 4. Empaquetamos los datos ingresados en los campos del formulario
  const datos = new FormData(formulario);

  // 5. Enviamos los datos al servidor PHP en segundo plano mediante fetch()
  fetch('send_mail.php', {
    method: 'POST',
    body: datos
  })
  .then(response => {
    if (response.ok) {
      // 6a. Si el envío en PHP fue exitoso, mostramos la alerta verde
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Nos pondremos en contacto contigo pronto.',
        confirmButtonColor: '#4c70eb' // Mismo color azul de tu botón
      });

      // Limpiamos los campos del formulario
      formulario.reset();
    } else {
      // 6b. Si PHP devolvió un error (ej. campos vacíos)
      Swal.fire({
        icon: 'error',
        title: 'Error al enviar',
        text: 'Hubo un problema procesando tu solicitud. Revisa los datos.',
        confirmButtonColor: '#4c70eb'
      });
    }
  })
  .catch(error => {
    // 6c. Si ocurre un fallo en la red o servidor caído
    Swal.fire({
      icon: 'error',
      title: 'Error de conexión',
      text: 'No se pudo conectar con el servidor.',
      confirmButtonColor: '#4c70eb'
    });
  });
});