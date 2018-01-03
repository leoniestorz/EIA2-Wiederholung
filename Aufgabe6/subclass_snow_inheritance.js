var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A6;
(function (A6) {
    var subclassSnow = (function (_super) {
        __extends(subclassSnow, _super);
        function subclassSnow(_x, _y) {
            _super.call(this, _x, _y);
            this.color = "red";
            this.move();
        }
        subclassSnow.prototype.move = function () {
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
        subclassSnow.prototype.draw = function () {
            A6.crc2.beginPath();
            A6.crc2.strokeStyle = "lightgrey";
            A6.crc2.fillStyle = "white";
            A6.crc2.arc(this.x - 8, this.y - 3, 4, 0, 2 * Math.PI);
            A6.crc2.stroke();
            A6.crc2.fill();
        };
        return subclassSnow;
    }(A6.superclass));
    A6.subclassSnow = subclassSnow;
})(A6 || (A6 = {}));
//# sourceMappingURL=subclass_snow_inheritance.js.map