<?php 
session_start();
if(!isset($_POST['submit']))
{
$_SESSION['poczatek'] = 1;
header("Location:index.php");
}
?>