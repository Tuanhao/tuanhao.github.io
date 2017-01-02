var main = function() {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });

  $('#button1').click(function() {
    $('#heart1').animate({
      opacity: 1,
      'margin-left': '80px',
      height: "toggle",
    },1500);
  });

  $('#button2').click(function() {
    $('#heart2').animate({
      opacity: 1,
      'margin-left': '80px',
      height: "toggle"
    },1500);
  });

  $('#button3').click(function() {
    $('#heart3').animate({
      opacity: 1,
      'margin-left': '80px',
      height: "toggle"
    },1500);
  });

  $('#button4').click(function() {
    $('#heart4').animate({
      opacity: 1,
      'margin-left': '80px',
      height: "toggle"
    },1500);
  });
}

$(document).ready(main);
