<?php
// rechange money to the user's account
session_start();
require_once "./MyUtils/connectMysql.php";

$amount = $_GET['amount'];
$user_id = $_SESSION['user_id'];


header('Content-Type: application/json');


try{
    if($amount <= 0) {
        http_response_code(400);
        die("The amount must be positive.");
    }
    $pdo = new PDO($dsn, $user, $pwd);
    $sql = "UPDATE user SET balance = balance + $amount WHERE id = $user_id";
    $pdo->exec($sql);
    $pdo = null;
    die(200);
}
catch(PDOException $e){
    http_response_code(500);
    die($e->getMessage());
}

?>