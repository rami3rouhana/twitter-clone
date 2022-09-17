<?php
//connection
include("connection.php");
//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
//variables
$post_id=$_POST["postId"];
$user_id=$_POST["userId"];
$comment_content=$_POST["postId"];
//query
$query=$mysqli->prepare("INSERT INTO comments VALUES(?,?,?)");
$query->bind_param("sii", $comment_content,$user_id,$post_id);
$query->execute();

//response
$response=[];
$response['susccess']=true;
echo json_encode($response);

?>