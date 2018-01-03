var A5;
(function (A5) {
    var classSkifahrer = (function () {
        function classSkifahrer(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
        }
        classSkifahrer.prototype.update = function () {
            this.move();
            this.draw();
        };
        classSkifahrer.prototype.move = function () {
            this.x += Math.random() * 0.5 - 3;
            this.y += Math.random() * 1 + 0.25;
            if (this.y >= 650) {
                this.y = 480 + Math.random() * 100;
                this.x = 650 + Math.random() * 100;
            }
        };
        classSkifahrer.prototype.draw = function () {
            A5.crc2.beginPath();
            A5.crc2.strokeStyle = "black";
            A5.crc2.fillStyle = this.color;
            A5.crc2.arc(this.x + 80, this.y - 30, 6, 0, 2 * Math.PI);
            A5.crc2.stroke();
            A5.crc2.fill();
        };
        return classSkifahrer;
    }());
    A5.classSkifahrer = classSkifahrer;
})(A5 || (A5 = {}));
//# sourceMappingURL=skifahrer_classes.js.map