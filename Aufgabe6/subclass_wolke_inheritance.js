var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A6;
(function (A6) {
    var subclassWolke = (function (_super) {
        __extends(subclassWolke, _super);
        function subclassWolke(_x, _y) {
            _super.call(this, _x, _y);
            this.color = "white";
        }
        subclassWolke.prototype.move = function () {
            this.x += Math.random() * 1 + 0.5;
            this.y += Math.random() * 0;
            if (this.x > 800) {
                this.x = 0;
            }
        };
        subclassWolke.prototype.draw = function () {
            A6.crc2.beginPath();
            A6.crc2.strokeStyle = "lightgrey";
            A6.crc2.fillStyle = this.color;
            A6.crc2.arc(this.x + 80, this.y - 30, 60, 0, 2 * Math.PI);
            A6.crc2.arc(this.x + 10, this.y - 30, 50, 0, 2 * Math.PI);
            A6.crc2.stroke();
            A6.crc2.fill();
        };
        return subclassWolke;
    }(A6.superclass));
    A6.subclassWolke = subclassWolke;
})(A6 || (A6 = {}));
//# sourceMappingURL=subclass_wolke_inheritance.js.map