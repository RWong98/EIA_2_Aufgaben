var Beach;
(function (Beach) {
    var Sun = /** @class */ (function () {
        function Sun(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Stare into the Sun for prolonged periods of time for the optimal effect.
        Sun.prototype.draw = function () {
            console.log("Sun");
            var r1 = 40;
            var r2 = 170;
            var gradient = Beach.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 70%, 1)");
            gradient.addColorStop(0.5, "HSLA(65, 70%, 60%, 0.5)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            Beach.crc2.save();
            Beach.crc2.translate(this.x, this.y);
            Beach.crc2.fillStyle = gradient;
            Beach.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            Beach.crc2.fill();
            Beach.crc2.restore();
        };
        return Sun;
    }());
    Beach.Sun = Sun;
})(Beach || (Beach = {}));
//# sourceMappingURL=Sun.js.map