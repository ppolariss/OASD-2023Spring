<?php
// minus an art from the cart
session_start();
if (!isset($_SESSION["user_id"]))
{
    http_response_code(401);
    die("未登录");
}
require_once "../MyUtils/connectMysql.php";

header('Content-Type: application/json');
$art_id = $_GET['art_id'];
$user_id = $_SESSION['user_id'];


try {
    delete_cart($user_id, $art_id);
    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}


function delete_cart($user_id, $art_id) {
    // get the list art_id_list of the cart
require_once "../MyUtils/connectMysql.php";
$pdo = new PDO($dsn, $user, $pwd);
$cart = $pdo->query("SELECT * FROM cart WHERE user_id = $user_id")->fetch();
$cart_array = explode(",", $cart['art_id_list']);
if(!in_array($art_id, $cart_array)) {
    http_response_code(400);
    die("The art has not been added to the cart.");
}
$cart_array = array_diff($cart_array, array($art_id));
$cart = implode(",", $cart_array);
$now = date("Y-m-d H:i:s");
$sql = "UPDATE cart SET art_id_list = '$cart', update_at = '$now' WHERE user_id = $user_id";

$pdo->exec($sql);

$pdo = null;
}   


?>