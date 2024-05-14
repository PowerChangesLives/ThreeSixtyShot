// Include Composer's autoloader
require 'vendor/autoload.php';

// Check if the form is submitted via POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {

// Validate and sanitize form data
$name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$message = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);

// Email configuration
$to = 'info@threesixtyshot.com'; // Updated recipient email address
$subject = 'New Message Form';
$body = "Name: $name\nEmail: $email\nMessage:\n$message";

// PHPMailer library initialization
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->isSMTP();
$mail->Host = 'smtp.ipage.com'; // Updated SMTP server
$mail->Port = 587; // Use the appropriate SMTP port
$mail->SMTPSecure = 'tls'; // Use 'tls' or 'ssl' based on your SMTP server settings
$mail->SMTPAuth = true;
$mail->Username = 'info@threesixtyshot.com'; // Change this to your SMTP username
$mail->Password = 'Jeremiah2720!'; // Change this to your SMTP password

$mail->setFrom($email, $name);
$mail->addAddress($to);
$mail->Subject = $subject;
$mail->Body = $body;

// Attempt to send the email
if ($mail->send()) {
echo "Message sent successfully!";
} else {
echo "Error sending message.";
}
} else {
echo "Invalid request.";
}
