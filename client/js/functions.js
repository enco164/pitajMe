$(document).ready(function () {

  $('.grid').isotope({
    // options
    layoutMode: 'masonry',
    itemSelector: '.grid-item',
    masonry: {
      gutter: 30
    }
  });

});
