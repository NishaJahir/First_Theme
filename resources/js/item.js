window.addEventListener('load', function() {
   
    $(document).ready( function() {
       $('.page-home .main').addClass('mt-5');
       $('#page-body .main').addClass('mt-5');
       $('.top-bar:last-child').addClass('header-new-class');
       
           var img_src = $('#img_src').val();
       $('.brand-wrapper .img-fluid').attr('src', img_src);
       $("#page-body hr").eq(0).remove();
   
    $('.custom-select').click(function(){
     $('option').css('color','#069399');
  });
       $('.page-home .main').attr('id', '');
       $('.page-home .main').children().removeClass('container-max');
    var bc_contact = $('.bc_contact').clone();
    $('.footer').prepend(bc_contact);
    $('.mainmenu').prepend('<li><a href="/"><i aria-hidden="true" class="fa fa-home"></i> Home</a></li>');

    $('.copyright').prepend('<div class="social-icons"><a href="" class="fa fa-facebook" target="_blank"></a><a href="" class="fa fa-twitter" target="_blank"></a><a href="" class="fa fa-instagram" target="_blank"></a><a href="" class="fa fa-google-plus" target="_blank"></a></div>');   
    $('.ddown fa-home').click(function(){
    $(this).css({
       'background-color':'#fbadc0',
       'background-image':'linear-gradient(to bottom, #fbadc0 0%, #f47795 100%)',
       'font-weight':'700',
       'color':'#fff',
       'border-radius':'25px',
       'line-height':'25px',
       'padding': '0 17px'});
});
    });
});
