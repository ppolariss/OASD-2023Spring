<?php
session_start();
if (!isset($_SESSION["user_id"]))
{
    http_response_code(401);
    die("未登录");
}
header('Content-Type: application/json');
require_once "./MyUtils/connectMysql.php";
$user_id = $_SESSION['user_id'];
// $user_id = 60;

try {
    $pdo = new PDO($dsn, $user, $pwd);

    $cart = $pdo->query("SELECT * FROM cart WHERE user_id = $user_id")->fetch();

    if ($cart == null) {
        die(200);
    }
    $art_array = explode(",", $cart['art_id_list']);
    $cart_array = array(); 
    foreach ($art_array as $art_id ) {
        $art = $pdo->query("SELECT * FROM art WHERE art_id = $art_id")->fetch();
        $cart_array[] = $art;
    }
    echo json_encode($cart_array, JSON_UNESCAPED_UNICODE);

    $pdo = null;

    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>