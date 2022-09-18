<?php
//connection
include("connection.php");
//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

$_POST = json_decode(file_get_contents('php://input'), true);

//variables
$user_id = $_POST["userId"];
$user_input = '%'.$_POST["userInput"].'%';

//query
$query=$mysqli->prepare("
SELECT * FROM users 
LEFT JOIN friends
ON friends.friends_id = users.id
WHERE friends.users_id = ? 
AND is_blocked =0 
AND ((users.first_name LIKE ?
		OR users.last_name LIKE ?)
    OR users.email = ?)
GROUP BY users.id
");
$query->bind_param("isss",$user_id ,$user_input ,$user_input ,$user_input );
$query->execute();
$array=$query->get_result();

//response
$response=[];

//response
$response["success"]=true;

//implement every row in array 
while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}

echo json_encode($response);
?>