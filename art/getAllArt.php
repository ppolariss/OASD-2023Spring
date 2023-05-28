<?php
require_once "../MyUtils/connectMysql.php";

try {
    $pdo = new PDO($dsn, $user, $pwd);
    $sql = "SELECT * from art";
    $result = $pdo->query($sql);
    $pdo = null;

    while ($row = $result->fetch()) {
        // foreach ($row as $key => $value) {
        echo json_encode($row, JSON_UNESCAPED_UNICODE);
    }
    //     echo $row[ID] . "-" . $row['CategoryName'] . "<br/>";
    // }

    // foreach ($result as $key => $value) {
    //     # code...
    // }

    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>