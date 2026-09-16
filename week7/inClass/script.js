window.onload = (event) => {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let sAngle = Math.PI * 0.2;
    let eAngle = Math.PI * 1.8;

    ctx.beginPath();
    ctx.arc(300, 300, 290, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(100, 100, 400, 400);
}

// fill
// fillStyle 