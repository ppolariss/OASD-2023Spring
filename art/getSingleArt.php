<?php
require_once "../MyUtils/connectMysql.php";

header('Content-Type: application/json');
$art_id = $_GET['art_id'];

try {
    $pdo = new PDO($dsn, $user, $pwd);
    $sql = "SELECT * from art where art_id = $art_id";
    $result = $pdo->query($sql);
    $pdo = null;

    while ($row = $result->fetch()) {
        echo json_encode($row, JSON_UNESCAPED_UNICODE);
        // visit + 1
        $sql = "UPDATE art SET visits = visits + 1 WHERE art_id = $art_id";
        $pdo.exec($sql);
    }


    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>