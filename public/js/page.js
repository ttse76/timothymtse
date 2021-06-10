$(document).ready(function(){
    let preloaderFadeOutTime = 500;
    function hidePreloader(){
        let preloader = $('.preload-wrapper');
        preloader.delay(1000);
        preloader.fadeOut(preloaderFadeOutTime);
    }
    $('#encryptedEmail').addClass('contact-link').attr('target', '_blank').html('<div class="contact-tooltip" title="Email" data-toggle="tooltip" data-placement="bottom"><img class="contact-img" src="/img/gmail.png" ></div>');

    $('[data-toggle="tooltip"]').tooltip();

    hidePreloader();
});
