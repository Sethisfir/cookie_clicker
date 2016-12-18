
///////////////////////////////////////////////VARIABLES\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var score = 0;						//variable du score						
var hscore = 0;						//variable du hightscore
var multi = 2; 						//variable gerant le multiplicateur
var prixmulti = 80;					//Prix de base pour debloquer le multiplicateur
var prixmult = document.getElementById("prixmult")          
var mult = document.getElementById("mult");
var btn = document.getElementById("btn");
var btnr = document.getElementById("btnr");
var afficheur =  document.getElementById("afficheur");

///////////////////////////////////////////FONCTION SCORE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

prixmult.innerHTML ="prix: " + prixmulti;		//initialisation du prix multiplacateur à 80

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
	mult.innerHTML = "X" + multi;			//affichage du multiplicateur
	if (score < prixmulti) {
		alert("Pas assez de cookies clic encore comme un abrutis parceque tu aime ça!!!!")
	}
	else if (score >= prixmulti) {
		multi ++;					//incrementation de multi pour mise a jour de l'affichage(X2, X3,X4)
		mult.innerHTML = "X" + multi;
		score -= prixmulti;				//retire le prix du multiplicateur au score total
		prixmulti = prixmulti*2;
		prixmult.innerHTML ="prix: " + prixmulti;       //affichage du nouveau prix du multiplicateur
    		afficheur.innerHTML = score;                    //mise a jour du score dans l'afficheur
	}



}
///////////////////////////////////////////FONCTION RESET\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

btnr.onclick = function() {                
	if (score >= hscore) {
		cookieset(score); 
	} 
	score = 0;
	multi = 2;
	prixmulti = 80;
	afficheur.innerHTML =0;
	mult.innerHTML = "X" + multi;
	prixmult.innerHTML ="prix: " + prixmulti;
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
