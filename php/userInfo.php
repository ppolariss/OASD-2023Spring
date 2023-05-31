<?php
session_start();
if (!isset($_SESSION["user_id"])) {
    http_response_code(401);
    die("未登录");
}
$user_id = $_SESSION['user_id'];
// $user_id = 60;
header('Content-Type: application/json');
require_once "./MyUtils/connectMysql.php";


try{
    $pdo = new PDO($dsn, $user, $pwd);
    $sql = "SELECT * FROM user WHERE id = $user_id";
    $stmt = $pdo->query($sql);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    $pdo = null;
    unset($result['password']);
    // unset($result['id']);
    unset($result['hash']);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
    die(200);
}
catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>