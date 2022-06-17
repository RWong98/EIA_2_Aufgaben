var Beach;
(function (Beach) {
    var Seagull = /** @class */ (function () {
        function Seagull(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Seagull gliding through the air. Into the sun. Meins! Meins! Meins!
        Seagull.prototype.draw = function () {
            console.log("Hallo Seagull");
            Beach.crc2.beginPath();
            Beach.crc2.arc(this.x + 2, this.y + 0, 7, 3, 0.1);
            Beach.crc2.arc(this.x + 16, this.y + 0, 7, 3, 0.1);
            Beach.crc2.stroke();
        };
        return Seagull;
    }());
    Beach.Seagull = Seagull;
})(Beach || (Beach = {}));
//# sourceMappingURL=Seagull.js.map