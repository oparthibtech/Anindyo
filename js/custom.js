"use strict"

$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,
        nav:true,
        animateOut: 'fadeOut',
        
    });

    var $grid =	$('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1,
        }
      })
      
          $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });


      //skills progress bar
    var index = 0;
    $(document).scroll(function () {
        var top = $('.skills_part').height() - $(window).scrollTop();
        console.log(top)
        if (top < -600) {
            if (index == 0) {
                $('.chart').easyPieChart({
                    easing: 'easeOutBounce',
                    barColor: '#63c9ff',
                    scaleLength: 0,
                    lineWidth: 7,
                    size: 130,
                    onStep: function (from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            }
            index++;
        }
    });

    //counter
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });

});