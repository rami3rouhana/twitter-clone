<?php 
//connection
include("connection.php");
//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
//variables
$post_id=$_POST["postId"];
//query
$query = $mysqli->prepare("DELETE FROM posts WHERE id='$post_id'");
$query->execute();
//response
$response=[];
$response["success"]=true;
echo json_encode($response);
?>