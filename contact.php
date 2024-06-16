<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Example: Send email
    $to = "recipient@example.com";
    $subject = "New message from website";
    $body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: sender@example.com";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(array('status' => 'success', 'message' => 'Message sent successfully!'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Failed to send message.'));
    }
}
?>
