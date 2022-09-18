<?php
//connection
include('connection.php');

//headers 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

$_POST = json_decode(file_get_contents('php://input'), true);

//variable
$user_id = $_POST["userId"];
$extension = $_POST['imageExtension'];
$encryptedImage =$_POST['encryptedImage'];

// Uploading file to the server
$image_no=time();//imageid
$image = base64_decode($encryptedImage);
$path = "uploads/".$image_no.".".$extension;
$status = file_put_contents($path,$image);

$query=$mysqli->prepare("
UPDATE users
SET profile = ?
    WHERE id = ?
");
$query->bind_param("si",$path, $user_id);
$query->execute();
$response=[];
$response['success']=true;
echo json_encode($response);
?>