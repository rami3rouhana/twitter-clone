<?php
//connection
include("connection.php");
//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
//variables
$post_id = $_POST["postId"];
//query
$query = $mysqli->prepare("SELECT COUNT(id) FROM likes WHERE posts_id='$post_id' ");
$query->execute();
$array = $query->get_result();
$a = $array->fetch_assoc();
//response
$response = [];
$response["likes_count"] = $a;
echo json_encode($response);
