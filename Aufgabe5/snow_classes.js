var A5;
(function (A5) {
    var classSnow = (function () {
        function classSnow(x, y) {
            this.x = x;
            this.y = y;
        }
        classSnow.prototype.update = function () {
            this.move();
            this.draw();
        };
        classSnow.prototype.move = function () {
            this.x += Math.random() * 0.5;
            this.y += Math.random() * 1 + 0.5;
            if (this.x < 0) {
                this.x = 800;
            }
            if (this.x > 800) {
                this.x = 0;
            }
            if (this.y > 600) {
                this.y = 0;
            }
        };
        classSnow.prototype.draw = function () {
            A5.crc2.beginPath();
            A5.crc2.strokeStyle = "lightgrey";
            A5.crc2.fillStyle = "white";
            A5.crc2.arc(this.x - 8, this.y - 3, 4, 0, 2 * Math.PI);
            A5.crc2.stroke();
            A5.crc2.fill();
        };
        return classSnow;
    }());
    A5.classSnow = classSnow;
})(A5 || (A5 = {}));
//# sourceMappingURL=snow_classes.js.map