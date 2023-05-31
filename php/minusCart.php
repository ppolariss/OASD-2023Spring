<?php
// minus an art from the cart
session_start();
if (!isset($_SESSION["user_id"])) {
    http_response_code(401);
    die("未登录");
}
require_once "./MyUtils/connectMysql.php";
require_once "./deleteCart.php";

header('Content-Type: application/json');
$art_id_list = $_GET['art_id_list'];
$user_id = $_SESSION['user_id'];


try {
    $art_id_list = json_decode($art_id_list);
    if (gettype($art_id_list) != "array" && $art_id_list = array($art_id_list)) {
        http_response_code(400);
        die("art_id_list不是数组");
    }
    foreach ($art_id_list as $art_id) {
        delete_cart($user_id, $art_id);
    }
    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}

?>