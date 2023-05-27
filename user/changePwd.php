<?php
require_once "../MyUtils/connectMysql.php";

$username = htmlspecialchars($_POST['password_username']);
$username =  addslashes($username);
$phone = htmlspecialchars($_POST['password_phone']);
$phone = addslashes($phone);
$password = htmlspecialchars($_POST['password_new_password']);
$password = addslashes($password);

header("Content-Type:text/plain;charset=utf-8");

try {
    $pdo = new PDO($dsn, $user, $pwd);

    $sql = 'SELECT * from user where phone = ? and username = ?';
    $req_user = $pdo->prepare($sql);
    $req_user->bindValue(1, $phone);
    $req_user->bindValue(2, $username);
    $req_user->execute();

    $row = $req_user->fetch();

    if ($row != null) {
        $hash = md5(time());
        $hash_pwd = md5($password . $hash);
        $sql = "UPDATE user SET hash = '$hash', password = '$hash_pwd' WHERE phone = '$phone'";
        $cnt = $pdo->exec($sql);
        if ($cnt == 1) {
            $pdo = null;
            http_response_code(200);
            die();
        } else {
            echo $cnt;
            $pdo = null;
            http_response_code(500);
            die("不对应唯一用户");
        }
    } else {
        $pdo = null;
        http_response_code(404);
        die("无对应用户");
    }

} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}
?>