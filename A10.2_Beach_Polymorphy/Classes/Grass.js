var Beach;
(function (Beach) {
    var Grass = /** @class */ (function () {
        function Grass(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Lil' Grasshälmchen.
        Grass.prototype.draw = function () {
            Beach.crc2.beginPath();
            Beach.crc2.moveTo(this.x + 20, this.y - 15);
            Beach.crc2.lineTo(this.x + 10, this.y + 5);
            Beach.crc2.lineTo(this.x + 10, this.y - 20);
            Beach.crc2.moveTo(this.x + 10, this.y - 30);
            Beach.crc2.lineTo(this.x + 10, this.y - 20);
            Beach.crc2.lineTo(this.x + 20, this.y - 30);
            Beach.crc2.lineTo(this.x + 12, this.y - 20);
            Beach.crc2.strokeStyle = "green";
            Beach.crc2.stroke();
        };
        return Grass;
    }());
    Beach.Grass = Grass;
})(Beach || (Beach = {}));
//# sourceMappingURL=Grass.js.map