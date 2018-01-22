var Klausuraufgabe;
(function (Klausuraufgabe) {
    var classFly = (function () {
        function classFly(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        ;
        classFly.prototype.update = function () {
            this.draw();
            this.move();
        };
        ;
        classFly.prototype.move = function () {
            this.x += Math.random() * 10 - 7;
            this.y += Math.random() * 5 - 2;
            if (this.x > 800) {
                this.x = 0;
            }
            if (this.x < 0) {
                this.x = 800;
            }
            if (this.y > 400) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = 400;
            }
        };
        classFly.prototype.draw = function () {
            Klausuraufgabe.crc2.beginPath();
            Klausuraufgabe.crc2.strokeStyle = "black";
            Klausuraufgabe.crc2.fillStyle = "green";
            Klausuraufgabe.crc2.arc(this.x + 80, this.y - 30, 26, 0, 2 * Math.PI);
            Klausuraufgabe.crc2.stroke();
            Klausuraufgabe.crc2.fill();
            Klausuraufgabe.crc2.closePath();
        };
        ;
        return classFly;
    }());
    Klausuraufgabe.classFly = classFly;
})(Klausuraufgabe || (Klausuraufgabe = {}));
//# sourceMappingURL=class_fly.js.map