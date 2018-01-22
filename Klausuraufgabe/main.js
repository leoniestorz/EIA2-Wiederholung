var Klausuraufgabe;
(function (Klausuraufgabe) {
    var canvas;
    var imageData;
    window.addEventListener("load", init);
    var allFlies = [];
    var allFrogs = [];
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Klausuraufgabe.crc2 = canvas.getContext("2d");
        console.log(Klausuraufgabe.crc2);
        for (var i = 0; i < 2; i++) {
            var Frog = new Klausuraufgabe.classFrog(Math.random() * canvas.width, Math.random() * canvas.height);
            console.log(allFrogs);
            allFrogs[i] = Frog;
            console.log("Frosch wurde im Array gespeichert");
            allFrogs[i].draw();
        }
        for (var i = 0; i < 5; i++) {
            var Fly = new Klausuraufgabe.classFly(Math.random() * canvas.width, Math.random() * canvas.height);
            console.log(allFlies);
            allFlies[i] = Fly;
            console.log("Fliege wurde im Array gespeichert");
        }
        imageData = Klausuraufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function animate() {
        console.log("Timeout");
        Klausuraufgabe.crc2.putImageData(imageData, 0, 0);
        for (var i = 0; i < allFlies.length; i++) {
            allFlies[i].update();
        }
        window.setTimeout(animate, 20);
    }
})(Klausuraufgabe || (Klausuraufgabe = {}));
//# sourceMappingURL=main.js.map