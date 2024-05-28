$(document).ready(function() {
    $('#registrationModal').modal('show');
  });
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#scrollToTop').fadeIn();
      } else {
        $('#scrollToTop').fadeOut();
      }
    });
    $('#scrollToTop').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  });
  $(document).ready(function() {
    $('#seeMoreButton').click(function() {
      $('.bracket').addClass('show');
      $(this).hide();
  
      
      $('.bracket.left').html('<p>Quality</p>');
      $('.bracket.middle').html('<p>Creativity</p>');
      $('.bracket.right').html('<p>ESP</p>');
    });
  });