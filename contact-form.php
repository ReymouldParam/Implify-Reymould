<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['fullName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Validate the email address
    $to = "reymould.social@gmail.com";
    $subject = "Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

    // Attempt to send the email
    if (mail($to, $subject, $body)) {
        header("Location: contact.html");
    } else {
        header("Location: contact.html");
    }
    exit;
}
?>