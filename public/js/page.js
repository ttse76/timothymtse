$(document).ready(function(){
    let preloaderFadeOutTime = 500;
    function hidePreloader(){
        let preloader = $('.preload-wrapper');
        preloader.delay(1000);
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    $('#encryptedEmail').addClass('contact-link').attr('target', '_blank').html('<img class="contact-img" src="/img/gmail.png" >');
    $('div').tooltip({
        container: '.contact-source'
     });
});
