<?php
// Database configuration
$servername = "unclaimedfinancecom.ipagemysql.com"; // The hostname of the database server
$username = "unclaimedfinancecom"; // The username for connecting to the database
$password = "Jeremiah2720!"; // The password for connecting to the database
$database = "ss_dbname_dej3n7f6lm"; // The name of the database to connect to

try {
    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        // If connection fails, throw an exception
        throw new Exception("Connection failed: " . $conn->connect_error);
    }

    echo "Connected successfully<br>";

    // Check if email is set in the request
    if (isset($_POST['email'])) {
        $email = $_POST['email']; // Retrieve the email from the POST request

        // Validate and sanitize the email
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $email = $conn->real_escape_string($email); // Sanitize the email to prevent SQL injection

            // Prepare the SQL statement
            $sql = "INSERT INTO emails (email) VALUES ('$email')"; // SQL query to insert the email into the emails table

            // Execute the query
            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully"; // Success message if the query is executed successfully
            } else {
                // If the query fails, throw an exception with the error
                throw new Exception("Error: " . $sql . "<br>" . $conn->error);
            }
        } else {
            echo "Invalid email format"; // Error message if the email format is invalid
        }
    } else {
        echo "Email not set in the request"; // Error message if the email is not set in the POST request
    }

    // Close the connection
    $conn->close(); // Close the database connection
} catch (Exception $e) {
    // Catch and display any exceptions
    echo "Error: " . $e->getMessage();
}
?>
