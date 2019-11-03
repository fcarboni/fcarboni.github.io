function openTiroir() {
    document.getElementById("tiroir").style.left = "0";
	document.getElementById("btnTiroir").style.backgroundImage = "url('res/fleche_gauche.png')";
	document.getElementById("btnTiroir").onclick = function(){closeTiroir();}
	document.getElementById("fondAccueil").style.filter = "blur(7px)";
	document.getElementById("etiquette").style.opacity = "0";
}
 
function closeTiroir() {
	document.getElementById("tiroir").style.left = "-41.7%";
    document.getElementById("btnTiroir").style.backgroundImage = "url('res/fleche_droite.png')";
	document.getElementById("btnTiroir").onclick = function(){openTiroir();}
    document.getElementById("fondAccueil").style.filter = "none";
	document.getElementById("etiquette").style.opacity = "1";
}