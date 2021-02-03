(function($) {
  
  "use strict";  

  $(window).on('load', function() {

    /* 
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

  /* 
   One Page Navigation & wow js
   ========================================================================== */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });
  
  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
        closedSymbol: '<i class="icon-arrow-right"></i>',
        openedSymbol: '<i class="icon-arrow-down"></i>',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
     delay: 10,
     time: 1000
    });


    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });


      $("#contactForm").submit(function(e){
        e.preventDefault();
        var $inputs = $('#contactForm :input');
        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });
        console.log(values.name);
        console.log(values.email);
        console.log(values.subject);
        console.log(values.message);
        console.log(values);
        var email = 'cscarol20@gmail.com';
        
        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "cscarol20@gmail.com",
          Password: "201B363D484C10D43D4BE6DB200184A92AA9",
          To: email, 
          From: values.email, 
          Subject: values.subject, 
          Body: values.message, 
        }).then (function(message) {
            console.log(message);
            alert(message);
          });
        // alert("Message Sent");
      });

  });      

}(jQuery));