<?php

session_start();
if (!isset($_SESSION["user_id"]))
{
    http_response_code(401);
    die("未登录");
}
$user_id = $_SESSION["user_id"];
// if (isset($_SESSION["user_id"]))
//     echo $_SESSION["user_id"];
// else
//     echo 1;
require_once "../MyUtils/connectMysql.php";



$pic = $_FILES['pic']['tmp_name'];

$art_name = htmlspecialchars($_POST['art_name']);
$art_name = addslashes($art_name);
$author = htmlspecialchars($_POST['author']);
$author = addslashes($author);
$price = htmlspecialchars($_POST['price']);
$price = addslashes($price);
$description = htmlspecialchars($_POST['description']);
$description = addslashes($description);
$weight = htmlspecialchars($_POST['weight']);
$weight = addslashes($weight);
$size = htmlspecialchars($_POST['size']);
$size = addslashes($size);
$art_year = htmlspecialchars($_POST['art_year']);
$art_year = addslashes($art_year);
$style = htmlspecialchars($_POST['style']);
$style = addslashes($style);


header("Content-Type:text/plain;charset=utf-8");


if ($art_name == "") {
    http_response_code(400);
    die("请添加艺术品名字");
}
if ($author == "") {
    http_response_code(400);
    die("作者名字");
}
if ($price == "") {
    http_response_code(400);
    die("价格");
}
if ($description == "") {
    http_response_code(400);
    die("艺术品描述");
}


try {
    $pdo = new PDO($dsn, $user, $pwd);
    $newname = md5(time());
    $art_pic_path = $newname . '.png';
    $now = date("Y-m-d H:i:s");
    $sql = "INSERT INTO art (art_name, author, price,pic, description, weight,size,art_era,style,user_id,create_at) 
    VALUES ('$art_name', '$author', $price,'$art_pic_path','$description', $weight,'$size', '$art_year', '$style', '$user_id', '$now')";
    $pdo->exec($sql);
    $pdo = null;
    $filepath = './artPic/';
    if (!move_uploaded_file($pic, $filepath . $newname . ".png")) {
        http_response_code(500);
        echo "图片上传失败";
    }
    die(200);
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}


?>