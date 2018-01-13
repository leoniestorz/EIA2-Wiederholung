var Klausuraufgabe;
(function (Klausuraufgabe) {
    var canvas;
    window.addEventListener("load", init);
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Klausuraufgabe.crc2 = canvas.getContext("2d");
        console.log(Klausuraufgabe.crc2);
    }
})(Klausuraufgabe || (Klausuraufgabe = {}));
//# sourceMappingURL=main.js.map