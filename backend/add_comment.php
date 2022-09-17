<?php
//connection
include("connection.php");
//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

$_POST = json_decode(file_get_contents('php://input'), true);

//variables
$post_id=$_POST["postId"];
$user_id=$_POST["userId"];
$comment_content=$_POST["text"];
//query
$query=$mysqli->prepare("INSERT INTO comments (text,users_id,posts_id) VALUES(?,?,?)");
$query->bind_param("sii", $comment_content, $user_id, $post_id);
$query->execute();

//response
$response=[];
$response['success']=true;
echo json_encode($response);

?>