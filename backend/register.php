<?php
//connection
include('connection.php');

//headers 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

//variable
$first_name = $_POST["fname"];
$last_name = $_POST["lname"];
$email = $_POST["email"];
$password = $_POST["password"];


/* Secure password hash. */
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
//check email if exixts
$check_email = "SELECT email FROM users WHERE email='$email'";
$email_result = mysqli_query($mysqli, $check_email);
$email_count = mysqli_num_rows($email_result);

//response
if ($email_count >= 1) {
    $response = [];
    $response["email"] = $email_count;
    echo json_encode($response);
}
else{

//queries
$query = $mysqli->prepare("INSERT INTO users(first_name,last_name,email,password) VALUES(?,?,?,?)");
$query->bind_param("ssss", $first_name, $last_name, $email, $hashed_password);
$query->execute();

//response
$response = [];
$response["success"] = true;

echo json_encode($response);
}