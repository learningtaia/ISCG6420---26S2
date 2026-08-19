window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("myButton");
    btn.addEventListener("click", () => {
        btn.innerHTML = "Clicked!";
    });
});