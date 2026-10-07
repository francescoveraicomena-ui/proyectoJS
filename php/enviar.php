<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // 1. Recibir y sanitizar las entradas del formulario
    $name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
    $message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

    // 2. Validar que los campos requeridos no estén vacíos y el correo sea válido
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Por favor, completa todos los campos correctamente.";
        exit;
    }

    // 3. Configurar destinatario y asunto del correo
    $recipient = "francescoveraicomena@gmail.com"; // Reemplaza por el correo donde quieres recibir los datos
    $subject = "Nuevo mensaje de contacto de $name";

    // 4. Construir el cuerpo del correo
    $email_content = "Has recibido un nuevo mensaje desde el formulario de contacto.\n\n";
    $email_content .= "Nombre: $name\n";
    $email_content .= "Correo electrónico: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";

    // 5. Encabezados del correo
    $headers = array(
        'From' => $email,
        'Reply-To' => $email,
        'X-Mailer' => 'PHP/' . phpversion()
    );

    // 6. Enviar el correo
    if (mail($recipient, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "<h2>¡Gracias! Tu mensaje ha sido enviado exitosamente.</h2>";
        echo "<p><a href='index.html'>Volver al formulario</a></p>";
    } else {
        http_response_code(500);
        echo "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.";
    }
} else {
    // Si se intenta acceder directamente al archivo mediante GET, redirigir
    header("Location: index.html");
    exit;
}
?>