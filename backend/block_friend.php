<?php
//connection
include("connection.php");
//headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

$_POST = json_decode(file_get_contents('php://input'), true);

//variables
$user_id=$_POST["userId"];
$friend_id=$_POST["friendId"];
//query
$query=$mysqli->prepare("
SELECT is_blocked,id 
FROM friends
WHERE users_id = ?
AND friends_id = ?
");
$query->bind_param("ii",$user_id, $friend_id);
$query->execute();
$query=$query->get_result();
$query = $query-> fetch_assoc();
if(null !== $query){

    // Toggle follow
if($query["is_blocked"]==0){
    //query
    $follow=$mysqli->prepare("
    INSERT INTO friends (id, is_blocked)
    VALUES(?,?) 
    ON DUPLICATE KEY UPDATE    
    is_blocked=1
    ");
    $follow->bind_param("ii",$query["id"], $query["is_blocked"]);
    $follow->execute();
    
    }else{
    //query
    $unfollow=$mysqli->prepare("
    INSERT INTO friends (id, is_blocked)
    VALUES(?,?) 
    ON DUPLICATE KEY UPDATE    
    is_blocked=0
    ");
    $unfollow->bind_param("ii",$query["id"], $query["is_blocked"]);
    $unfollow->execute();
    }
    
    //response
    $response=[];
    $response['success']=true;
    echo json_encode($response);
    
}else{
    //query
    $follow=$mysqli->prepare("
    INSERT INTO friends (users_id, friends_id, is_blocked)
    VALUES(?,?,1) 
    ");
    $follow->bind_param("ii",$user_id,$friend_id );
    $follow->execute();

    //response
    $response=[];
    $response['success']=true;
    echo json_encode($response);
}

?>