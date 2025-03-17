<?php
$hostname = "localhost";
$username = "root";
$database="db3";
$password = "";

// Create connection
if(!$conection = mysqli_connect($hostname, $username, $password, $database));
 
if (!$conection) {
    echo mysqli_connect_error();
    }
    
    //echo 'Connected successfully';
    ?>
