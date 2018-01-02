var A5;
(function (A5) {
    var canvas;
    var imageData;
    window.addEventListener("load", init);
    var snowX = [];
    var snowY = [];
    var cloudX = [];
    var cloudY = [];
    //    let skiX: number[] = [];
    //    let skiY:number[] = [];
    var einSkifahrer;
    var alleSkifahrer = [];
    var gondelX = [];
    var gondelY = [];
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        A5.crc2 = canvas.getContext("2d");
        console.log(A5.crc2);
        //Himmel
        var grd = A5.crc2.createLinearGradient(0, 0, 0, 300);
        grd.addColorStop(0, "#9999ff");
        grd.addColorStop(0.5, "#9966ff");
        grd.addColorStop(1, "#cc99ff");
        A5.crc2.fillStyle = grd;
        A5.crc2.fillRect(0, 0, 800, 600);
        // Pisten vorne 
        A5.crc2.beginPath();
        A5.crc2.strokeStyle = "lightgrey";
        A5.crc2.arc(300, 1750, 1350, 0, 2 * Math.PI);
        A5.crc2.stroke();
        A5.crc2.fillStyle = "white";
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.strokeStyle = "lightgrey";
        A5.crc2.arc(900, 1600, 1200, 0, 2 * Math.PI);
        A5.crc2.stroke();
        A5.crc2.fillStyle = "white";
        A5.crc2.fill();
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
        var ski = new A5.Skifahrer(500, 300);
        for (var i = 0; i < 1; i++) {
            var s = new A5.Skifahrer(400, 400);
            s.setRandomStyle();
            alleSkifahrer[i] = s;
        }
        //Startposition der animierten Gondel
        for (var i = 0; i < 1; i++) {
            gondelX[i] = 200;
            gondelY[i] = 600;
        }
        imageData = A5.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function animate() {
        console.log("Timeout");
        A5.crc2.putImageData(imageData, 0, 0);
        //SCHNEEFLOCKEN
        //Flugrichtung - und geschwindigkeit der Schneeflocken
        for (var i = 0; i < 100; i++) {
            snowX[i] += Math.random() * 0.5;
            snowY[i] += Math.random() * 1 + 0.5;
            //Erscheinen der Schneeflocken am gegenueberliegenden Rand nach Verlassen des Canvas
            if (snowX[i] < 0) {
                snowX[i] = 800;
            }
            if (snowX[i] > 800) {
                snowX[i] = 0;
            }
            if (snowY[i] > 600) {
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
            if (cloudX[i] > 800) {
                cloudX[i] = 0;
            }
            drawCloud(cloudX[i], cloudY[i]);
        }
        //SKIFAHRER  
        //       einSkifahrer.update();   
        for (var i = 0; i < alleSkifahrer.length; i++) {
            var s = alleSkifahrer[i];
            alleSkifahrer[i].update();
        }
        window.setTimeout(animate, 20);
    }
    //--------------------------------Funktionen ----------------------------- 
    function drawTriangle(_x, _y, _color) {
        A5.crc2.beginPath();
        A5.crc2.moveTo(_x, _y);
        A5.crc2.lineTo(_x + 20, _y + 30);
        A5.crc2.lineTo(_x - 20, _y + 30);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = _color;
        A5.crc2.fill();
    }
    function drawSnowflake(_x, _y) {
        A5.crc2.beginPath();
        A5.crc2.strokeStyle = "lightgrey";
        A5.crc2.fillStyle = "white";
        A5.crc2.arc(_x - 8, _y - 3, 4, 0, 2 * Math.PI);
        A5.crc2.stroke();
        A5.crc2.fill();
    }
    function drawCloud(_x, _y) {
        A5.crc2.beginPath();
        A5.crc2.strokeStyle = "lightgrey";
        A5.crc2.fillStyle = "white";
        A5.crc2.arc(_x + 80, _y - 30, 60, 0, 2 * Math.PI);
        A5.crc2.arc(_x + 10, _y - 30, 50, 0, 2 * Math.PI);
        A5.crc2.stroke();
        A5.crc2.fill();
    }
    function drawGondel(_x, _y) {
        A5.crc2.beginPath();
        A5.crc2.strokeStyle = "black";
        A5.crc2.fillStyle = "black";
        A5.crc2.fillRect(_x, _y, 25, 25);
        A5.crc2.stroke();
        A5.crc2.fill();
    }
    function drawLift(_x, _y) {
        A5.crc2.beginPath();
        A5.crc2.strokeStyle = "black";
        A5.crc2.fillStyle = "black";
        A5.crc2.moveTo(_x + 0, _y + 0);
        A5.crc2.lineTo(_x - 200, _y - 130);
        A5.crc2.stroke();
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=skipiste_classes.js.map