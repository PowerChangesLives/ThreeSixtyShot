<?php
// Database configuration
$servername = "unclaimedfinancecom.ipagemysql.com";
$username = "unclaimedfinancecom";
$password = "Jeremiah2720!";
$database = "ss_dbname_dej3n7f6lm";

try {
    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }

    echo "Connected successfully";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
