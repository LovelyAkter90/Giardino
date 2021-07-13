$(function(){
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        fade:true,
        speed:1500,
        autoplaySpeed: 2000,
      });
//video
$('.venobox').venobox(); 
jQuery(".player").YTPlayer();



$('.team-main').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  centerPadding:false,
  arrows:false,
  speed:1500,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    },
   
  
     { breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    { breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    { breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    { breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    { breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      }
    },
  ]
});
//blog part

  $('.blog-1').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding:false,
    arrows:false,
    speed:1500,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      }
     
    ]











});
    //wow js   
new WOW().init();


//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 80
            }, 2000);
            return false;
        }
    }
});

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 150){
    $('.navbar').addClass('bg');
  }
  else {
    $('.navbar').removeClass('bg');
  }
});
 
//counter part

$('.counter').counterUp({
  delay:5,
  time: 1500,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    }
   
  ]
});

$('.side-click').click(function(){
  $('.sidebar').toggleClass('sideopen');
  $('.side-click').toggleClass('side-click2');
  $('.side-click').toggleClass('fa-bars');
});
//gallery




$('.reserv-main').slick({
  slidesToShow: 1,
  fade:true,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  speed:1500,
  autoplaySpeed: 2000,
});


$('.form-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  speed:1500,
  autoplaySpeed: 2000,
});

//back to top

$('.back-to-top') .click(function(){
  $('html , body').animate({scrollTop:0} ,1500);


});


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    startSlide: 0,
    auto: 3000,
    slideShadows: true,
  },
  loop:true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },

})
})




