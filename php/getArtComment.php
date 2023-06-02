<?php
// get all comments of an art
require_once "./MyUtils/connectMysql.php";

header('Content-Type: application/json');
session_start();
$user_id = $_SESSION["user_id"];
if($user_id==null) {
    http_response_code(401);
    die("未登录");
}
$art_id = $_GET['art_id'];
$art_id = htmlspecialchars($art_id, ENT_QUOTES, 'UTF-8');
// avoid sql injection
if (!is_numeric($art_id)) {
    http_response_code(400);
    die("艺术品id不是数字");
}

try {
    $pdo = new PDO($dsn, $user, $pwd);
    $sql = "SELECT * from art where art_id = $art_id";
    $result = $pdo->query($sql);
    if ($result->rowCount() == 0) {
        http_response_code(404);
        die("艺术品不存在");
    }
    $res  =new stdClass();
    $res->art = $result->fetch();

    $sql = "SELECT * from comment where art_id = $art_id";
    $result = $pdo->query($sql);
    $pdo = null;
    $comment_array = array();
    while ($row = $result->fetch()) {
        if ($row['is_deleted'] == 1)
            unset($row['content']);

        $liks_user_arr = explode(",", $row['likes_user']);
        $is_liked = array_search($user_id, $liks_user_arr, false);
        if($is_liked !== false) {
            $row['is_liked'] = true;
        }
        else {
            $row['is_liked'] = false;
        }
        unset($row['likes_user']);
        $comment_array[] = $row;
    }
    $res->comment = $comment_array;
    echo json_encode($res, JSON_UNESCAPED_UNICODE);

    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>