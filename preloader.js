// Hide preloader once the page and assets have finished loading
(function(){
    // Minimum time (ms) the preloader stays visible
    var MIN_DISPLAY_MS = 2000; // show at least 2000ms (2s)
    // Fallback timeout (ms) in case load never fires
    var FALLBACK_MS = 8000; // 8s fallback

    var start = Date.now();

    function doHide(p) {
        p.classList.add('preloader--hidden');
        // remove from DOM after transition
        setTimeout(function(){ if(p && p.parentNode) p.parentNode.removeChild(p); }, 800);
    }

    function hidePreloader() {
        var p = document.getElementById('preloader');
        if (!p) return;
        var elapsed = Date.now() - start;
        if (elapsed >= MIN_DISPLAY_MS) {
            doHide(p);
        } else {
            setTimeout(function(){ doHide(p); }, MIN_DISPLAY_MS - elapsed);
        }
    }

    // Prefer load event to ensure images are ready
    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader, {passive:true});
        // fallback: hide after FALLBACK_MS in case load never fires
        setTimeout(hidePreloader, FALLBACK_MS);
    }
})();
