var A5;
(function (A5) {
    var classTree = (function () {
        function classTree(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
        }
        //        update(): void {
        //           this.move();
        //            this.draw();
        //        }
        //        move(): void {
        //            this.x += Math.random() * 1 + 0.5;
        //            this.y += Math.random() * 0;
        //          
        //            
        //           if (this.x > 800) {
        //                   this.x = 0; }
        //        }
        classTree.prototype.draw = function () {
            A5.crc2.beginPath();
            A5.crc2.moveTo(this.x, this.y);
            A5.crc2.lineTo(this.x + 20, this.y + 30);
            A5.crc2.lineTo(this.x - 20, this.y + 30);
            A5.crc2.closePath();
            A5.crc2.stroke();
            A5.crc2.fillStyle = this.color;
            A5.crc2.fill();
        };
        return classTree;
    }());
    A5.classTree = classTree;
})(A5 || (A5 = {}));
//# sourceMappingURL=tree_classes.js.map