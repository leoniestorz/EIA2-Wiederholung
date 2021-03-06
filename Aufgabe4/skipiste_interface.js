var A4;
(function (A4) {
    window.addEventListener("load", init);
    var crc2;
    var canvas;
    var skifahrer = [];
    var snowX = [];
    var snowY = [];
    var cloudX = [];
    var cloudY = [];
    var skiX = [];
    var skiY = [];
    var gondelX = [];
    var gondelY = [];
    var imageData;
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Himmel
        var grd = crc2.createLinearGradient(0, 0, 0, 300);
        grd.addColorStop(0, "#9999ff");
        grd.addColorStop(0.5, "#9966ff");
        grd.addColorStop(1, "#cc99ff");
        crc2.fillStyle = grd;
        crc2.fillRect(0, 0, 800, 600);
        // Pisten vorne 
        crc2.beginPath();
        crc2.strokeStyle = "lightgrey";
        crc2.arc(300, 1750, 1350, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.strokeStyle = "lightgrey";
        crc2.arc(900, 1600, 1200, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.fill();
        //Lift
        drawLift(200, 600);
        //Fest platzierte Baeume   
        drawTriangle(170, 510, "green");
        drawTriangle(260, 450, "green");
        drawTriangle(400, 420, "green");
        drawTriangle(680, 490, "green");
        // 10 Baeume an zuf�lliger Position zwischen 10 und 710 horizontal und 400 und 500 vertikal zuf�lliger Farbe
        for (var i = 0; i < 10; i++) {
            var x = 10 + Math.random() * 700;
            var y = 400 + Math.random() * 100;
            drawTriangle(x, y, "hsl(" + Math.random() * 300 + ", 50%, 50%)");
        }
        // 2 feste Wolken an zuf�lliger Position zwischen 10 und 710 horizontal und 10 und 210 vertikal
        //    for (let i: number = 0; i < 2; i++) {
        //            let x: number = 10 + Math.random() * 700;
        //            let y: number = 10 + Math.random() * 200;
        //            drawCloud(x, y);}
        //Zufaellige Startpositionen der animierten Schneeflocken
        for (var i = 0; i < 100; i++) {
            snowX[i] = Math.random() * canvas.width;
            snowY[i] = Math.random() * canvas.height;
        }
        //Zufaellige Startpositionen der animierten Wolken
        for (var i = 0; i < 2; i++) {
            cloudX[i] = Math.random() * 800;
            cloudY[i] = Math.random() * 350;
        }
        //Startposition der animierten Skifahrer
        for (var i = 0; i < 2; i++) {
            skifahrer[i] = {
                x: 500 + Math.random() * 100,
                y: 500 + Math.random() * 200,
                dx: Math.random() * 0.5 - 3,
                dy: Math.random() * 0.5 + 1,
                color: "hsl(" + Math.random() * 360 + ", 50%, 50%)"
            };
        }
        //        for (let i: number = 0; i < 4; i++) {
        //            skiX[i] = 500 + Math.random() * 100;
        //            skiY[i] = 500 + Math.random() * 200;} 
        //Startposition der animierten Gondel
        for (var i = 0; i < 1; i++) {
            gondelX[i] = 200;
            gondelY[i] = 600;
        }
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function animate() {
        console.log("Timeout");
        crc2.putImageData(imageData, 0, 0);
        //SCHNEEFLOCKEN
        //Flugrichtung - und geschwindigkeit der Schneeflocken
        for (var i = 0; i < 100; i++) {
            snowX[i] += Math.random() * 0.5;
            snowY[i] += Math.random() * 1 + 0.5;
            //Erscheinen der Schneeflocken am gegenueberliegenden Rand nach Verlassen des Canvas
            if (snowX[i] < 0) {
                snowX[i] = canvas.width;
            }
            if (snowX[i] > canvas.width) {
                snowX[i] = 0;
            }
            if (snowY[i] > canvas.height) {
                snowY[i] = 0;
            }
            drawSnowflake(snowX[i], snowY[i]);
        }
        //GONDEL       
        //Flugrichtung - und geschwindigkeit der Gondel
        for (var i = 0; i < 2; i++) {
            gondelX[i] -= Math.random() * 0.25 + 0.8;
            gondelY[i] -= Math.random() * 1.25;
            //Erscheinen der Gondel am gegenueberliegenden Rand nach Verlassen des Canvas
            if (gondelX[i] < -20) {
                gondelX[i] = 200;
                gondelY[i] = 600;
            }
            drawGondel(gondelX[i], gondelY[i]);
        }
        //WOLKEN         
        //Flugrichtung - und geschwindigkeit der Wolken
        for (var i = 0; i < 2; i++) {
            cloudX[i] += Math.random() * 1 + 0.5;
            cloudY[i] += Math.random() * 0;
            //Erscheinen der Wolken am gegenueberliegenden Rand nach Verlassen des Canvas
            if (cloudX[i] > canvas.width) {
                cloudX[i] = 0;
            }
            drawCloud(cloudX[i], cloudY[i]);
        }
        //Skifahrer         
        //Fahrtrichtung - und geschwindigkeit der Skifahrer
        for (var i = 0; i < skifahrer.length; i++) {
            skifahrer[i].x += skifahrer[i].dx; // Neue Parameter aus dem Interface 
            skifahrer[i].y += skifahrer[i].dy;
            //            skifahrer[i].x += Math.random() * 0.5 - 3;
            //            skifahrer[i].y += Math.random() * 0.5 + 1;
            // 
            //Erscheinen der SKifahrer auf dem Canvas nachdem sie ihn verlassen haben
            if (skifahrer[i].y >= 650) {
                skifahrer[i].y = 500;
                skifahrer[i].x = 700;
            }
            drawSki(skifahrer[i]);
        }
        window.setTimeout(animate, 20);
    }
    //--------------------------------Funktionen ----------------------------- 
    function drawTriangle(_x, _y, _color) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 20, _y + 30);
        crc2.lineTo(_x - 20, _y + 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    function drawSnowflake(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "lightgrey";
        crc2.fillStyle = "white";
        crc2.arc(_x - 8, _y - 3, 4, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
    }
    function drawCloud(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "lightgrey";
        crc2.fillStyle = "white";
        crc2.arc(_x + 80, _y - 30, 60, 0, 2 * Math.PI);
        crc2.arc(_x + 10, _y - 30, 50, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
    }
    function drawSki(_skifahrer) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = _skifahrer.color;
        crc2.arc(_skifahrer.x + 80, _skifahrer.y - 30, 6, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
    }
    function drawGondel(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "black";
        crc2.fillRect(_x, _y, 25, 25);
        crc2.stroke();
        crc2.fill();
    }
    function drawLift(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "black";
        crc2.moveTo(_x + 0, _y + 0);
        crc2.lineTo(_x - 200, _y - 130);
        crc2.stroke();
    }
})(A4 || (A4 = {}));
//# sourceMappingURL=skipiste_interface.js.map