<?php
// function 
function delete_cart($user_id, $art_id) {
    // get the list art_id_list of the cart
include "./MyUtils/connectMysql.php";
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