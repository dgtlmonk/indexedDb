setTimeout(() => {

    GoInFullscreen(document.getElementById("el"));
    consle.log('going fullscreen')

}, 200)

/* Get into full screen */
function GoInFullscreen(element) {
    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();
}