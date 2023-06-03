<?php
// add an art to the cart
session_start();
if (!isset($_SESSION["user_id"]))
{
    http_response_code(401);
    die("未登录");
}
require_once "./MyUtils/connectMysql.php";

header('Content-Type: application/json');
$art_id = $_GET['art_id'];
$user_id = $_SESSION['user_id'];

try {
    $pdo = new PDO($dsn, $user, $pwd);
    $is_sold = $pdo->query("SELECT is_sold FROM art WHERE art_id = $art_id")->fetchColumn();
    if ($is_sold == 1) {
        http_response_code(400);
        die("The art has been sold.");
    }
    $now = date("Y-m-d H:i:s");
    // get the list art_id_list of the cart
    $cart = $pdo->query("SELECT * FROM cart WHERE user_id = $user_id")->fetch();
    if ($cart == null) {
        $pdo->exec("INSERT INTO cart (user_id, art_id_list, update_at) VALUES ($user_id, $art_id, '$now')");
        $pdo = null;
        die(200);
    }
    $cart_array = explode(",", $cart['art_id_list']);
    if(in_array($art_id, $cart_array)) {
        http_response_code(400);
        die("The art has been added to the cart.");
    }
    $cart = $cart['art_id_list'] . "," . $art_id;
    $sql = "UPDATE cart SET art_id_list = '$cart', update_at = '$now' WHERE user_id = $user_id";

    $pdo->exec($sql);

    $pdo = null;
    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>