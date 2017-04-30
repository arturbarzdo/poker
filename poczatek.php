
<!DOCTYPE html>
<html>
<head>
	<title> poker</title>
	<link rel="Stylesheet" type="text/css" href="s1.css"/>
	<link href="https://fonts.googleapis.com/css?family=Overpass+Mono" rel="stylesheet">
	<meta charset="utf8"/>
</head>
<body>	
<div>
<center>"Poker 5 kart"</center>
<div id="p1">

<form action="nowagra.php" method="post">
<input type="submit" value="Nowa gra"/><br/>
</form>
<img src="pokfot.png"/>
</div>
<div id="p2">
<?php
require_once "root.php";

		$nick = $_POST['nick'];
		$nick = htmlentities($nick,ENT_QUOTES,"UTF-8");
		$ilerozdan = $_POST['ilerozdan'];
		$punkty = $_POST['punkty'];
		$punog = $punkty - ($ilerozdan*100);
	$connect = new mysqli($host,$user111,$pass,$dbname);

		if ($connect -> connect_errno!=0)
		{
			echo "błąd połączzenia ";
		}
		else
		{
		$sql = "Select * From gracze  order by  suma_punktow  DESC limit 10";
		$result = $connect->query($sql);

		if ($result->num_rows > 0) 
		{
		// output data of each row
		echo "Najlepsze wyniki<br/><br/>";
		echo "NICK .. Punkty - (rozdania*100) = Punkty<br/><br/>";
		while($row = $result->fetch_assoc()) {
		$ile = strlen($row["nick"]);
		$iteracja = 18 - $ile;
		echo $row["nick"]. " ";
		for($i=0;$i<$iteracja;$i++){echo ".";}
		
		echo " " . $row["liczba_punktow"];
		echo " - " . $row["ilosc_rozdan"];
		echo " = " . $row["suma_punktow"] ."<br>";
		}
		
		
		}
		$connect->close();
		}
?>
</div>
</div>

</body>
</html>