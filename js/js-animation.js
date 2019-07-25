$(document).ready(function () {
  $('#ex1').slider({
  });

  $('#ex2').slider({
  });

  $('#media').carousel({
    pause: true,
    interval: false,
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 4
      },
    }
  });

  $('a').click(function(){
    var producer = $(this).text();
    $.get("",{type: s},function(response){
      alert($(this).text());
    });
  });
});



