window.addEventListener('load', function() {
   
    $(document).ready( function() {
   
    $('.custom-select').click(function(){
     $('option').css('color','#069399');
  });
    $('.footer').prepend('<div class="contact"><img src="../images/contact.png" alt="contact"><h1>Contact Us</h1></div>');
});
});
