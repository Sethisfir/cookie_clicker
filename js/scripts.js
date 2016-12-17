
///////////////////////////////////////////////VARIABLES\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var score = 0;
var click = 0;
var hscore = 0;
var multi = 2; 
var prixmulti = 80;
var prixmult = document.getElementById("prixmult")          //
var mult = document.getElementById("mult");
var btn = document.getElementById("btn");
var btnr = document.getElementById("btnr");
var afficheur =  document.getElementById("afficheur");

///////////////////////////////////////////FONCTION SCORE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

prixmult.innerHTML ="prix: " + prixmulti;

btn.addEventListener("click", function () {
	if (multi >= 3){
		score += multi -1;
	}
	else {
		score++;
	}
   
    afficheur.innerHTML = score;
}, false);

function multiplicateur() {
	mult.innerHTML = "X" + multi;
	if (score < prixmulti) {
		alert("Pas assez de cookies clic encore comme un abrutis parceque tu aime ça!!!!")
	}
	else if (score >= prixmulti) {
		multi ++;
		mult.innerHTML = "X" + multi;
		score -= prixmulti;
		prixmulti = prixmulti*2;
		prixmult.innerHTML ="prix: " + prixmulti;
    	afficheur.innerHTML = score;
	}



}
///////////////////////////////////////////FONCTION RESET\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

btnr.onclick = function() {
	if (score >= hscore) {
		cookieset(score);
		score = 0 
		afficheur.innerHTML = 0;
	} 
	else {
		score = 0;
		afficheur.innerHTML =0;
	}
}


function cookieset(hscore){
	document.cookie='hscore=' +hscore+"; expires= Sun, 14 may 2017 00:00:00 UTC; path=/"
				}

function readCookie(hscore) {
	var hscoreEQ = hscore + "=";
	var ca = document.cookie.split(';'); 
	for(var i=0;i < ca.length;i++) { 												   //Recherche dans le tableau //
		var c = ca[i];															   	  //c = cookie en cours;      //
		while (c.charAt(0)==' ') c = c.substring(1,c.length);					  	 //suppression des espace.   //
		if (c.indexOf(hscoreEQ) == 0) return c.substring(hscoreEQ.length,c.length);	//retourn c.lenght - hscoreEQ.lenght//
	}
	return null;	
}

	document.getElementById("hscore").innerHTML = readCookie("hscore");
 

 window.onbeforeunload = function() {								//unbeforeunload "evenent provoqué par la fermeture de la fenêtre"
 	if (score > parseInt(readCookie("hscore"))){					//parseInt retranscrit une chaine de charecter en nombre ("12" = 12)
 		cookieset(score);
 	}
 	else if(!readCookie("hscore")){									//else if (sinon si) si le cookie hscre doesn't exist
 		cookieset = 0;												//we created it!
 	}
 	// body...
 } 
