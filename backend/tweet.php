<?php

// Add header
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

// Connect to database
include("connection.php");

// Recieving Raw JSON text
$_POST = json_decode(file_get_contents('php://input'), true);

// Vairiables
$text = $_POST['tweetText'];
$id = $_POST['userId'];
$extension = $_POST['imageExtension'];
$encryptedImage =$_POST['encryptedImage'];

// Uploading file to the server
$image_no=time();//imageid
$image = base64_decode($encryptedImage);
$path = "uploads/".$image_no.".".$extension;
$status = file_put_contents($path,$image);   


//queries
$query = $mysqli->prepare("INSERT INTO posts(text,image,users_id) VALUES(?,?,?)");
$query->bind_param("sss", $text, $path, $id);
$query->execute();

if($status){
    echo "Successfully Uploaded";
   }else{
    echo "Upload failed";
   }
?>