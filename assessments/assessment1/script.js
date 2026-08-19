/*function animate() {
    const sidebarImage1 = document.getElementById("sidebar_sidebarScene1_img");
    const sidebarImage2 = document.getElementById("sidebar_sidebarScene2_img");
    const sidebarImage3 = document.getElementById("sidebar_sidebarScene3_img");

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
            sidebarImage1.style.opacity = opacity;  // image 1 fade out
            sidebarImage2.style.opacity = 1 - opacity; // image 2 fade in
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
            sidebarImage2.style.opacity = opacity;    // image 2 fade out
            sidebarImage3.style.opacity = 1 - opacity;  // image 3 fade in
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
            }
        }
    }
    animID = setInterval(doAnimation, 10);
}
animate();*/


