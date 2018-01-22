var Klausuraufgabe;
(function (Klausuraufgabe) {
    var canvas;
    window.addEventListener("load", init);
    var allFlies = [];
    var imageData;
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Klausuraufgabe.crc2 = canvas.getContext("2d");
        console.log(Klausuraufgabe.crc2);
        for (var i = 0; i < 5; i++) {
            var Fly = new Klausuraufgabe.classFly(Math.random() * canvas.width, Math.random() * canvas.height);
            console.log(allFlies);
            allFlies[i] = Fly;
            console.log("Fliege wurde im Array gespeichert");
            allFlies[i].draw();
            console.log("Fliege wird gezeichnet");
        }
        imageData = Klausuraufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //      animate();
    }
})(Klausuraufgabe || (Klausuraufgabe = {}));
//# sourceMappingURL=main.js.map