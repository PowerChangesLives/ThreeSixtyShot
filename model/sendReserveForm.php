<?php

//Note: For an explanation of this code please see: https://youtu.be/fIYyemqKR58?si=J4e5j784HEjHeJse

//Get values from form
//Contact Info
$firstName = $_POST["fName"];
$lName = $_POST["lName"];
$email = $_POST["email"];
$phone = $_POST["phoneNumber"];
//Reservation details
$date = $_POST["date"];
$time = $_POST["reservation-time"];
$type = $_POST["reservation-type"];
$request = $_POST["request"];

require "../vendor/autoload.php";

////For debugging
//var_dump($firstName);
//var_dump($lName);
//var_dump($email);
//var_dump($phone);
//var_dump($date);
//var_dump($time);
//var_dump($type);
//var_dump($request);


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

//$mail->SMTPDebug = SMTP::DEBUG_SERVER; //Deactivate this line when not debugging. It causes secret info to show in the browser.

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "in-v3.mailjet.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "29a8cc0e54108d4b255d8b756e43029c";
$mail->Password = "4b97de100e950defe66ce3c4a7fa9ba1";

//Combine form data into the correct format to send

$name = $firstName . " " . $lName;

$message = "Someone used the 'contact us' form:" . "\n\n" .
    "Name: " . $firstName . " " . $lName . "\n\n" .
    "Contact phone: " . $phone . "\n\n" .
    "Contact email: " . $email . "\n\n\n\n" .

    "Date: " . $date . "\n\n" .
    "Time: " . $time . "\n\n" .
    "Type: " . $type . "\n\n" .
    "Message from Contact: " . $request;


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

$mail->Subject = "Someone Made a Reservation!";
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

echo "email sent";
//header("Location: sent.html");