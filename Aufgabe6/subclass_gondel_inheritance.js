var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A6;
(function (A6) {
    var classGondel = (function (_super) {
        __extends(classGondel, _super);
        function classGondel() {
            _super.apply(this, arguments);
        }
        classGondel.prototype.move = function () {
            this.y -= 0.7;
            this.x -= 1.0586;
            if (this.x < -20) {
                this.x = 200;
                this.y = 600;
            }
        };
        classGondel.prototype.draw = function () {
            A6.crc2.beginPath();
            A6.crc2.strokeStyle = "black";
            A6.crc2.fillStyle = "black";
            A6.crc2.fillRect(this.x, this.y, 25, 25);
            A6.crc2.stroke();
            A6.crc2.fill();
        };
        classGondel.prototype.drawLift = function () {
            A6.crc2.beginPath();
            A6.crc2.strokeStyle = "black";
            A6.crc2.fillStyle = "black";
            A6.crc2.moveTo(this.x + 0, this.y + 0);
            A6.crc2.lineTo(this.x - 200, this.y - 130);
            A6.crc2.stroke();
        };
        return classGondel;
    }(A6.superclass));
    A6.classGondel = classGondel;
})(A6 || (A6 = {}));
//# sourceMappingURL=subclass_gondel_inheritance.js.map