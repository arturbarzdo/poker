var punktygracz=(f.a.value);

document.getElementById("punkciki").innerHTML = punktygracz;
var tab = new Array();
var ile_kart = 0;	
var i = 0;
while(i != 16)
{

var liczba;
liczba=Math.round(24*Math.random());
var losowanie = true;
for (i = 0; i<=ile_kart; i++)
{
if ((tab[i]==liczba)||(liczba ==0)){losowanie = false;}

}
if (losowanie == true)
{tab[ile_kart] = liczba; i++; ile_kart++}
}
var kart1 = new Array(5);
var kart2 = new Array(5);
function rozdaj()
{



////////////////////////////////////////////////////////////////////////////////////


var k1 = "";

for (i = 0 ; i < 5; i++)
{
	kart1[i] = tab[i]; 	
	
}
function compareNumbers(a, b) {
    return a - b;
}
kart1.sort(compareNumbers);
for (i = 0 ; i < 5; i++)
{
var karta = kart1[i];
k1 =k1 +'<div id="karty"><div id="k'+i+'" onclick ="wymien('+i+');"><img src="talja/k'+karta+'.jpg" class = "ka"></div></div>' ;	

	document.getElementById("kar").innerHTML = k1;
}
var par1="wynik";
var par2="pun";
var par3="wk";
wynik(par1,par2,par3,kart1);

var przycisk="Aby dokonać wymiany, zaznacz karty które chcesz wymienić, a następnie kliknij przycisk wymień/prezjdź dalej. Jeżeli nie wymieniasz kart po prostu kliknij przycisk wymień/prezjdź dalej";
przycisk=przycisk+'<button id ="wymieniam" onclick = "wymieniam();">wymień/prezjdź dalej</button>';
document.getElementById("buton").innerHTML = przycisk;

}


function wymien(nr)
{
var zmk = "";
zmk  = zmk +'<img src="tyl.jpg" class = "ka">';
document.getElementById('k'+nr).innerHTML = zmk;
kart1[nr] = tab[nr+10]; 
}
function wymieniam()
{
var k1 = "";
function compareNumbers(a, b) {
    return a - b;
}
kart1.sort(compareNumbers);
for (i = 0 ; i < 5; i++)
{
var karta = kart1[i];
k1 =k1 +'<div id="karty"><div id="k'+i+'"><img src="talja/k'+karta+'.jpg" class = "ka"></div></div>' ;

	document.getElementById("kar").innerHTML = k1;
}
var par4="wynik";
var par5="pun";
var par6="wymieniam";
wynik(par4,par5,par6,kart1);
var przycisk="";
przycisk=przycisk+'<button id ="spr" onclick = "spr();"> sprawdzam</button>';
document.getElementById("buton").innerHTML = przycisk;
obstaw();
}

function spr()
{
var k1 = "";

for (i = 5 ; i < 10; i++)
{
	kart2[i] = tab[i]; 	
	
}
function compareNumbers(a, b) {
    return a - b;
}
kart2.sort(compareNumbers);
for (i = 0 ; i < 5; i++)
{
var karta1 = kart2[i];
k1 =k1 +'<div id="karty1" ><img src="talja/k'+karta1+'.jpg" class = "ka"></div>' ;	

	document.getElementById("kar1").innerHTML = k1;
}
var par7="wynikkom";
var par8="punkom";
var par9="spr";
wynik(par7,par8,par9,kart2);
var graczfun=wynik(par7,par8,par9,kart1);
var komfun=wynik(par7,par8,par9,kart2);
var sum=0;
if (graczfun>komfun)
{
sum = parseInt(ileobst)+parseInt(punktygracz);
kto="wygrałeś - ";
kto+=ileobst;
document.getElementById("ktowygral").innerHTML = kto;


}
else if (graczfun<komfun)
{
sum = parseInt(punktygracz)-parseInt(ileobst);
kto="przegrałeś - ";
kto+=ileobst;
document.getElementById("ktowygral").innerHTML = kto;
}
else 
{
kto="remis";
document.getElementById("ktowygral").innerHTML = kto;
sum=punktygracz;

}
submit = "";
submit+='<form action="zliczpunkty.php" method="post">';
submit+='<input type="hidden" name="punkty" value="'+sum+'">';
submit+='<input type="submit" value="gram dalej">';
submit+='</form>';
document.getElementById("buton").innerHTML = submit;
}

