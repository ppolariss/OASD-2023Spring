<?php
header('Content-Type: application/json');
require_once "../MyUtils/connectMysql.php";

$search_content = $_POST['search_content'];
$search_assign = $_POST['search_assign'];
// avoid sql injection
$search_content = htmlspecialchars($search_content, ENT_QUOTES, 'UTF-8');
$search_assign = htmlspecialchars($search_assign, ENT_QUOTES, 'UTF-8');

try {
    $pdo = new PDO($dsn, $user, $pwd);
    if ($search_assign == "art_name")
        $sql = "SELECT * FROM art WHERE art_name LIKE '%$search_content%'";
    else if ($search_assign == "description")
        $sql = "SELECT * FROM art WHERE description LIKE '%$search_content%'";
    else if ($search_assign == "author")
        $sql = "SELECT * FROM art WHERE author LIKE '%$search_content%'";
    else
        $sql = "SELECT * FROM art WHERE art_name LIKE '%$search_content%' OR description LIKE '%$search_content%' OR author LIKE '%$search_content%' or art_era LIKE '%$search_content%'";
    $art_array = $pdo->query($sql)->fetchAll();
    $pdo = null;
    echo json_encode($art_array);
    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>