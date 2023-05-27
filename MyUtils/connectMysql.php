<?php
$dbms = 'mysql'; //数据库类型
$host = 'localhost'; //数据库主机名
$dbName = 'transaction'; //使用的数据库
$user = 'root'; //数据库连接用户名
$pwd = 'root'; //对应的密码
$dsn = "$dbms:host=$host;dbname=$dbName";
?>

<?php
// require_once "../MyUtils/connectMysql.php";

// // $q=$_GET;
// header("Content-Type:text/plain;charset=utf-8");


// try {

//     $pdo = new PDO($dsn, $user, $pass); //初始化一个PDO对象
//     // echo "连接成功<br/>";


//     // $sql = "select * from user";
//     // $result = $pdo->query($sql);
//     // while ($row = $result->fetch()) {
//     //     echo $row[ID] . "-" . $row['CategoryName'] . "<br/>";
//     // }

//     // $count = $pdo->exec($sql);
//     // echo "<p>Updated " . $count . "rows</p>";

//     // $sql = "SELECT Title, CopyrightYear FROM Books WHERE ID = ?";
//     // $statement = $pdo->prepare($sq1);
//     // $statement->bindValue(1, $id);
//     // $statement->execute();

//     foreach ($pdo->query('SELECT * from user') as $row) {
//         print_r($row); //你可以用 echo($GLOBAL); 来看到这些值
//     }
//     // 你还可以进行一次搜索操作

//     $pdo = null;
// } catch (PDOException $e) {
//     // if (function_exists('http_response_code'))

//     // if(http_response_code()==200)
//     // var_dump(http_response_code(405));

//     http_response_code(500);
//     die("Error!: " . $e->getMessage() . "<br/>");
// }
// //默认这个不是长连接，如果需要数据库长连接，需要最后加一个参数：array(PDO::ATTR_PERSISTENT => true) 变成这样：
// // $db = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT => true));




// $response = "hh";
// echo $response;
// echo "<br>";
// echo "\n";

// $data = [
//     'nick_name' => 'aeswt',
//     'avatar_url' => 'dsgd',
//     'open_id' => 'sdfgh',
//     'session_key' => 'zdgdf',
//     'thr_session' => 'xsdgdfh'
// ];
// // var_dump($data);
// echo json_encode($data, JSON_UNESCAPED_UNICODE);
// // return null;
?>