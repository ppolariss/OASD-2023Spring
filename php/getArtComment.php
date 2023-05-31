<?php
// get all comments of an art
require_once "./MyUtils/connectMysql.php";

header('Content-Type: application/json');
$art_id = $_GET['art_id'];
$art_id = htmlspecialchars($art_id, ENT_QUOTES, 'UTF-8');
// avoid sql injection
if (!is_numeric($art_id)) {
    http_response_code(400);
    die("艺术品id不是数字");
}

try {
    $pdo = new PDO($dsn, $user, $pwd);
    $sql = "SELECT * from comment where art_id = $art_id";
    $result = $pdo->query($sql);
    $pdo = null;
    $comment_array = array();
    while ($row = $result->fetch()) {
        if ($row['is_deleted'] == 1)
            unset($row['content']);
        unset($row['likes_user']);
        $comment_array[] = $row;
    }
    echo json_encode($comment_array, JSON_UNESCAPED_UNICODE);

    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>