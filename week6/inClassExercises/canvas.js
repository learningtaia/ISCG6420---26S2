window.onload = (event) => {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(800, 600);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(500, 20, 200, 300);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#00FFCC";
    ctx.fill();

    ctx.beginPath();        // circle
    ctx.arc(150, 400, 120, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(380, 400);
    ctx.lineTo(430, 550);
    ctx.lineTo(300, 460);
    ctx.lineTo(460, 460);
    ctx.lineTo(330, 550);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 0, 255)";
    ctx.fill();

    ctx.fillStyle = "blue";
    ctx.font = "40px arial";
    ctx.fillText("Taia Milo", 100, 50);
}