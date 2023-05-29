<?php
// like a comment
session_start();
if (!isset($_SESSION["user_id"]))
{
    http_response_code(401);
    die("未登录");
}
require_once "../MyUtils/connectMysql.php";

header('Content-Type: application/json');
$floor_id = $_GET['floor_id'];
$user_id = $_SESSION['user_id'];

try {
    // get the list likes_user of the comment
    $pdo = new PDO($dsn, $user, $pwd);
    $liks_user = $pdo->query("SELECT likes_user FROM comment WHERE floor_id = $floor_id")->fetchColumn();
    $liks_user_arr = explode(",", $liks_user);

    $is_liked = array_search($user_id, $liks_user_arr, false);

    // if the user has liked the comment, then cancel the like
    if($is_liked!=false) {
        array_splice($liks_user_arr, $is_liked, false);
        $liks_user = implode(",", $liks_user_arr);
        $sql = "UPDATE comment SET likes_user = '$liks_user', likes = likes - 1 WHERE floor_id = $floor_id";
        $pdo->exec($sql);
    }
    // if the user has not liked the comment, then like it
    else {
        $liks_user = $liks_user . "," . $user_id;
        $sql = "UPDATE comment SET likes_user = '$liks_user', likes = likes + 1 WHERE floor_id = $floor_id";
        $pdo->exec($sql);
    }
    $pdo = null;

    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>