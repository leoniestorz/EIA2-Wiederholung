var RandomBoxes;
(function (RandomBoxes) {
    window.addEventListener("load", init);
    function init() {
        var menge = prompt("Geben Sie eine Zahl zwischen 10 und 100 ein");
        var mengeNummer = parseInt(menge);
        if (mengeNummer >= 10 && mengeNummer <= 100) {
            for (var i = 0; i < mengeNummer; i++) {
                draw(Math.random() * 1920, Math.random() * 1080, 40, 40, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            }
        }
        else {
            alert("Versuchen Sie es erneut");
            init();
        }
    }
    function draw(_x, _y, _height, _width, _color) {
        var div = document.createElement("div");
        div.style.width = _width + "px";
        div.style.height = _height + "px";
        div.style.left = _x + "px";
        div.style.top = _y + "px";
        div.style.backgroundColor = _color;
        div.style.position = "absolute";
        document.body.appendChild(div);
    }
})(RandomBoxes || (RandomBoxes = {}));
//# sourceMappingURL=randomBoxes.js.map