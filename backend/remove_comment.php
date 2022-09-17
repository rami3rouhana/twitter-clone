<?php
//connection
include("connection.php");
//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

$_POST = json_decode(file_get_contents('php://input'), true);

//variables
$comment_id=$_POST["commentId"];
//query
$query=$mysqli->prepare("DELETE FROM comments WHERE id='$comment_id'");
$query->execute();

//response
$response=[];
$response["success"]=true;
echo json_encode($response);
?>