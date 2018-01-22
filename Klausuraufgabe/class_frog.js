var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Klausuraufgabe;
(function (Klausuraufgabe) {
    var classFrog = (function (_super) {
        __extends(classFrog, _super);
        function classFrog() {
            _super.apply(this, arguments);
        }
        classFrog.prototype.update = function () {
            this.draw();
        };
        classFrog.prototype.draw = function () {
            Klausuraufgabe.crc2.beginPath();
            Klausuraufgabe.crc2.strokeStyle = "black";
            Klausuraufgabe.crc2.fillStyle = "yellow";
            Klausuraufgabe.crc2.arc(this.x + 80, this.y - 30, this.size, 0, 2 * Math.PI);
            Klausuraufgabe.crc2.stroke();
            Klausuraufgabe.crc2.fill();
            Klausuraufgabe.crc2.closePath();
        };
        classFrog.prototype.check = function () {
        };
        return classFrog;
    }(Klausuraufgabe.classFly));
    Klausuraufgabe.classFrog = classFrog;
})(Klausuraufgabe || (Klausuraufgabe = {}));
//# sourceMappingURL=class_frog.js.map