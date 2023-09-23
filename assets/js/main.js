(function($) {
  "use strict";
  /*-------------------------------------------
  preloader active
  --------------------------------------------- */
  jQuery(window).on('load',function() {
    jQuery('.preloader').fadeOut('slow');
  });

  jQuery(document).ready(function(){
    /*-------------------------------------------
    js scrollup
    --------------------------------------------- */
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
    }); 
    /*-------------------------------------------
    metismenu active
    --------------------------------------------- */
    $("#metismenu").metisMenu();
    // mobile menu active code 
    $('.menu-bar').on('click', function(e) {
      e.preventDefault();
      $('.main-sidebar').toggleClass('show');
      $('.body-overlay').toggleClass('active');
    });
    $('.body-overlay').on('click', function() {
      $('.main-sidebar').removeClass('show');
      $(this).removeClass('active');
    });
    /*-------------------------------------------
    brand-slide active
    --------------------------------------------- */
    $('.brand-slide').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
      prevArrow: '<i class="slick-prev arrow fas fa-angle-left"></i> ',
      nextArrow: '<i class="slick-next arrow fas fa-angle-right"></i> ',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    });
    /*-------------------------------------------
    categories-list active
    --------------------------------------------- */
    $('.products-categories-list').slick({
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      dots: false,
      arrows: true,
      prevArrow: '<i class="arrow-prev fas fa-long-arrow-alt-left"></i>',
      nextArrow: '<i class="arrow-next fas fa-long-arrow-alt-right"></i>',
      vertical: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
    /*-------------------------------------------
    product-slide active
    --------------------------------------------- */
    $('.product-slide').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: false,
      dots: false,
      arrows: true,
      prevArrow: '<i class="arrow-prev fas fa-long-arrow-alt-left"></i>',
      nextArrow: '<i class="arrow-next fas fa-long-arrow-alt-right"></i>',
      vertical: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    /*-------------------------------------------
    testimonial-slider active
    --------------------------------------------- */
    $('.testimonial-slider').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: false,
      dots: false,
      arrows: true,
      prevArrow: '<i class="arrow-prev fas fa-long-arrow-alt-left"></i>',
      nextArrow: '<i class="arrow-next fas fa-long-arrow-alt-right"></i>',
      vertical: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    /*-------------------------------------------
    galleryThumbs active
    --------------------------------------------- */
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-slider', {
      spaceBetween: 0,
      thumbs: {
        swiper: galleryThumbs
      }
    });
    /*----------------------------
      Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    $(".qtybutton").on("click", function() {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() === "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 1) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find("input").val(newVal);
    });
    /*====================================
    simplyCountdown
    =====================================*/
    var d = new Date(),
    countUpDate = new Date();
    d.setDate(d.getDate() + 450);
    simplyCountdown('.countdown-contest', {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
      enableUtc: true
    });
    /*---------------------------------
    venobox Popup active
    -----------------------------------*/
    $('.popup-video').venobox(); 
    /*---------------------------------
    niceSelectactive
    -----------------------------------*/
    $('.wide').niceSelect();
    /*---------------------------------
    uplode profile image
    -----------------------------------*/
    $(function() {
      $('#fileuplode').change(function(event) {
        var imgurl = URL.createObjectURL(event.target.files[0]);
        $('#uplode-img').attr('src', imgurl);
      })
    });
    /*---------------------------------
    google map activation 
    -----------------------------------*/
    if ($('#gmap').length > 0) {
      new GMaps({
        div: '#gmap',
        lat: 23.7947172, // 23.7947172,90.3971412
        lng: 90.3971412,
        scrollwheel: false,				
        styles: [
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dddddd"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 17
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 29
              },
              {
                "weight": 0.2
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 18
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dddddd"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#ffffff"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          }
        ]
      }).addMarker({
        lat: 23.792930, //23.792930, 90.403798
        lng: 90.403798,
        infoWindow: {
          content: '<div class="map-marker-box"><h3 class="title">Headquarter</h3> <p>9541 Brightwell Dr, <br /> Indianapolis, IN 46260</p></div>',
        }
      });
    };

  });

})(jQuery);