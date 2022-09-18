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
$query=$mysqli->prepare("
SELECT *,posts.id FROM posts 
JOIN friends
ON posts.users_id = friends.users_id
JOIN users
ON friends.friends_id = users.id
WHERE (
    (friends.users_id = ? AND is_blocked = 0) 
    OR (friends.friends_id = ? AND is_blocked = 0)) 
AND (friends.users_id = ? AND friends.is_followed =1)
GROUP BY posts.id
");
$query->bind_param("iii",$userId, $userId, $userId);
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