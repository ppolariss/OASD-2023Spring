<?php
// post a comment to an art
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
$user_id = $_SESSION['user_id'];

try {
    // get max hole_id
    $pdo = new PDO($dsn, $user, $pwd);
    $max_hole_id = $pdo->query("SELECT MAX(hole_id) FROM comment")->fetchColumn();
    $now = date("Y-m-d H:i:s");
    $sql = "INSERT INTO comment (art_id, content, create_at, hole_id, floor_th, user_id) VALUES ($art_id, '$content', '$now', $max_hole_id + 1, 1, $user_id)";
    $pdo->exec($sql);

    $pdo = null;

    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>