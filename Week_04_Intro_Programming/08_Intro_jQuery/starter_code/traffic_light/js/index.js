//Implement the red light using jQuery. Don't forget to add the script tags.

//Red Light
function illuminateRed(){

	//clear all lights
	jQuery(".bulb").css("background","black");
	//Light Red
	jQuery("#stopLight").css("background","red");

}

//YELLOW light//
function illuminateYellow(){
//clear all lights
	jQuery(".bulb").css("background","black");
	//Light Yellow
	jQuery("#slowLight").css("background","yellow");

}

//GREEN light//
function illuminateGreen(){

//clear all lights
	jQuery(".bulb").css("background","black");
	//Light Green
	jQuery("#goLight").css("background","green");

}

jQuery("#stopButton").click(illuminateRed);
jQuery("#slowButton").click(illuminateYellow);
jQuery("#goButton").click(illuminateGreen);