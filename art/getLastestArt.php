<?php
// get lastest art limit by art_number
require_once "../MyUtils/connectMysql.php";

header('Content-Type: application/json');
$art_number = $_GET['art_number'];
// $art_number = 10;

try {
    $pdo = new PDO($dsn, $user, $pwd);
    $sql = "SELECT * from art order by create_at desc limit $art_number";
    $result = $pdo->query($sql);
    $pdo = null;
    $art_array = array();
    while ($row = $result->fetch()) {
        $art_array[] = $row;
        // echo json_encode($row, JSON_UNESCAPED_UNICODE);
    }
    echo json_encode($art_array, JSON_UNESCAPED_UNICODE);

    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>