function obstaw()
{
	var i=100;
	var zawdiva="<p>wybierz ile chcesz obstawić<br/></p>";
	while(i<punktygracz)
	{
		var nr = "nr"+i;
		zawdiva = zawdiva+'<div class="kwota" id="'+nr+'" onclick="spronclik('+i+')">'+i+'</div>';
		i=i*2;
	}
	var nr = "nr"+punktygracz;
	zawdiva = zawdiva+'<div class="kwota" id="'+nr+'" onclick="spronclik('+punktygracz+')">All in</div>';
	document.getElementById("obstaw").innerHTML = zawdiva;
} 
var ileobst = 100;
function spronclik(nr)
{
	var obstawiono='<div class="kwota1">OBSTAWIŁEŚ - '+nr+'</div>';
	document.getElementById("obstaw").innerHTML = obstawiono;
	ileobst = nr;
	return ileobst;
}

////////////////////////////////////////////////////////////////////////
//**********************************************************************

function wynik(wynik,punkty,wk,kartygracza){
var wynik1 = wynik;
var pun1 = punkty;
var wk1 = wk;
var kart1 = kartygracza;



 ///////////////////////////////////////////////////////////////////////

 // para, trojka, kareta, full

////////////////////////////////////////////////////////////////////////

var kom= "";
var para9=0,para10=0,paraw=0,parad=0,parak=0,paraa=0,p=0;
var kolor_karo=0,kolor_kier=0,kolor_pik=0,kolor_trefl=0,strit=0;
var k1=1;
var k2=2;
var k3=3;
var k4=4;
var k5=5;
var k6=6;
var k7=7;
var k8=8;
var k9=9;
var k10=10;
var k11=11;
var k12=12;
var k13=13;
var k14=14;
var k15=15;
var k16=16;
var k17=17;
var k18=18;
var k19=19;
var k20=20;
var k21=21;
var k22=22;
var k23=23;
var k24=24;
/*for (i=1;i<=24;i++)
{
var k+i=i;

}*/
     for ( l=0; l<5; l++) {

        if (k1 == kart1[l]) {
        para9++;
        }
         if (k2 == kart1[l]) {
        para9++;
        }
         if (k3 == kart1[l]) {
        para9++;
        }
         if (k4 == kart1[l]) {
        para9++;
        }
    }

//////////////////////////////////////////////////////////////////////////9



        for (l=0; l<5; l++){

        if (k5 == kart1[l]) {
        para10++;

        }
         if (k6 == kart1[l]) {
        para10++;
        }
         if (k7 == kart1[l]) {
        para10++;
        }
         if (k8 == kart1[l]) {
        para10++;
        }
    }


 //////////////////////////////////////////////////////////////////////// 10


 for ( l=0; l<5; l++) {

        if (k9 == kart1[l]) {
        paraw++;
        }
         if (k10 == kart1[l]) {
        paraw++;
        }
         if (k11 == kart1[l]) {
        paraw++;
        }
         if (k12 == kart1[l]) {
        paraw++;
        }
    }


 /////////////////////////////////////////////////////////////////////// W

for (l=0; l<5; l++){

        if (k13 == kart1[l]) {
        parad++;
        }
         if (k14 == kart1[l]) {
        parad++;
        }
         if (k15 == kart1[l]) {
        parad++;
        }
         if (k16 == kart1[l]) {
        parad++;
        }
    }


 ///////////////////////////////////////////////////////////////////// D


    for ( l=0; l<5; l++) {

        if (k17 == kart1[l]) {
        parak++;
        }
         if (k18 == kart1[l]) {
        parak++;
        }
         if (k19 == kart1[l]) {
        parak++;
        }
         if (k20 == kart1[l]) {
        parak++;
        }
    }



////////////////////////////////////////////////////////////////////// K


        for ( l=0; l<5; l++) {

        if (k21 == kart1[l]) {
        paraa++;
        }
         if (k22 == kart1[l]) {
        paraa++;
        }
         if (k23 == kart1[l]) {
        paraa++;
        }
         if (k24 == kart1[l]) {
        paraa++;
        }
    }


 // Sprawdzanie warunkow pary /////////////////////////////////////////////////////////




 //////////////////////////////////////////////////////////////////////////////////////


if (para9 == 2){
            p += 100;
         }

        if (para9 == 3) {
            p += 300;
        }

         if (para9 == 4) {
            p = 500;
            kom= " kareta 9";
        }


if (para10 == 2){
            p += 101;

         }

        if (para10 == 3) {
            p += 301;

        }

         if (para10 == 4) {
            p = 501;

        kom= " kareta 10";}

 if (paraw == 2){
            p += 102;

         }

        if (paraw == 3) {
            p += 302;

        }

         if (paraw == 4) {
            p = 502;
        kom= " kareta waletow";
        }



 if (parad == 2){
            p += 103;

         }

        if (parad == 3) {
            p += 303;

        }

         if (parad == 4) {
            p = 503;

        kom= " kareta dam";}

  if (parak == 2){
            p += 104;

         }

        if (parak == 3) {
            p += 304;

        }

         if (parak == 4) {
            p = 504;
            kom= " kareta kroli";
        }

      if (paraa == 2){

            p += 105;

         }

        if (paraa == 3) {
            p += 305;
        }

         if (paraa == 4) {
            p = 505;
        kom= " kareta asow";
        }
        if (p < 106){
        if (p == 100){
        kom= " para 9";}


        if (p == 101){
        kom= " para 10";}


        if (p == 102){
        kom= " para waletow";}

        if (p == 103){
        kom= " para dam";}

        if (p == 104){
        kom= " para kroli";}
        if (p == 105){
        kom= " para asow";}


        }
            if ((p > 200) && (p < 211)){
                kom= " dwie pary : ";
                if (para9 == 2){
        kom+= " para 9 ";}


        if (para10 == 2){
        kom+= " para 10 ";}


        if (paraw == 2){
        kom+= " para waletow ";}

        if (parad == 2){
        kom+= " para dam ";}

        if (parak == 2){
        kom+= " para kroli ";}
        if (paraa == 2){
        kom+= " para asow ";}
         
            }
  if ((p > 299 ) && (p < 307))
    {
        if (para9 == 3){
kom= " trojka 9";}
if (para10 == 3){
kom= " trojka 10";}
if (paraw == 3){
kom= " trojka waletow";}
if (parad == 3){
kom= " trojka dam";}
if (parak == 3){
kom= " trojka kroli";}
if (paraa == 3){
kom= "trojka asow";}
    }

    if ((p > 399 ) && (p < 411)){
            kom= " full ";
if (para9 == 3){
kom+= " 9 -tki na ";}
if (para10 == 3){
kom+= " 10 -tki na ";}
if (paraw == 3){
kom+= " walety na ";}
if (parad == 3){
kom= " damy na ";}
if (parak == 3){
kom+= " krole na ";}
if (paraa == 3){
kom+= " asy na ";}

if (para9 == 2){
kom+= " 9 -tki ";}
if (para10 == 2){
kom+= " 10 -tki ";}
if (paraw == 2){
kom+= " walety ";}
if (parad == 2){
kom+= " damy ";}
if (parak == 2){
kom+= " krole";}
if (paraa == 2){
kom+= " asy ";}


    }

///////////////////////////////////////////////////////////////////////////////////////////


// kolor, strit, poker


///////////////////////////////////////////////////////////////////////////////////////////

     //kolor

      for ( l=0; l<5; l++) {

        if (k1 == kart1[l]) {
        kolor_trefl++;
        }
         if (k5 == kart1[l]) {
        kolor_trefl++;
        }
         if (k9 == kart1[l]) {
        kolor_trefl++;
        }
         if (k13 == kart1[l]) {
        kolor_trefl++;}
        if (k17 == kart1[l]) {
        kolor_trefl++;}
        if (k21 == kart1[l]) {
        kolor_trefl++;}

         }

           for ( l=0; l<5; l++) {

        if (k2 == kart1[l]) {
        kolor_pik++;
        }
         if (k6 == kart1[l]) {
        kolor_pik++;
        }
         if (k10 == kart1[l]) {
        kolor_pik++;
        }
         if (k14 == kart1[l]) {
        kolor_pik++;}
        if (k18 == kart1[l]) {
        kolor_pik++;}
        if (k22 == kart1[l]) {
        kolor_pik++;}

         }

          for ( l=0; l<5; l++) {

        if (k3 == kart1[l]) {
        kolor_karo++;
        }
         if (k7 == kart1[l]) {
        kolor_karo++;
        }
         if (k11 == kart1[l]) {
        kolor_karo++;
        }
         if (k15 == kart1[l]) {
        kolor_karo++;}
        if (k19 == kart1[l]) {
        kolor_karo++;}
        if (k23 == kart1[l]) {
        kolor_karo++;}

         }


           for ( l=0; l<5; l++) {

        if (k4 == kart1[l]) {
        kolor_kier++;
        }
         if (k8 == kart1[l]) {
        kolor_kier++;
        }
         if (k12 == kart1[l]) {
        kolor_kier++;
        }
         if (k16 == kart1[l]) {
        kolor_kier++;}
        if (k20 == kart1[l]) {
        kolor_kier++;}
        if (k24 == kart1[l]) {
        kolor_kier++;}

         }
        //strit

 for ( l=0; l<5; l++) {
    if(kart1[l] <= 4) strit+=1;

    if((kart1[l] <= 8) && (kart1[l] > 4)) strit+=10;

    if((kart1[l] <= 12) && (kart1[l] > 8)) strit+=100;

    if((kart1[l] <= 16) && (kart1[l] > 12)) strit+=1000;

    if((kart1[l] <= 20) && (kart1[l] > 16)) strit+=10000;

    if(kart1[l] > 20) strit+=100000;}


    //strit sprawdzanie warunków

        if ((strit == 11111)&&(kolor_kier != 5)&&(kolor_pik != 5) && (kolor_karo != 5)&& (kolor_trefl != 5)){
            p = 325;
            kom= " maly strit";

        }
        if ((strit == 111110)&&(kolor_kier != 5)&&(kolor_pik != 5)&& (kolor_karo != 5)&& (kolor_trefl != 5)){
            p = 350;
            kom= " duzy strit";

        }

     //kolor sprawdzanie warunkow
        if ((kolor_trefl == 5)&&(strit != 111110) && (strit != 11111)) {
            p = 360;
            kom= " kolor trefl";
        }
         if ((kolor_pik == 5)&&(strit != 111110) && (strit != 11111)){
            p = 361;
            kom= " kolor pik";
        }

         if ((kolor_karo == 5)&&(strit != 111110) && (strit != 11111)){
            p = 362;
            kom= " kolor karo";
        }
         if ((kolor_kier == 5)&&(strit != 111110) && (strit != 11111)){
            p = 363;
            kom= " kolor kier";
        }


        // poker sprawdzanie warunków



         if ((kolor_trefl == 5)&& (strit == 11111)) {
            p = 601;
            kom= " maly POKER trefl";
        }
         if ((kolor_pik == 5)&& (strit == 11111)){
            p = 602;
            kom= " maly POKER pik";
        }

         if ((kolor_karo == 5)&& (strit == 11111)){
            p = 603;
            kom= " maly POKER karo";
        }
         if ((kolor_kier == 5)&& (strit == 11111)){
            p = 604;
            kom= " maly POKER kier";
        }


        if ((kolor_trefl == 5)&&(strit == 111110)) {
            p = 605;
            kom= " duzy POKER trefl";
        }
         if ((kolor_pik == 5)&&(strit == 111110) ){
            p = 606;
            kom= " duzy POKER pik";
        }

         if ((kolor_karo == 5)&&(strit == 111110)){
            p = 607;
            kom= " duzy POKER karo";
        }
         if ((kolor_kier == 5)&&(strit == 111110)){
            p = 608;
            kom= " duzy POKER kier";
        }
 
	
//**********************************************************************
////////////////////////////////////////////////////////////////////////
document.getElementById(wynik1).innerHTML = kom;
//document.getElementById(pun1).innerHTML = p;
document.getElementById(wk1).setAttribute("onclick",";");
return p;
}