var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A6;
(function (A6) {
    var subclassGondel = (function (_super) {
        __extends(subclassGondel, _super);
        function subclassGondel(_x, _y) {
            _super.call(this, _x, _y);
            this.color = "black";
            this.drawLift();
        }
        subclassGondel.prototype.move = function () {
            this.y -= 0.7;
            this.x -= 1.0586;
            if (this.x < -20) {
                this.x = 200;
                this.y = 600;
            }
        };
        subclassGondel.prototype.draw = function () {
            A6.crc2.beginPath();
            A6.crc2.strokeStyle = "black";
            A6.crc2.fillStyle = this.color;
            A6.crc2.fillRect(this.x, this.y, 25, 25);
            A6.crc2.stroke();
            A6.crc2.fill();
        };
        subclassGondel.prototype.drawLift = function () {
            A6.crc2.beginPath();
            A6.crc2.strokeStyle = "black";
            A6.crc2.fillStyle = "black";
            A6.crc2.moveTo(this.x + 0, this.y + 0);
            A6.crc2.lineTo(this.x - 200, this.y - 130);
            A6.crc2.stroke();
        };
        return subclassGondel;
    }(A6.superclass));
    A6.subclassGondel = subclassGondel;
})(A6 || (A6 = {}));
//# sourceMappingURL=subclass_gondel_inheritance.js.map