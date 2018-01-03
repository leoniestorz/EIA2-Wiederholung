var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A6;
(function (A6) {
    var subclassSkifahrer = (function (_super) {
        __extends(subclassSkifahrer, _super);
        function subclassSkifahrer(_x, _y) {
            _super.call(this, _x, _y);
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.move();
            this.draw();
        }
        subclassSkifahrer.prototype.move = function () {
            this.x += Math.random() * 0.5 - 3;
            this.y += Math.random() * 1 + 0.25;
            if (this.y >= 650) {
                this.y = 480 + Math.random() * 100;
                this.x = 650 + Math.random() * 100;
            }
        };
        subclassSkifahrer.prototype.draw = function () {
            A6.crc2.beginPath();
            A6.crc2.strokeStyle = "black";
            A6.crc2.fillStyle = this.color;
            A6.crc2.arc(this.x + 80, this.y - 30, 6, 0, 2 * Math.PI);
            A6.crc2.stroke();
            A6.crc2.fill();
        };
        return subclassSkifahrer;
    }(A6.superclass));
    A6.subclassSkifahrer = subclassSkifahrer;
})(A6 || (A6 = {}));
//# sourceMappingURL=subclass_skifahrer_inheritance.js.map