// FIRST QUESTION in JavaScript is always WHEN //



document.getElementById("grayButton") .onclick = grayClick;
document.getElementById ("whiteButton") .onclick = whiteClick;
	function grayClick () {

		// background of body turn grey 
		document.body.style.backgroundColor = "grey";

		// turn text color white // 
		document.body.style.color = "white";

		// = is ASSIGNMENT //
	} //GRAY CLICK//


	function whiteClick () {

		// background of body turn white // 
		document.body.style.backgroundColor = "white";

		// turn text color white // 
		document.body.style.color = "black";

		// = is ASSIGNMENT //
	}//WHITE CLICK//