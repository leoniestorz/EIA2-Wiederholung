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
        superclass.prototype.move = function () { };
        superclass.prototype.draw = function () { };
        return superclass;
    }());
    A6.superclass = superclass;
})(A6 || (A6 = {}));
//# sourceMappingURL=superclass_inheritance.js.map