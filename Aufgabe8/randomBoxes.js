var RandomBoxes;
(function (RandomBoxes) {
    window.addEventListener("load", init);
    function init() {
        var menge;
        alert("Geben Sie eine Zahl zwischen 10 und 100 ein");
        if (menge > 10 && menge < 100) {
            drawBox(100, 100, "red", 20, 20);
        }
        else
            alert("Versuchen SIe es erneut");
    }
    function drawBox(_x, _y, _color, _width, _height) {
        var box = document.createElement("div");
        box.style.color = _color;
        box.style.width = _width + "px";
        box.style.height = _height + "px";
        box.style.marginLeft = _x + "px";
        box.style.marginTop = _y + "px";
        document.body.appendChild(box);
    }
})(RandomBoxes || (RandomBoxes = {}));
//# sourceMappingURL=randomBoxes.js.map