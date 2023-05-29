<?php
// delete a comment
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
    // check if the user is the author of the comment
    $pdo = new PDO($dsn, $user, $pwd);
    $comment = $pdo->query("SELECT * FROM comment WHERE floor_id = $floor_id AND is_deleted = 0")->fetchColumn();
    // if the comment is not found, then return 404
    if($comment == false) {
        http_response_code(404);
        die("Comment not found");
    }
    // if the user is not the author of the comment, then return 403
    if($commemt['user_id'] != $user_id) {
        http_response_code(403);
        die("You are not the author of the comment");
    }
    // if the user is the author of the comment, then delete it
    $sql = "UPDATE comment SET is_deleted = 1 WHERE floor_id = $floor_id";
    $pdo->exec($sql);

    $pdo = null;

    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>