document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick =illuminateGreen;


function illuminateRed() {
	// MAKE TOP LIGHT RED //
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow () {
	//MAKE MIDDLE YELLOW //
	clearLights();
	document.getElementById('slowLight').style.backgroundColor = "yellow";
}


function illuminateGreen () {
	//MAKE BOTTOM GREEN//
  	clearLights();
	document.getElementById('goLight').style.backgroundColor = "green";
}


function clearLights() {
	//TURN EACH BACK TO BLACK //
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";

}