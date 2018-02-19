<<<<<<< HEAD
//FUNCTIONS to TOGGLE the answers//
=======
>>>>>>> cb0e026fd930ac12d5964a8c25a7725c1731d177
function toggleAnswer1() {
    $('#answer1').slideToggle();
}
function toggleAnswer2() {
    $('#answer2').slideToggle();
}
function toggleAnswer3() {
    $('#answer3').slideToggle();
}
<<<<<<< HEAD

//HIDING all the answers//
$('#answer1').hide(); 
$('#answer2').hide();
$('#answer3').hide();

//BINDING functions to CLICKS//
=======
$('#answer1').hide();
$('#answer2').hide();
$('#answer3').hide();
>>>>>>> cb0e026fd930ac12d5964a8c25a7725c1731d177
$('#question1').click(toggleAnswer1);
$('#question2').click(toggleAnswer2);
$('#question3').click(toggleAnswer3);