
jQuery("#grayButton") .on('click',switchGray);
jQuery("#whiteButton") .on('click',switchWhite);

function switchGray() { 

	jQuery("body") .css("background", "gray");	 /*targeting the "body" class; can be done to IDs */
  
 	 jQuery("body") .css("color", "white");
  
}

function switchWhite() {

  jQuery("body") .css("background", "white");
jQuery("body") .css("color", "black");

}
