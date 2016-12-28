var main = function() {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });
  $('.button').click(function() {
    $('.button').animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
  });
}

$(document).ready(main);
