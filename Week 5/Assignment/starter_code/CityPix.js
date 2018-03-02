//document ready thing here
jQuery(document).ready(function(){

//REMEMBER TO PREVENT DEFAULT THINGY
jQuery("#submit-btn").click(function(){
	event.preventDefault();

// City type... ??
	var city = jQuery("#city-type").val();
	jQuery("#city-type").val('');
	city = city.toLowerCase().trim();


//ALL THE CITIES, using 'IF' statements

	//if input is ANY FORM of NYC, CHANGE CSS class to nyc
			if (city == "new york city" || city == "nyc" || city == "new york") {
				jQuery("body").attr("class", "nyc");
			}

	//if input is ANY FORM of SF, change CSS class to sf
			if (city == "san francisco" || city == "san fran" || city == "sf") {
				jQuery("body").attr("class", "sf");
			}

	//if input is ANY form of Austin, change CSS class to austin
			if (city == "austin" || city == "atx") {
				jQuery("body").attr("class", "austin");
			}

	//if input is ANY FORM of LA, change CSS class to la
			if (city == "los angeles" || city == "la" || city == "lax") {
				jQuery("body").attr("class", "la");
			}

	//if input is ANY FORM of Sydney, change CSS class to sydney
			if (city == "sydney" || city == "syd") {
				jQuery("body").attr("class", "sydney");
			}

	//ADDED CITIES 
	//if input is ANY FORM of Brasília, change CSS class to bsb
			if (city == "brasilia" || city == "brasília" || city == "bsb") {
				jQuery("body").attr("class", "bsb");
			}

	//if input is ANY FORM of Edinburgh, change CSS class to edinburgh
			if (city == "edinburgh" || city == "edi") {
				jQuery("body").attr("class", "edinburgh");
			}

	//if input is ANY FORM of Barcelona, change CSS class to barcelona
			if (city == "barcelona" || city == "barca" || city == "barça") {
				jQuery("body").attr("class", "barcelona");
			}


			if (city == "taipei" || city == "tp") {
				jQuery("body").attr("class", "taipei");
			}


			if (city == "dc" || city == "washington dc" || city == "district of columbia") {
				jQuery("body").attr("class", "dc");
			}


			if (city == "paris") {
				jQuery("body").attr("class", "paris");
			}

	}); //--> THIS IS CLOSING LINE(s) 5&6

}); //--> THIS IS CLOSING LINE 2