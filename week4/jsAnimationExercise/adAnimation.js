function animate() {
    const element = document.getElementById("animBlock");
    let x = 0;
    let y = 0;
    let opacity = 1;
    let phase = 0;
    let animID;

    function doAnimation() {
        if (phase == 0) {
            x++;
            y++;
            element.style.left = x + 'px';
            element.style.top = y + 'px';
            if (x >= 300) {
                phase = 1;
            }
        }
        else if (phase == 1) {
            x--;
            element.style.left = x + 'px'
            if (x <= 20) {
                phase = 2;
            }
        }
        else if (phase == 2) {
            x++;
            y += 0.5;
            element.style.left = x + 'px';
            element.style.top = y + 'px';
            if (x >= 550) {
                phase = 3;
                clearInterval(animID);
            }
        }
    }
    animID = setInterval(doAnimation, 10);
}

document.getElementById("animWrapper").addEventListener("click", animate);