jQuery(document).ready(function(){

    //When the concat button is clicked, combine the two strings and output the result
   				

  		jQuery ("#concatButton").click(function(e){
  			e.preventDefault();

  			var concatOne = jQuery('#concatOne').val();

  			var concatTwo = jQuery('#concatTwo').val();

  			jQuery("#concatResult").text(concatOne + concatTwo)
  		})

    // When the add20Button is clicked, get the value of the input, add 20 and place in add20Output
   
  		 jQuery ("#add20Button").click(function(e){
  			e.preventDefault();

  			var add20Input = parseFloat(jQuery('#add20Input').val());
  			add20Input = add20Input + 20;
  			jQuery('#add20Output').text(add20Input);


  		});


    // When the appendButton is clicked, get the value of the input, wrap in <p> tags and append it to the appendOutput

    	jQuery ("#appendButton").click(function(e){
  			e.preventDefault();

  			var AppendText = "<p>" + jQuery('#appendInput').val() + "</p>";
  			jQuery ("#appendOutput").append(AppendText)
  		})

});