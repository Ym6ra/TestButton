
<?php
ob_start();
$new_url = 'http://z96087s4.beget.tech';

if (isset($_POST['email'],$_POST['phone'])){

ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
$from = "stralexy2302@gmail.com";
$to = "order@salesgenerator.pro";
$subject = "Заявка Стрельцов";
$message = "Почта: ".$_POST['email']."\r\n";
$message .= "Телефон: ".$_POST['phone']."\r\n";

$headers = "From:" . $from;
//mail($to,$subject,$message, $headers);
echo $to.$subject.$message.$headers;
}

header('Location: '.$new_url);
ob_end_flush();
?>
