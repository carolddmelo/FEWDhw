// have a list of images
var animalImageList = ["animal1.jpg", "animal2.jpg", "animal3.jpg", "animal4.jpg", "animal5.jpg", "animal6.jpg", "animal7.jpg"];



// know what image we are on
var imageNumber = 0;

// function to set image
function setImage (imageNumberSelected){

//get the image in imageNumberSelevted position of the array
	var newSrc = "images/" + animalImageList[imageNumberSelected];

	//set the src of the image in the html to the image
	jQuery("#image-to-vote-on").attr("src", newSrc);

}

// function for next image
function nextImage (){

	imageNumber = imageNumber + 1;
	if (imageNumber >= animalImageList.length){
		imageNumber=0;
	}

	setImage(imageNumber);
}


// function for previous image
function previousImage (){

	imageNumber = imageNumber - 1;
	if (imageNumber >0){
		imageNumber=animalImageList.length-1;
	}

	setImage(imageNumber);


// bind previous and next buttons to functions
jQuery(document).on('ready', function(){
	jQuery("#btnNext").on('click', nextImage);
});











