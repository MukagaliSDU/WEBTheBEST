<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'webthebest');
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 

// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

if(isset($_POST['email'])){
    $uname =  $_POST['name']; 
    $uemail = $_POST['email'];
    $uage = $_POST['age'];
    $upassword = $_POST['password'];
    
   
    $sql = "insert into users(email, password, name, age) values ('$uemail', '$upassword', '$uname', '$uage')";

    $result = mysqli_query($link, $sql);

    if($result){
        echo "Success!";
        
        exit();
    }
    else{
        echo "Wrong!";
    }
}