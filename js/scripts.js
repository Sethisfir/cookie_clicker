var score = 0;
var click = 0;
var hscore = 0;
var btn = document.getElementById("btn");
var btnr = document.getElementById("btnr");
btn.onclick = function () {

    if (click >= 1) {   
        score = score + click;
    } else {
        score = score + 1;
    }
    document.getElementById("afficheur").innerHTML = score;
}


btnr.onclick = function() {
	if (score >= hscore) {
		document.getElementById("hscore").innerHTML = score;
		hscore = score
		score = 0 
		document.getElementById("afficheur").innerHTML =0;
	} else {
	score = 0;
	document.getElementById("afficheur").innerHTML =0;
	}
}