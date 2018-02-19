jQuery("#submit").click(function(){

	// Get values
	var a = jQuery("#a").val();
	var b = jQuery("#b").val();

	console.log(a);
	console.log(b);


	// if A > B show >
	 if(parseFloat(a) > parseFloat(b)){
        jQuery("#comparison").text(">");
    }

	// if A < B show <
	 if(parseFloat(a) < parseFloat(b)){
        jQuery("#comparison").text("<");
    }


	// if A = B show ==
	 if(parseFloat(a) == parseFloat(b)){
        jQuery("#comparison").text("==");
    }






    if(isNaN(a) || isNaN(b)){
        jQuery("#comparison").text("NaN");
    }
})