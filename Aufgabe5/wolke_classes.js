var A5;
(function (A5) {
    var classWolke = (function () {
        function classWolke(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
        }
        classWolke.prototype.update = function () {
            this.move();
            this.draw();
        };
        classWolke.prototype.move = function () {
            this.x += Math.random() * 1 + 0.5;
            this.y += Math.random() * 0;
            if (this.x > 800) {
                this.x = 0;
            }
        };
        classWolke.prototype.draw = function () {
            A5.crc2.beginPath();
            A5.crc2.strokeStyle = "lightgrey";
            A5.crc2.fillStyle = this.color;
            A5.crc2.arc(this.x + 80, this.y - 30, 60, 0, 2 * Math.PI);
            A5.crc2.arc(this.x + 10, this.y - 30, 50, 0, 2 * Math.PI);
            A5.crc2.stroke();
            A5.crc2.fill();
        };
        return classWolke;
    }());
    A5.classWolke = classWolke;
})(A5 || (A5 = {}));
//# sourceMappingURL=wolke_classes.js.map