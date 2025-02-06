<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['fullName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $checkbox = $_POST['smsOptIn'];

    // Validate the email address
    $to = "info@implify.com";
    $subject = "Enquiry From Implify Inc Website (implifyinc.com)";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message \nCheckbox: $checkbox";

    // Attempt to send the email
    if (mail($to, $subject, $body)) {
        header("Location: contact.html");
    } else {
        header("Location: contact.html");
    }
    exit;
}
?>