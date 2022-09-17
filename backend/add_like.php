<?php

//connection
include("connection.php");

//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

$_POST = json_decode(file_get_contents('php://input'), true);

//variable
$user_id=$_POST["userId"];
$post_id=$_POST["postId"];

//query
$query=$mysqli->prepare("insert into likes (users_id,posts_id) VALUES(?,?)");
$query->bind_param("ii", $user_id,$post_id);
$query->execute();

//response 
$result=[];
$result["success"]=true;
echo json_encode($result);

?>