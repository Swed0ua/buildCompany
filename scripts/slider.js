$(document).ready(function(){
    $('.slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
        breakpoint: 1140,
        settings: {
          slidesToShow: 1
        } 
        }
      ]
    });
    

            /*  $(".slider__arrow-next").keyup(function(event) {
                if (event.keyCode === 13) {
                  alert('a');  
                  $("slick-next").click();

                }
            }); */
  });