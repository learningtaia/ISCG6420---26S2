window.onload = (event) => {
    let canvas = document.getElementById("myCanvas2");
    let ctx = canvas.getContext("2d");

    let sAngle = Math.PI * 0.2;
    let eAngle = Math.PI * 1.8;

    ctx.beginPath();
    ctx.arc(400, 400, 300, sAngle, eAngle);
    ctx.lineTo(400, 400);
    ctx.closePath();
    //ctx.strokeStyle = "black";
    ctx.fillStyle = "yellow";
    //ctx.stroke();
    ctx.fill();
}