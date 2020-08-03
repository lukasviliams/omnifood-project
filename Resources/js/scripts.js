$(document).ready(function(){

    /* Sticky navigation*/

    new Waypoint({
               
        // At which element should the "handler" method be called
        element: $('.js--section-features'),
     
        // This method will be called once we hit the "Features" section
        handler: function(direction) {
            if (direction === 'down') {
     
                // When the user scrolls down
                $('nav').addClass('sticky');
            } else {
     
                // When the user scrolls up
                $('nav').removeClass('sticky');
            }
        },
     
        // The "handler" method will be called 60px before we hit the "Features" element.
        offset: '60px'
    });

    /* Animation on scroll */

    $('.js--wp-1').waypoint(
        (direction) => {
          $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        },
        {
          offset: '60%',
        }
      );

      $('.js--wp-2').waypoint(
        (direction) => {
          $('.js--wp-2').addClass('animate__animated animate__backInUp');
        },
        {
          offset: '50%',
        }
      );

      $('.js--wp-3').waypoint(
        (direction) => {
          $('.js--wp-3').addClass('animate__animated animate__fadeInRight');
        },
        {
          offset: '50%',
        }
      );
      $('.js--wp-4').waypoint(
        (direction) => {
          $('.js--wp-4').addClass('animate__animated animate__bounceIn');
        },
        {
          offset: '50%',
        }
      );

 });