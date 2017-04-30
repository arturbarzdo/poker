<?php
	Session_start();
	if(!isset($_SESSION['poczatek']))
	{
	header("Location:poczatek.php");
	
	}
	if (!isset($_SESSION['punkty'])){
	$_SESSION['punkty']=1280;
	$_SESSION['ilerozdan']=0;
	}
	else if($_SESSION['punkty']<100){
		$_SESSION['kon']=1;
		header("location: koniec.php");
		exit();
	}
	else if($_SESSION['punkty']>200000){
	$_SESSION['wyg']=1;
		header("location: wygrana.php");
		exit();
	}
	$_SESSION['ilerozdan']++;
?>
<!DOCTYPE html>
<html>
<head>
	<title> poker</title>
	<link rel="Stylesheet" type="text/css" href="s.css"/>
	<meta charset="utf8"/>
	
</head>
<body>	
<?php $pun =  $_SESSION['punkty']; ?>
<form action="index.php" method="post" name="f">
<input type="hidden" name="a" value="<?php echo $pun; ?>">
</form>	
<div id="plansza">
<p style="text-align:center;color:red;font-size:35px;text-decoration:blink">P o K e R</p>

<div id="stol">
<div id="kar">
<?php
for ($i = 0; $i < 5; $i++)
{
echo '<div id="karty"><img src="tyl.jpg" class = "ka"></div>';

}  
?> 
</div>
<!--*****************************************************************-->
<div id = "zeton" > P O K E R <br/>5 kart </div>
<div id="kar1"><?php
for ($i = 0; $i < 5; $i++)
{
echo '<div id="karty1"><img src="tyl.jpg" class = "ka"></div>';

}  
?> </div>
</div>
<div id= "punkty">



<!--button id ="wymieniam" onclick = "wymieniam();"> wymieniam</button-->

<br/>
<div> 
<div>Punkty</div>

<div id="punkciki"> </div>

<div>Twój wynik to</div>
<div id="wynik" > ---- </div>
<!--div id="pun" style="color:white"> </div-->
<div>Wynik komputera to</div>
<div id="wynikkom"> ---- </div>
<div id="obstaw" style="text-align:center;"> 

</div>


<!--div id="punkom" style="color:white"> </div-->

<!--button id ="spr" onclick = "spr();"> sprawdzam</button-->
<!--p style="color:white">Wygrywa:</p-->

<div id="buton">

<button id ="wk" onclick = "rozdaj();"> rozdaj</button>
</div>
<div id="ktowygral"> </div>

</div>
</div>
<script src="plik.js"></script>
</body>
</html>