<?php
//connection
include("connection.php");

//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');



// email and password sent from form 

$email = mysqli_real_escape_string($mysqli, $_POST['email']);
$password = mysqli_real_escape_string($mysqli, $_POST['password']);
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$sql = "SELECT id FROM users WHERE email= '$email' and password = '$hashed_password'";
$result = mysqli_query($mysqli, $sql);

$count = mysqli_num_rows($result);

// If result matched $email and $password, table row must be 1 row

if ($count == 1) {
    echo json_encode(($result->fetch_array()));
} else {
    $response=[];
    $response["message"]= "Your Login Name or Password is invalid";
    echo json_encode($response);
}
