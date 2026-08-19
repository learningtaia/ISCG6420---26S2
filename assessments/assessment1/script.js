function animate() {
    const sidebarScene1 = document.getElementById("sidebarScene1");
    const sidebarScene2 = document.getElementById("sidebarScene2");
    const sidebarScene3 = document.getElementById("sidebarScene3");

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
            }
        }
    }
    animID = setInterval(doAnimation, 10);
}
animate();

/*
const scenes = [];
const texts = [];

window.addEventListener("DOMContentLoaded", () => {
    scenes.push(document.querySelector("#sidebarScene1"));
    scenes.push(document.querySelector("#sidebarScene2"));
    scenes.push(document.querySelector("#sidebarScene3"));

    texts.push(document.querySelector("#sidebarScene1Text"));
    texts.push(document.querySelector("#sidebarScene2Text"));
    texts.push(document.querySelector("#sidebarScene3Line1"));
    texts.push(document.querySelector("#sidebarScene3Line2"));

    animteScenes();
});

function showScene(sceneNumber) {
    console.log("scene");
    for (let i = 0; i < scenes.length; i++) {
        // conditional operator
        scenes[i].style.visibility = (i === sceneNumber) ? "visible" : "hidden";
    }
}

function animateScenes() {
    let sceneNumber = 0;
    showScene(sceneNumber);
    let timer = setInterval(run, 3000);

    function run() {
        sceneNumber++;
        if (sceneNumber >= scenes.length) {
            clearInterval(timer);
            sceneNumber = 0;
            return;
        }
        showScene(sceneNumber);
    }
}
*/