<?php
//connection
include("connection.php");

//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

//variables
$like_id=$_POST["likeId"];

//query
$query=$mysqli->prepare("DELETE FROM likes WHERE id='$like_id'");
$query->execute();

//response
$response=[];
$response["success"]=true;
echo json_encode($response);

?>