<?php
session_start();
require_once "./MyUtils/connectMysql.php";
header('Content-Type: application/json');
$user_id = $_SESSION["user_id"];
try{
    $obj = new stdClass();
    $pdo = new PDO($dsn, $user, $pwd);
    $sql = "SELECT * from user where id = $user_id";
    $row = $pdo->query($sql)->fetch();
    $obj->info = $row;
    $sql = "SELECT * from art where user_id = $user_id";
    $row = $pdo->query($sql)->fetchAll();
    $obj->art = $row;
    $sql = "SELECT * from purchase where user_id = $user_id";
    $row = $pdo->query($sql)->fetchAll();
    $arr = array();
    foreach ($row as $thisrow) {
        $art_id = $thisrow['art_id'];
        $sql = "SELECT * from art where art_id = $art_id";
        $newres = $pdo->query($sql)->fetch();
        $arr[] = $newres;
    }
    $obj->purchase = $arr;
    echo json_encode($obj, JSON_UNESCAPED_UNICODE);

    $pdo = null;
    die(200);
}
catch(PDOException $e){
    http_response_code(500);
    die($e->getMessage());
}
?>