var A5;
(function (A5) {
    var classGondel = (function () {
        function classGondel(x, y) {
            this.x = x;
            this.y = y;
        }
        classGondel.prototype.update = function () {
            this.move();
            this.draw();
        };
        classGondel.prototype.move = function () {
            this.y -= 0.7;
            this.x -= 1.0586;
            if (this.x < -20) {
                this.x = 200;
                this.y = 600;
            }
        };
        classGondel.prototype.draw = function () {
            A5.crc2.beginPath();
            A5.crc2.strokeStyle = "black";
            A5.crc2.fillStyle = "black";
            A5.crc2.fillRect(this.x, this.y, 25, 25);
            A5.crc2.stroke();
            A5.crc2.fill();
        };
        classGondel.prototype.drawLift = function () {
            A5.crc2.beginPath();
            A5.crc2.strokeStyle = "black";
            A5.crc2.fillStyle = "black";
            A5.crc2.moveTo(this.x + 0, this.y + 0);
            A5.crc2.lineTo(this.x - 200, this.y - 130);
            A5.crc2.stroke();
        };
        return classGondel;
    }());
    A5.classGondel = classGondel;
})(A5 || (A5 = {}));
//# sourceMappingURL=gondel_classes.js.map