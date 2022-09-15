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

//queries
$query = $mysqli->prepare("INSERT INTO users(first_name,last_name,email,password) VALUES(?,?,?,?)");
$query->bind_param("ssss", $first_name, $last_name, $email, $password);
$query->execute();

//response
$response = [];
$response["success"] = true;

echo json_encode($response);
