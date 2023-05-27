<?php
require_once "../MyUtils/connectMysql.php";


$username=htmlspecialchars($_POST['login_username']);
$password=htmlspecialchars($_POST['login_password']);

header("Content-Type:text/plain;charset=utf-8");

try {

    $pdo = new PDO($dsn, $user, $pwd); //初始化一个PDO对象
    // echo "连接成功<br/>";


    // $sql = "select * from user";
    // $result = $pdo->query($sql);
    // while ($row = $result->fetch()) {
    //     echo $row[ID] . "-" . $row['CategoryName'] . "<br/>";
    // }

    // $count = $pdo->exec($sql);
    // echo "<p>Updated " . $count . "rows</p>";

    // $sql = "SELECT Title, CopyrightYear FROM Books WHERE ID = ?";
    // $statement = $pdo->prepare($sq1);
    // $statement->bindValue(1, $id);
    // $statement->execute();

    $sql = 'SELECT * from user where username = ?';
    $req_user = $pdo->prepare($sql);
    $req_user->bindValue(1, $username);
    $req_user->execute();

    $row = $req_user->fetch();
    
    if (!empty($row["password"]) )
    {
        $cpwd = md5($password . $row["hash"]);
        if ($cpwd ==$row["password"]) {
            http_response_code(200);
            die();
        }
    }
    $pdo = null;
    http_response_code(401);
    die("用户名或密码错误");
} catch (PDOException $e) {
    // if (function_exists('http_response_code'))

    // if(http_response_code()==200)
    // var_dump(http_response_code(405));

    http_response_code(500);
    die($e->getMessage());
}
?>