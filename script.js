/* CODE GOES HERE */


// Wait until all the HTML elements are loaded

$(document).ready(function(){

  $('#slider').slick({
    prevArrow: "#featured_prev",
    nextArrow: "#featured_next"
  });

});

// onLoad; wait until all multimedia assets are loaded 
$(window).on("load", function(){

  $('.grid').isotope({
    // asd
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    masonry: {
      columnWidth: ".grid-sizer",
      gutter: ".gutter-sizer"
    },
  });
})

