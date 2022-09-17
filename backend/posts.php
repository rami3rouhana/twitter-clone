<?php
//connection 
include("connection.php");

//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

//queries
$query=$mysqli->prepare("SELECT * FROM posts");
$query->execute();
$array=$query->get_result();

//response
$response=[];

//implement every row in array 
while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}
//
$json = json_encode($response);
echo $json;





?>