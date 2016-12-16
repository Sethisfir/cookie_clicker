
///////////////////////////////////////////////VARIABLE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var score = 0;
var click = 0;
var hscore = 0;

var btn = document.getElementById("btn");
var btnr = document.getElementById("btnr");

///////////////////////////////////////////FONCTION SCORE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

btn.onclick = function () {

    if (click >= 1) {   
        score = score + click;
    } else {
        score = score + 1;
    }
    document.getElementById("afficheur").innerHTML = score;
}

///////////////////////////////////////////FONCTION RESET\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

btnr.onclick = function() {
	if (score >= hscore) {
		cookieset(score);
		document.getElementById("hscore").innerHTML = score;
		hscore = score
		score = 0 
		document.getElementById("afficheur").innerHTML =0;
	} else {
	score = 0;
	document.getElementById("afficheur").innerHTML =0;
	}
}


function cookieset(hscore){
			document.cookie='hscore=' +hscore+"; expires= Sun, 28 Feb 2099 00:00:00 UTC";
				}