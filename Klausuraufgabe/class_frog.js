var Klausuraufgabe;
(function (Klausuraufgabe) {
    var classFrog = (function () {
        function classFrog(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        ;
        classFrog.prototype.update = function () {
            this.draw();
            //        this.move();
        };
        ;
        //   move () : void {}
        classFrog.prototype.draw = function () {
            Klausuraufgabe.crc2.beginPath();
            Klausuraufgabe.crc2.strokeStyle = "black";
            Klausuraufgabe.crc2.fillStyle = "yellow";
            Klausuraufgabe.crc2.arc(this.x + 80, this.y - 30, 26, 0, 2 * Math.PI);
            Klausuraufgabe.crc2.stroke();
            Klausuraufgabe.crc2.fill();
            Klausuraufgabe.crc2.closePath();
        };
        ;
        return classFrog;
    }());
    Klausuraufgabe.classFrog = classFrog;
})(Klausuraufgabe || (Klausuraufgabe = {}));
//# sourceMappingURL=class_frog.js.map