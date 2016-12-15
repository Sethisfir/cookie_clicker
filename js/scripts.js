var score = 0;
var click = 0;
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
	score = 0;
	document.getElementById("afficheur").innerHTML =0;
}