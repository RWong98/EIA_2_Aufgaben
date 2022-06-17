var Beach;
(function (Beach) {
    var Background = /** @class */ (function () {
        function Background(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Background.
        Background.prototype.draw = function () {
            console.log("Background");
            var gradient = Beach.crc2.createLinearGradient(0, 0, 0, Beach.crc2.canvas.height);
            gradient.addColorStop(0, "cyan");
            gradient.addColorStop(0.5, "lightblue");
            gradient.addColorStop(0.6, "darkblue");
            gradient.addColorStop(1, "yellow");
            Beach.crc2.fillStyle = gradient;
            Beach.crc2.fillRect(0, 0, Beach.crc2.canvas.width, Beach.crc2.canvas.height);
        };
        return Background;
    }());
    Beach.Background = Background;
})(Beach || (Beach = {}));
//# sourceMappingURL=Background.js.map