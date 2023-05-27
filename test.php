<!DOCTYPE html>
<html>

<head>
	<title>Lecture5 Sample</title>
</head>

<body>
	<?php

	// $a = 6;
	
	// if ($a == 5):   
	// 	echo "a equals 5";    
	// 	echo "...";
	// elseif ($a == 6):    
	// 	echo "a equals 6";    
	// 	echo "!!!";
	// else:    
	// 	echo "a is neither 5 nor 6";
	// endif;
	


	// $imgname = $_FILES['myfile']['name'];
	// echo ($imgname);
	$tmp = $_FILES['myfile']['tmp_name'];
	$newname = time();

	$filepath = './pic/';
	if (move_uploaded_file($tmp, $filepath . md5($newname) . ".png")) {
		echo "上传成功";
	} else {
		http_response_code(500);
		echo "上传失败";
	}


	?>
</body>

</html>