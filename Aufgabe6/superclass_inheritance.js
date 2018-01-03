var A6;
(function (A6) {
    var superclass = (function () {
        function superclass(x, y) {
            this.x = x;
            this.y = y;
        }
        superclass.prototype.update = function () {
            this.move();
            this.draw();
        };
        superclass.prototype.move = function () {
            this.x += Math.random() * 0.5 - 3;
            this.y += Math.random() * 1 + 0.25;
            if (this.y >= 650) {
                this.y = 480 + Math.random() * 100;
                this.x = 650 + Math.random() * 100;
            }
        };
        superclass.prototype.draw = function () {
            A6.crc2.beginPath();
            A6.crc2.strokeStyle = "black";
            A6.crc2.fillStyle = "white";
            A6.crc2.arc(this.x + 80, this.y - 30, 6, 0, 2 * Math.PI);
            A6.crc2.stroke();
            A6.crc2.fill();
        };
        return superclass;
    }());
    A6.superclass = superclass;
})(A6 || (A6 = {}));
//# sourceMappingURL=superclass_inheritance.js.map