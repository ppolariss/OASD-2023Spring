<?php
// reply a comment to a comment
session_start();
if (!isset($_SESSION["user_id"]))
{
    http_response_code(401);
    die("未登录");
}

require_once "../MyUtils/connectMysql.php";

header('Content-Type: application/json');
$art_id = $_GET['art_id'];
$content = $_GET['content'];
$hole_id = $_GET['hole_id'];
$user_id = $_SESSION['user_id'];

try {
    $pdo = new PDO($dsn, $user, $pwd);
    $now = date("Y-m-d H:i:s");
    // get the max floor_th of the comment in the hole
    $floor_th = $pdo->query("SELECT MAX(floor_th) FROM comment WHERE hole_id = $hole_id")->fetchColumn();
    $sql = "INSERT INTO comment (art_id, content, create_at, hole_id, floor_th, user_id) VALUES ($art_id, '$content', '$now', $hole_id, $floor_th + 1, $user_id)";
    $pdo->exec($sql);

    $pdo = null;

    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>