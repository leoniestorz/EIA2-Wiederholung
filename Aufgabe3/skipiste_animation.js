var A2;
(function (A2) {
    window.addEventListener("load", init);
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        var crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Himmel
        crc2.fillStyle = "#00ffff";
        crc2.fillRect(0, 0, 800, 700);
        //    crc2.beginPath();
        //    crc2.moveTo(0, 0);
        //    crc2.lineTo(400, 300);
        //    crc2.stroke();
        //Baeume
        crc2.beginPath();
        crc2.moveTo(120, 90);
        crc2.lineTo(150, 120);
        crc2.lineTo(130, 120);
        crc2.lineTo(170, 160);
        crc2.lineTo(140, 160);
        crc2.lineTo(180, 200);
        crc2.lineTo(120, 200);
        crc2.lineTo(90, 200);
        crc2.lineTo(120, 160);
        crc2.lineTo(90, 160);
        crc2.lineTo(120, 120);
        crc2.lineTo(100, 120);
        crc2.closePath();
        crc2.fillStyle = "green";
        crc2.fill();
        //    crc2.beginPath();
        //    crc2.arc(200, 50, 40, 0, 2 * Math.PI);
        //    crc2.fillStyle = "pink";
        //    crc2.fill();
        //    crc2.beginPath();
        //    crc2.arc(50, 350, 170, 0, 2 * Math.PI);
        //    crc2.fillStyle = "#00ff00";
        //    crc2.fill();
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
        //fest platzierte Dreiecke    
        drawTriangle(200, 100);
        drawTriangle(230, 100);
        drawTriangle(200, 130);
        drawTriangle(180, 120);
        ////30 Dreiecke in einer Reihe
        //    
        //        for (let i: number = 0; i < 30; i++) {
        //            drawTriangle(50 + i * 20 , 20, "#FFFFFF");}
        // 10 Dreiecke an zuf�lliger Position zwischen 150 und 250 horizontal und 200 und 260 vertikal
        for (var i = 0; i < 10; i++) {
            var x = 150 + Math.random() * 100;
            var y = 200 + Math.random() * 60;
            drawTriangle(x, y);
        }
        //Zufaellig platzierte Schneeflocken
        for (var i = 0; i < 100; i++) {
            var x = 10 + Math.random() * 700;
            var y = 10 + Math.random() * 500;
            drawSnowflake(x, y);
        }
        function drawTriangle(_x, _y) {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 20, _y + 30);
            crc2.lineTo(_x - 20, _y + 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "hsl(" + Math.random() * 300 + ", 50%, 50%)";
            crc2.fill();
        }
        function drawSnowflake(_x, _y) {
            crc2.beginPath();
            crc2.strokeStyle = "lightgrey";
            crc2.arc(_x + 10, _y + 30, 3, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
        }
    }
})(A2 || (A2 = {}));
//# sourceMappingURL=skipiste_animation.js.map