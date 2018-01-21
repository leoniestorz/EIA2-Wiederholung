var Klausuraufgabe;
(function (Klausuraufgabe) {
    var Fly = (function () {
        function Fly(_x, _y) {
        }
        ;
        Fly.prototype.update = function () {
            this.x = 650 + Math.random() * 100;
            this.y = 480 + Math.random() * 100;
            if (this.x > 400) {
                this.x = 0;
            }
            if (this.x < 0) {
                this.x = 400;
            }
            if (this.y > 400) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = 400;
            }
            this.draw();
        };
        ;
        Fly.prototype.draw = function () {
            Klausuraufgabe.crc2.beginPath();
            Klausuraufgabe.crc2.strokeStyle = "black";
            Klausuraufgabe.crc2.fillStyle = "green";
            Klausuraufgabe.crc2.arc(this.x + 80, this.y - 30, 6, 0, 2 * Math.PI);
            Klausuraufgabe.crc2.stroke();
            Klausuraufgabe.crc2.fill();
            Klausuraufgabe.crc2.closePath();
        };
        ;
        return Fly;
    }());
    Klausuraufgabe.Fly = Fly;
})(Klausuraufgabe || (Klausuraufgabe = {}));
//# sourceMappingURL=class_fly.js.map