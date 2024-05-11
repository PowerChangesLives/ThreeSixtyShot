<?php
// Function to send email
function sendContactEmail($name, $email, $message) {
    // Validate and sanitize the data (e.g., using filter_var and trim)

    // Email configuration
    $to = 'info@threesixtyshot.com'; // Updated recipient email address
    $subject = 'New Message Form';
    $body =
        "Name: $name\n
        Email: $email\n
        Message:\n$message";

    // SMTP settings
    $smtpServer = 'smtp.ipage.com'; //Per iPage support, this info was obtained from https://www.ipage.com/help/article/email-client-setup-outlook-2016-and-microsoft-365
    $smtpPort = 465; // Use the appropriate SMTP port (465 is what is listed at the above address from iPage)
    $smtpUsername = 'info@threesixtyshot.com'; // Change this to your SMTP username
    $smtpPassword = 'Jeremiah2720!'; // Change this to your SMTP password

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
    $result = sendContactEmail($name, $email, $message);
    if ($result) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending message.";
    }
} else {
    echo "Invalid request.";
}
?>
