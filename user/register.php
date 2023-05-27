<?php
require_once "../MyUtils/connectMysql.php";

$username = htmlspecialchars($_POST['register_username']);
$password = htmlspecialchars($_POST['register_password']);
$phone = htmlspecialchars($_POST['register_phone']);
$email = htmlspecialchars($_POST['email']);
$address = htmlspecialchars($_POST['address']);
$birthday = htmlspecialchars($_POST['birthday']);
$nationality = htmlspecialchars($_POST['nationality']);
$gender = htmlspecialchars($_POST['gender']);

header("Content-Type:text/plain;charset=utf-8");

try {
    try {
        $pdo = new PDO($dsn, $user, $pwd); 

        $username = addslashes($username);
        $sql = 'SELECT * from user where username = ?';
        $req_user = $pdo->prepare($sql);
        $req_user->bindValue(1, $username);
        $req_user->execute();
        $row = $req_user->fetch();
        if ($row != null) {
            http_response_code(400);
            die("用户名已被注册");
        }
        $phone = addslashes($phone);
        if (!is_numeric($phone) || !checkPhoneNumber($phone)) {
            http_response_code(400);
            die("手机号格式错误");
        }else{
            $sql = 'SELECT * from user where phone = ?';
            $req_user = $pdo->prepare($sql);
            $req_user->bindValue(1, $phone);
            $req_user->execute();
            $row = $req_user->fetch();
            if ($row != null) {
                http_response_code(400);
                die("手机号已被注册");
            }
        }
        $email = addslashes($email);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            die("电子邮箱格式错误");
        }
        $nationality = addslashes($nationality);
        $address = addslashes($address);
        $birthday = addslashes($birthday);
        if (date("Y-m-d") < $birthday) {
            http_response_code(400);
            die("出生日期格式错误");
        }
        $gender = addslashes($gender);
        if ($gender != "male" && $gender != "female" && $gender != "other" && $gender != "secret") {
            http_response_code(400);
            die("性别格式错误");
        }
        $hash = md5(time());
        $hash_pwd = md5($password . $hash);

        $sql = "INSERT INTO user (isadmin, username, password,hash, phone, email,address,birthday,nationality,gender) 
    VALUES (0, '$username', '$hash_pwd','$hash','$phone', '$email','$address', '$birthday', '$nationality', '$gender')";


        $pdo->exec($sql);
        http_response_code(200);

        $pdo = null;
    } catch (PDOException $e) {
        http_response_code(400);
        echo "注册失败";
        die($e->getMessage());
    }
} catch (PDOException $e) {
    http_response_code(500);
    die($e->getMessage());
}

function checkPhoneNumber($phone_number)
{
    //@2017-11-25 14:25:45 https://zhidao.baidu.com/question/1822455991691849548.html
    //中国联通号码：130、131、132、145（无线上网卡）、155、156、185（iPhone5上市后开放）、186、176（4G号段）、175（2015年9月10日正式启用，暂只对北京、上海和广东投放办理）,166,146
    //中国移动号码：134、135、136、137、138、139、147（无线上网卡）、148、150、151、152、157、158、159、178、182、183、184、187、188、198
    //中国电信号码：133、153、180、181、189、177、173、149、199
    $g = "/^1[34578]\d{9}$/";
    $g2 = "/^19[89]\d{8}$/";
    $g3 = "/^166\d{8}$/";
    if (preg_match($g, $phone_number)) {
        return true;
    } else if (preg_match($g2, $phone_number)) {
        return true;
    } else if (preg_match($g3, $phone_number)) {
        return true;
    }

    return false;
}
?>