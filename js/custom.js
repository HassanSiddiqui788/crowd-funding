AOS.init({
    once: true
})
$(document).ready(function () {
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/') + 1);
  if (filename == "") {
    filename = "index.php"
  }
  $("header .nav-item .nav-link").removeClass("active");
  $(`header .nav-item .nav-link[href="${filename}"]`).addClass("active")
});
$(window).scroll(function (e) {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $("header").addClass("scroll");
  } else {
    $("header").removeClass("scroll");
  }
});



// talent slider start js

// $('.talent-slider').slick({
//   dots: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   centerMode: true,
//   responsive: [{
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//       }
//     }
//   ]
// });


// step form start

// $(document).ready(function () {
//   $(".step .next").click(function () {
//     let a = $(this).parents(".step");
//     a.removeClass("active_step");
//     a.next().addClass("active_step");
//   });
//   $(".step .prev").click(function () {
//     let a = $(this).parents(".step");
//     a.removeClass("active_step");
//     a.prev().addClass("active_step");
//   });
// });
// step form end


// slick carousel responsive start 
// $('.site_map').slick({
//   dots: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   centerMode: false,
//   responsive: [{
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//       }
//     }
//   ]
// });
// slick carousel responsive end 


//banner slider
$(".bannerSlider").slick({
    dots: false,
    autoplay: true,
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slideswToScroll: 1,
    arrows: true
});

$(".exp_cat_slider").slick({
    dots: false,
    autoplay: true,
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slideswToScroll: 1,
    arrows: true
});

$(".wcs_slider").slick({
    dots: false,
    autoplay: false,
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slideswToScroll: 1,
    arrows: false
});
$(".fresh_project_slider").slick({
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slideswToScroll: 1,
    arrows: true
});

$(".news_feed_slider").slick({
    dots: false,
    autoplay: false,
    infinite: true,
    slidesToShow: 3,
    slideswToScroll: 1,
    arrows: true
});


$(".new-tech-slider").slick({
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slideswToScroll: 1,
    arrows: true
});

$(".testimonial-box-slider").slick({
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slideswToScroll: 1,
    arrows: false
});