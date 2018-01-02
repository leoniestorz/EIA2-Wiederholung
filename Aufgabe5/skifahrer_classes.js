var A5;
(function (A5) {
    var Skifahrer = (function () {
        function Skifahrer(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Skifahrer.prototype.update = function () {
            this.move();
            this.draw();
        };
        Skifahrer.prototype.move = function () {
            this.x += Math.random() * 0.5 - 3;
            this.y += Math.random() * 0.5 + 1;
            if (this.y >= 650) {
                this.y = 500;
                this.x = 700;
            }
        };
        Skifahrer.prototype.draw = function () {
            A5.crc2.beginPath();
            A5.crc2.strokeStyle = "black";
            A5.crc2.fillStyle = this.color;
            A5.crc2.arc(this.x + 80, this.y - 30, 6, 0, 2 * Math.PI);
            A5.crc2.stroke();
            A5.crc2.fill();
        };
        Skifahrer.prototype.setPosition = function () {
            this.positionX = 500 + Math.random() * 100;
            this.positionY = 500 + Math.random() * 200;
        };
        Skifahrer.prototype.setRandomStyle = function () {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        };
        return Skifahrer;
    }());
    A5.Skifahrer = Skifahrer;
})(A5 || (A5 = {}));
//# sourceMappingURL=skifahrer_classes.js.map