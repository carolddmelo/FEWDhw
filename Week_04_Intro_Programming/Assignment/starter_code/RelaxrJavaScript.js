jQuery(document).ready(function () {

jQuery('.learnmore').click(function (e) {
        e.preventDefault(); // --> COULD NOT FIGURE THE preventDefault alone
        jQuery('#learnmoretext').slideDown();
        jQuery('.learnmore').hide();
    });
    jQuery('.readmore').click(function (e) {
        e.preventDefault();
        jQuery('#show-this-on-click').slideDown();
        jQuery('.readmore').hide();
        jQuery('.readless').show();
    });

    jQuery('.readless').click(function (e) {
        e.preventDefault();
        jQuery('#show-this-on-click').slideUp();
        jQuery('.readless').hide();
        jQuery('.readmore').show();
    });

});





// PREVIOUS TRIAL (02/18)             
//READ MORE
//    function ReadMore (){
//    jQuery('#show-this-on-click').slideDown();
//    jQuery('.readless').hide();
//    jQuery('.readmore').show()
//}

//jQuery ('#show-this-on-click').click (ReadMore)

//LEARN MORE
//function LearnMore (){
//    jQuery('#learnmoretext').slideDown();
//    jQuery('leanmore').hide();
//}

//jQuery (


