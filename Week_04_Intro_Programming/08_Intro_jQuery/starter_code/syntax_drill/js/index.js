jQuery(document).ready(function(){

    
    // When purple box is clicked, set all paragraphs to be purple
    function PurpleBoxClick (){
    	jQuery(".changes").css("color","purple");
    	jQuery (".changes").css("background", "none");
    }

    jQuery ("#purpleBox").click(PurpleBoxClick)

    // When the blue box is clicked set the hipster paragraph to have white text with a blue background.  All other paragraphs should be black
    function BlueBoxClick() {
    	jQuery ("p").css("color", "black");
    	jQuery ("p.hipsterSpeak").css("color", "white");
    	jQuery ("p.hipsterSpeak").css("background", "blue");


  	}

  	jQuery ("#blueBox").click(BlueBoxClick)

    // When the red box is clicked set the list items toggle red background and white text on and off

    function RedBoxClick(){
    	
   		  jQuery ("li").toggleClass("redForm") //.toggleClass has the target NAME as its input, hence this is not .redForm//
    }

    jQuery ("#redBox").click(RedBoxClick)

        

    // When any of the boxes are clicked, add a 6px solid black bottom border
    function BorderClick(){
    	jQuery (".boxes").css("border-bottom", "6px solid black")
    }
    
    jQuery (".boxes").click(BorderClick)


});