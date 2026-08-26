window.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("div1");
    let offset = 0;

    const timer = setInterval(() => {
        offset++;
        div.style.left = offset + "px";
        if (offset > 1000) {
            clearInterval(timer);
        }
    }, 10);
});