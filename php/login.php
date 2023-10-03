<?php
session_start();

// Initialize variables
$username = $password = "";
$err = "";
$welcome_message = ""; // Initialize an empty welcome message

// Your login logic here...
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    // Check if the login is successful
    if (/* Your successful login condition */) {
        $_SESSION["username"] = $username;
        $_SESSION["id"] = $id;
        $_SESSION["loggedin"] = true;

        // Set the welcome message
        $welcome_message = "Welcome " . $_SESSION['username'] . "! You have successfully logged in.";
    }
}
?>
