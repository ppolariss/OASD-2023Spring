<?php
session_start();
if (!isset($_SESSION["user_id"])) {
    http_response_code(401);
    die("未登录");
}
header('Content-Type: application/json');
require_once "./MyUtils/connectMysql.php";
require_once "./deleteCart.php";

$user_id = $_SESSION['user_id'];
$art_id_list = $_GET['art_id_list'];

try {
    $pdo = new PDO($dsn, $user, $pwd);

    $cart = $pdo->query("SELECT * FROM cart WHERE user_id = $user_id")->fetch();

    $price = 0;
    // check if the art_id_list is valid
    $art_id_list = json_decode($art_id_list);
    if (gettype($art_id_list) != "array" && $art_id_list = array($art_id_list)) {
        http_response_code(400);
        die("art_id_list不是数组");
    }
    foreach ($art_id_list as $art_id) {
        $art = $pdo->query("SELECT * FROM art WHERE art_id = $art_id")->fetch();
        if ($art == null) {
            http_response_code(400);
            die("art_id_list中有不存在的art_id");
        }
        if ($art['is_sold'] == 1) {
            http_response_code(400);
            die("art_id_list中有已售出的art_id");
        }
        $price += $art['price'];
    }

    $user_balance = $pdo->query("SELECT balance FROM user WHERE id  = $user_id")->fetchColumn();
    if ($user_balance == null) {
        http_response_code(400);
        die("用户不存在");
    }
    if ($user_balance < $price) {
        http_response_code(400);
        die("余额不足");
    }


    $now = date("Y-m-d H:i:s");
    foreach ($art_id_list as $art_id) {
        $art = $pdo->query("SELECT * FROM art WHERE art_id = $art_id")->fetch();
        $seller_id = $art['user_id'];

        // update the balance of the buyer and the seller
        try {
            $pdo->exec("UPDATE user SET balance = balance + $price WHERE id = $seller_id");
        } catch (PDOException $e) {
            // echo "UPDATE user SET balance = balance + $price WHERE user_id = $seller_id";
            http_response_code(500);
            die("更新卖家余额失败");
        }

        $pdo->exec("UPDATE user SET balance = balance - $price WHERE id = $user_id");
        $pdo->exec("UPDATE art SET is_sold = 1 WHERE art_id = $art_id");
        $pdo->exec("INSERT INTO purchase (art_id, user_id, price, buy_at) VALUES ($art_id, $user_id, $price, '$now')");
        // delete the art from the cart if necessary
        try {
            delete_cart($user_id, $art_id);
        } catch (PDOException $e) {
            echo($e->getMessage());
        }
    }

    $pdo = null;

    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>