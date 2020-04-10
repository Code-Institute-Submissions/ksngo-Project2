
//**************** reference to https://www.templatemonster.com/blog/back-to-top-button-css-jquery/ *************************/

$(document).ready(function() {
  
    let btn = $('#button-to-top');
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 500) {
        btn.css('visibility','visible')
        btn.css('opacity','1')
      } else {
        btn.css('visibility','hide')
        btn.css('opacity','0')
      }
    });
  
    btn.on('click', function() {
      
      $('html, body').animate({scrollTop:0}, '300');
    });
  
  });