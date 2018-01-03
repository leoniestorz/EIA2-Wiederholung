var A5;
(function (A5) {
    var canvas;
    var imageData;
    window.addEventListener("load", init);
    var allSnow = [];
    var alleWolken = [];
    var alleSkifahrer = [];
    var Gondel = [];
    var allTrees = [];
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
        //Fest platzierter Baum 
        var tree = new A5.classTree(300, 500, "green");
        tree.draw();
        // Schleife, die 10 Baeume an zuf�lliger Position mit zuf�lliger Farbe platziert
        for (var i = 0; i < 10; i++) {
            var t = new A5.classTree(10 + Math.random() * 700, 400 + Math.random() * 100, "hsl(" + Math.random() * 300 + ", 50%, 50%)");
            allTrees[i] = t;
            allTrees[i].draw();
        }
        //Schleife Schneeflocken
        for (var i = 0; i < 100; i++) {
            var snow = new A5.classSnow(Math.random() * canvas.width, Math.random() * canvas.height);
            allSnow[i] = snow;
        }
        //Schleife Wolken
        for (var i = 0; i < 3; i++) {
            var w = new A5.classWolke(Math.random() * 800, Math.random() * 350, "white");
            alleWolken[i] = w;
        }
        //Schleife Skifahrer
        for (var i = 0; i < 10; i++) {
            var s = new A5.classSkifahrer(500 + Math.random() * 100, 500 + Math.random() * 200, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            alleSkifahrer[i] = s;
        }
        //Schleife Gondel
        for (var i = 0; i < 1; i++) {
            var g = new A5.classGondel(200, 600);
            g.drawLift();
            Gondel[i] = g;
        }
        imageData = A5.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function animate() {
        console.log("Timeout");
        A5.crc2.putImageData(imageData, 0, 0);
        //SCHNEEFLOCKEN
        for (var i = 0; i < allSnow.length; i++) {
            allSnow[i].update();
        }
        //GONDEL       
        for (var i = 0; i < Gondel.length; i++) {
            Gondel[i].update();
        }
        //WOLKEN         
        for (var i = 0; i < alleWolken.length; i++) {
            alleWolken[i].update();
        }
        //SKIFAHRER  
        for (var i = 0; i < alleSkifahrer.length; i++) {
            alleSkifahrer[i].update();
        }
        window.setTimeout(animate, 20);
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=main_classes.js.map