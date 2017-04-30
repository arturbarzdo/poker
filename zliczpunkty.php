<?php
Session_start();
if(!isset($_POST['punkty'])){
header("Location:index.php");
exit();
}
$punkty = $_POST['punkty'];
$_SESSION['punkty']=$punkty;
header("Location:index.php");
?>