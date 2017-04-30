<?php
	Session_start();
	$_SESSION['punkty'];
	$_SESSION['ilerozdan'];
	if(!isset($_SESSION['wyg'])){
	header("Location:index.php");
	exit();}
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
GRATULACJE WYGRAŁEŚ <br/>aby zapisać swój wynik wypłnij formularz<br/>
</div>
<div id="drugi">
<img src="pokwyg.jpg"/>
</div>
</div>
<div id="trzeci">
<form action="zapisz.php" method="post">
Podaj swój NICK <input type="text" name="nick"/>
<?php
	$punkty=$_SESSION['punkty'];
	$rozdania=$_SESSION['ilerozdan'];
?>
<input type="hidden" name="punkty" value="<?php echo $punkty; ?>"/>
<input type="hidden" name="ilerozdan" value="<?php echo $rozdania; ?>"/>
<input type="submit" value="zapisz"/><br/>
<?php 
echo "zdobyłeś ".$punkty." w ".$rozdania." rozdaniach" ; 

?>

</form>
</div>
</div>
</body>
</html>
