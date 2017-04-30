<?php
Session_start();
if(!isset($_POST['nick'])){
header("Location:index.php");
exit();
}
require_once "root.php";

		$nick = $_POST['nick'];
		$nick = htmlentities($nick,ENT_QUOTES,"UTF-8");
		$ilerozdan = $_POST['ilerozdan'];
		$punkty = $_POST['punkty'];
		$punog = $punkty - ($ilerozdan*100);
		
		$dzisiaj = date('Y-m-d'); 
	$connect = new mysqli($host,$user111,$pass,$dbname);

		if ($connect -> connect_errno!=0)
		{
			echo "Przepraszamy, ale wystąpiłproblem połączenia z bazą i w tej chwili nie możesz zapisać swojego wyniku";
		}
		else
		{
		
		
		if ($connect->query("INSERT INTO gracze
		VALUE('NULL','".$nick."','".$punkty."','".$ilerozdan."','".$punog."','".$dzisiaj."')")) 
		{
		
		session_unset();
		
		}
		$connect->close();
		header("Location:index.php");
		}
		

?>
