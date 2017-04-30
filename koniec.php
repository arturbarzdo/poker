<?php
	session_start();
	
	if(!isset($_SESSION['kon'])){
	header("Location:index.php");
	exit();
	}
	
?>
	

<!DOCTYPE html>
<html>
<head>
	<title> poker</title>
	<link rel="Stylesheet" type="text/css" href="s1.css"/>
	<meta charset="utf8"/>
</head>
<body>	
<div>
<div id="pierwszy" >
KONIEC GRY - PRZEGRYWASZ !!!
<?php session_unset(); ?>
</div>
<div id="drugi">
<img src="pokwyg1.jpg"/>
</div>
<form action="index.php" method="post">
<input type="submit" value="Wyjście"/><br/>
</form>
</div>
</div>
</body>
</html>
