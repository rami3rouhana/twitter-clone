<?php
//connection 
include("connection.php");

//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

$_POST = json_decode(file_get_contents('php://input'), true);

$userId = $_POST["userId"];

//queries
$query=$mysqli->prepare("SELECT * FROM posts WHERE users_id='$userId'");
$query->execute();
$array=$query->get_result();

//response
$response=[];

//implement every row in array 
while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}
//convert the into json object
$json = json_encode($response);
echo $json;





?>