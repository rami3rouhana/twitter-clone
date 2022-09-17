<?php 
//connection
include("connection.php");
//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
//variable 
$post_id=$_POST["postId"];
//queries
$query = $mysqli->prepare(" * FROM `comments`LEFT JOIN posts ON comments.posts_id = posts.id WHERE posts_id='$post_id'");
$query->execute();
$array = $query->get_result();
//result
$response = [];

//implement every row in array 
while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}
echo json_encode($result);
