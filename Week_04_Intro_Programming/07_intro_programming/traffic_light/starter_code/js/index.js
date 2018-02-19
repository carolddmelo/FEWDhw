<<<<<<< HEAD
document.getElementById('stopButton').onclick = illuminateRed;

function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
}
=======



function illuminateRed() {
	clearLights();
  	document.getElementById('stopLight').style.backgroundColor = "red";
}




function illuminateYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function illuminateGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}

function clearLights() {
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
    document.getElementById('stopLight').style.backgroundColor = "black";
}

document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;


>>>>>>> cb0e026fd930ac12d5964a8c25a7725c1731d177
