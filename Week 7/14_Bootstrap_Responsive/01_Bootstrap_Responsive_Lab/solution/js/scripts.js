//$('.hamburger').on('click', function( event ){
 //	event.preventDefault();
 	//$('.navigation').slideToggle();
//});


var menuOpen = -1;

$('.hamburger').on('click', function( event ){
     event.preventDefault();
     $('.navigation').slideToggle();
     menuOpen = menuOpen * -1;
});

$(window).on('resize',function(){
    if($(window).width()>=992){
        $('.navigation').show();
    }else{
        if(menuOpen>0){
            $('.navigation').show();
        }else{
            $('.navigation').hide();
        }
    }
});
