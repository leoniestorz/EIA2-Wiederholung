var A6;
(function (A6) {
    var canvas;
    var imageData;
    window.addEventListener("load", init);
    var snow = [];
    var wolken = [];
    var skifahrer = [];
    var gondel = [];
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        A6.crc2 = canvas.getContext("2d");
        console.log(A6.crc2);
        //Himmel
        var grd = A6.crc2.createLinearGradient(0, 0, 0, 300);
        grd.addColorStop(0, "#9999ff");
        grd.addColorStop(0.5, "#9966ff");
        grd.addColorStop(1, "#cc99ff");
        A6.crc2.fillStyle = grd;
        A6.crc2.fillRect(0, 0, 800, 600);
        // Pisten vorne 
        A6.crc2.beginPath();
        A6.crc2.strokeStyle = "lightgrey";
        A6.crc2.arc(300, 1750, 1350, 0, 2 * Math.PI);
        A6.crc2.stroke();
        A6.crc2.fillStyle = "white";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.strokeStyle = "lightgrey";
        A6.crc2.arc(900, 1600, 1200, 0, 2 * Math.PI);
        A6.crc2.stroke();
        A6.crc2.fillStyle = "white";
        A6.crc2.fill();
        // Schleife, die 10 Baeume an zuf�lliger Position mit zuf�lliger Farbe platziert
        for (var i = 0; i < 10; i++) {
            var x = 10 + Math.random() * 700;
            var y = 400 + Math.random() * 100;
            var c = "hsl(" + Math.random() * 300 + ", 50%, 50%)";
            drawTree(x, y, c);
        }
        //Schleife Schneeflocken
        for (var i = 0; i < 100; i++) {
            var sn = new A6.subclassSnow(Math.random() * canvas.width, Math.random() * canvas.height);
            snow.push(sn);
        }
        //Schleife Wolken
        for (var i = 0; i < 2; i++) {
            var w = new A6.subclassWolke(Math.random() * 800, Math.random() * 350);
            wolken.push(w);
        }
        //Schleife Skifahrer
        for (var i = 0; i < 10; i++) {
            var s = new A6.subclassSkifahrer(500 + Math.random() * 100, 500 + Math.random() * 200);
            skifahrer.push(s);
        }
        //Schleife Gondel
        for (var i = 0; i < 1; i++) {
            var g = new A6.subclassGondel(200, 600);
            g.drawLift();
            gondel.push(g);
        }
        imageData = A6.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function animate() {
        console.log("Timeout");
        A6.crc2.putImageData(imageData, 0, 0);
        //SCHNEEFLOCKEN
        for (var i = 0; i < snow.length; i++) {
            var sn = snow[i];
            sn.update();
        }
        //GONDEL       
        for (var i = 0; i < gondel.length; i++) {
            var g = gondel[i];
            g.update();
        }
        //WOLKEN         
        for (var i = 0; i < wolken.length; i++) {
            var w = wolken[i];
            w.update();
        }
        //SKIFAHRER  
        for (var i = 0; i < skifahrer.length; i++) {
            var s = skifahrer[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
    function drawTree(_x, _y, _color) {
        A6.crc2.beginPath();
        A6.crc2.moveTo(_x, _y);
        A6.crc2.lineTo(_x + 20, _y + 30);
        A6.crc2.lineTo(_x - 20, _y + 30);
        A6.crc2.closePath();
        A6.crc2.stroke();
        A6.crc2.fillStyle = _color;
        A6.crc2.fill();
    }
})(A6 || (A6 = {}));
//# sourceMappingURL=main_inheritance.js.map