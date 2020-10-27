$(document).ready(function(){
    let preloaderFadeOutTime = 500;
    function hidePreloader(){
        let preloader = $('.preload-wrapper');
        preloader.delay(1500);
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});
