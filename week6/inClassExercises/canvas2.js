window.onload = (event) => {
    let canvas = document.getElementById("myCanvas2");
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(150, 400, 120, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "yellow";
    ctx.stroke();
    ctx.fill();
}