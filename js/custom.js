$(function () {

   
    //    sticky menu
    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 800) {
            $(".nav_menu").removeClass("sticky");
        } else {
            $(".nav_menu").addClass("sticky");
        }
    });
    
    
    //    SmoothScroll

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500
    });

    
    
   // gallery filter: ''
var mixer = mixitup('.gallery_items');
    
    // slider-2 ''
$('.slider_wrapper2').slick({
    arrows: false,
    autoplay:true,
    infinite:true,
    dots:true
});
    
    
    /*preloder*/

document.body.onload = function(){ 
  setTimeout(function(){
    var preloader = document.getElementById('page-preloader');
    {
      preloader.classList.add('done');
    }
  }, 1000);
}
    
    
    
    // back to top ''

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


    // Mobile menu ''

$(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });



    
    

});
