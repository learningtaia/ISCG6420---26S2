/* ----------------- SIDEBAR ANIMATION START ----------------- */ 
function animate() {
    const sidebarScene1 = document.getElementById("sidebarScene1");
    const sidebarScene2 = document.getElementById("sidebarScene2");
    const sidebarScene3 = document.getElementById("sidebarScene3");
    const sidebarScene4 = document.getElementById("sidebarScene4");

    let opacity = 1;
    let phase = 0;
    let counter = 0;
    let animID = 0;

    function doAnimation() {
        if (phase == 0) {
            counter++;
            if (counter >= 200) { // image 1 stays visible for 2 secs
                counter = 0;
                phase = 1;
            }
        }
        else if (phase == 1) {
            opacity = opacity - 0.01;
            sidebarScene1.style.opacity = opacity;  // image 1 fade out
            sidebarScene2.style.opacity = 1 - opacity; // image 2 fade in
            counter++;
            if (counter >= 100) {
                opacity = 0;
                counter = 0;
                phase = 2;
            }
        }
        else if (phase == 2) {
            counter++;
            if (counter >= 200) {   // image 2 stays visible for 2 secs
                opacity = 1;
                counter = 0;
                phase = 3;
            }
        }
        else if (phase == 3) {
            opacity = opacity - 0.01;
            sidebarScene2.style.opacity = opacity;    // image 2 fade out
            sidebarScene3.style.opacity = 1 - opacity;  // image 3 fade in
            counter++;
            if (counter >= 100) {
                opacity = 0;
                counter = 0;
                phase = 4;
            }
        }
        else if (phase == 4) {
            counter++;
            if (counter >= 200) {   // image 3 stays visible
                clearInterval(animID);
                sidebarScene4.style.visibility = "visible";
            }
        }
    }
    animID = setInterval(doAnimation, 10);
}
animate();
/* ----------------- SIDEBAR ANIMATION END ----------------- */




/* ----------------- SIDEBAR ANIMATION REPLAY START ----------------- */
function sidebarScene4Replay() {
    const sidebarScene1 = document.getElementById("sidebarScene1");
    const sidebarScene2 = document.getElementById("sidebarScene2");
    const sidebarScene3 = document.getElementById("sidebarScene3");
    const sidebarScene4 = document.getElementById("sidebarScene4");

    sidebarScene1.style.opacity = 1;
    sidebarScene2.style.opacity = 0;
    sidebarScene3.style.opacity = 0;

    sidebarScene4.style.visibility = "hidden";

    animate();
}
/* ----------------- SIDEBAR ANIMATION REPLAY END ----------------- */