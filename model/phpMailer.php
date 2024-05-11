<?php
// Function to send email
function sendEmail($name, $email, $message) {
    // Validate and sanitize the data (e.g., using filter_var and trim)

    // Email configuration
    $to = 'info@threesixtyshot.com'; // Updated recipient email address
    $subject = 'New Message from Contact Form';
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // SMTP settings
    $smtpServer = 'smtp.unclaimedfinance.com';
    $smtpPort = 587; // Use the appropriate SMTP port (587 for TLS)
    $smtpUsername = 'your_smtp_username'; // Change this to your SMTP username
    $smtpPassword = 'your_smtp_password'; // Change this to your SMTP password

    // PHPMailer library initialization
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';

    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->isSMTP();
    $mail->Host = $smtpServer;
    $mail->Port = $smtpPort;
    $mail->SMTPSecure = 'tls'; // Use 'tls' or 'ssl' based on your SMTP server settings
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;

    $mail->setFrom($email, $name);
    $mail->addAddress($to);
    $mail->Subject = $subject;
    $mail->Body = $body;

    // Attempt to send the email
    if ($mail->send()) {
        return true; // Email sent successfully
    } else {
        return false; // Error sending email
    }
}

// Example usage:
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $result = sendEmail($name, $email, $message);
    if ($result) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending message.";
    }
} else {
    echo "Invalid request.";
}
?>
