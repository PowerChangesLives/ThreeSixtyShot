<?php

//Note: For an explanation of this code please see: https://youtu.be/fIYyemqKR58?si=J4e5j784HEjHeJse

//Get values from form
$fName = $_POST["first_name"];
$lName = $_POST["last_name"];
$email = $_POST["email"];
$phone = $_POST["Phone"];
//$subject = $_POST["Message from Contact Form"];
$message_input = $_POST["message"];


require "../vendor/autoload.php";


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

//$mail->SMTPDebug = SMTP::DEBUG_SERVER; //Deactivate this line when not debugging. It causes secret info to show in the browser.

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "in-v3.mailjet.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "#GetFromPWDocument";//I removed the API key and Secret Key for security purposes.
// Get them from the document that has all the project passwords in the sharepoint.
$mail->Password = "#GetFromPWDocument";//I removed the API key and Secret Key for security purposes.
// Get them from the document that has all the project passwords in the sharepoint. 

//Combine form data into the correct format to send

$name = $fName . " " . $lName;
$message = "Someone used the 'contact us' form:" . "\n\n\n" .
    "Name: " . $fName . " " . $lName . "\n\n" .
    "Contact phone: " . $phone . "\n\n" .
    "Contact email: " . $email . "\n\n" .
    "Message from Contact: " . $message_input;

//Set the sender
try {
    $mail->setFrom("info@threesixtyshot.com", $name);
} catch (\PHPMailer\PHPMailer\Exception $e) {
    // Log detailed error information
    $errorMessage = $e->getMessage(); // Get the error message
    $errorCode = $e->getCode(); // Get the error code
    $errorFile = $e->getFile(); // Get the file where the exception occurred
    $errorLine = $e->getLine(); // Get the line number where the exception occurred
    $errorTrace = $e->getTraceAsString(); // Get the full stack trace as a string

    // Log or display the error information
    error_log("Exception caught: $errorMessage (Code: $errorCode) in $errorFile on line $errorLine");
    error_log("Stack Trace:\n$errorTrace");

    // Handle the exception as needed
    // For example, display a user-friendly error message or redirect to an error page
    echo "An error occurred. Please try again later.";
}


//Set the recipient
try {
    $mail->addAddress("info@threesixtyshot.com", "Contact from" . " " . $name);
} catch (\PHPMailer\PHPMailer\Exception $e) {
    // Log detailed error information
    $errorMessage = $e->getMessage(); // Get the error message
    $errorCode = $e->getCode(); // Get the error code
    $errorFile = $e->getFile(); // Get the file where the exception occurred
    $errorLine = $e->getLine(); // Get the line number where the exception occurred
    $errorTrace = $e->getTraceAsString(); // Get the full stack trace as a string

    // Log or display the error information
    error_log("Exception caught: $errorMessage (Code: $errorCode) in $errorFile on line $errorLine");
    error_log("Stack Trace:\n$errorTrace");

    // Handle the exception as needed
    // For example, display a user-friendly error message or redirect to an error page
    echo "An error occurred. Please try again later.";
}

$mail->Subject = "Message From 'Contact Us' Form";
$mail->Body = $message;


try {
    $mail->send();
} catch (\PHPMailer\PHPMailer\Exception $e) {
// Log detailed error information
    $errorMessage = $e->getMessage(); // Get the error message
    $errorCode = $e->getCode(); // Get the error code
    $errorFile = $e->getFile(); // Get the file where the exception occurred
    $errorLine = $e->getLine(); // Get the line number where the exception occurred
    $errorTrace = $e->getTraceAsString(); // Get the full stack trace as a string

    // Log or display the error information
    error_log("Exception caught: $errorMessage (Code: $errorCode) in $errorFile on line $errorLine");
    error_log("Stack Trace:\n$errorTrace");

    // Handle the exception as needed
    // For example, display a user-friendly error message or redirect to an error page
    echo "An error occurred. Please try again later.";
}

//echo "email sent";
header("Location: ../html/sent.html");