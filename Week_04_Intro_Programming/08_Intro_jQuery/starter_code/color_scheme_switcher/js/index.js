<<<<<<< HEAD

jQuery("#grayButton") .on('click',switchGray);
jQuery("#whiteButton") .on('click',switchWhite);

function switchGray() { 

	jQuery("body") .css("background", "gray");	 /*targeting the "body" class; can be done to IDs */
  
 	 jQuery("body") .css("color", "white");
  
}

function switchWhite() {

  jQuery("body") .css("background", "white");
jQuery("body") .css("color", "black");

=======
document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
>>>>>>> cb0e026fd930ac12d5964a8c25a7725c1731d177
}
