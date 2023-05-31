<?php
session_start();
if (!isset($_SESSION["user_id"])) {
    http_response_code(401);
    die("未登录");
}
header('Content-Type: application/json');
require_once "./MyUtils/connectMysql.php";
$user_id = $_SESSION['user_id'];

try{
    $pdo = new PDO($dsn, $user, $pwd);
    $sql = "SELECT * FROM purchase WHERE user_id = $user_id";
    $stmt = $pdo->query($sql);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $pdo = null;
    die(json_encode($result));
}
catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>