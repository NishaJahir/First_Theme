window.addEventListener('load', function() {
   
    $(document).ready( function() {
   
    $('.custom-select').click(function(){
    console.log('testttttt');
     $('option').css('color','#069399');
      console.log('Newwww');
  });
    $('.footer').prepend('<div class="contact"><img src="../images/contact.png" alt="contact"><h1>Contact Us</h1></div>');
});
});
