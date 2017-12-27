var A3;
(function (A3) {
    window.addEventListener("load", init);
    var crc2;
    var canvas;
    var snowX = [];
    var snowY = [];
    var cloudX = [];
    var cloudY = [];
    var skiX = [];
    var skiY = [];
    var imageData;
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Himmel
        crc2.fillStyle = "#00ffff";
        crc2.fillRect(0, 0, 800, 700);
        //    drawCloud(200,100);
        //      drawSki(200,400);
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
        //Fest platzierte Baeume   
        drawTriangle(170, 510, "green");
        drawTriangle(260, 450, "green");
        drawTriangle(400, 420, "green");
        drawTriangle(680, 490, "green");
        // 10 Baeume an zuf�lliger Position zwischen 10 und 710 horizontal und 400 und 500 vertikal
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
        //Zufaellige Startpositionen der animierten SKifahrer
        for (var i = 0; i < 2; i++) {
            skiX[i] = Math.random() * 800;
            skiY[i] = Math.random() * 600 - 200;
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
            if (snowY[i] < 0) {
                snowY[i] = canvas.height;
            }
            if (snowY[i] > canvas.height) {
                snowY[i] = 0;
            }
            drawSnowflake(snowX[i], snowY[i]);
        }
        //WOLKEN         
        //Flugrichtung - und geschwindigkeit der Wolken
        for (var i = 0; i < 2; i++) {
            cloudX[i] += Math.random() * 1 + 0.5;
            cloudY[i] += Math.random() * 0;
            //Erscheinen der Wolken am gegenueberliegenden Rand nach Verlassen des Canvas
            if (cloudX[i] < 0) {
                cloudX[i] = canvas.width;
            }
            if (cloudX[i] > canvas.width) {
                cloudX[i] = 0;
            }
            //            if (cloudY[i] < 0) {
            //                cloudY[i] = canvas.height; }
            //             
            //             if (cloudY[i] > canvas.height) { 
            //                 cloudY[i] = 0; }
            drawCloud(cloudX[i], cloudY[i]);
        }
        //Skifahrer         
        //Flugrichtung - und geschwindigkeit der Skifahrer
        for (var i = 0; i < 2; i++) {
            skiX[i] += Math.random() * 0.5 - 3;
            skiY[i] += Math.random() * 0.5 + 1;
            //Erscheinen der SKifahrer am gegenueberliegenden Rand nach Verlassen des Canvas
            if (skiX[i] < 0) {
                skiX[i] = canvas.width;
            }
            if (skiX[i] > canvas.width) {
                skiX[i] = 0;
            }
            if (skiY[i] < 0) {
                skiY[i] = canvas.height;
            }
            if (skiY[i] > canvas.height) {
                skiY[i] = 0;
            }
            drawSki(skiX[i], skiY[i]);
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
    function drawSki(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "white";
        crc2.lineTo(_x - 40, _y + 100);
        crc2.arc(_x + 80, _y - 30, 10, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
    }
})(A3 || (A3 = {}));
//# sourceMappingURL=skipiste_animation.js.map