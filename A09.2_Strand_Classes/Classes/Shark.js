var Beach;
(function (Beach) {
    var Shark = /** @class */ (function () {
        function Shark(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Sharkfin with grey colour
        Shark.prototype.draw = function () {
            console.log("Hallo Shark. Fish, uh, people are friends. Not food!");
            Beach.crc2.save();
            var path = new Path2D;
            path.moveTo(this.x - 30, this.y + 90);
            path.lineTo(this.x + 10, this.y + 40);
            path.lineTo(this.x + 30, this.y + 97);
            path.quadraticCurveTo(this.x + 19, this.y + 90, this.x + 10, this.y + 90);
            path.quadraticCurveTo(this.x - 5, this.y + 107, this.x - 20, this.y + 90);
            Beach.crc2.fillStyle = "grey";
            Beach.crc2.fill(path);
            Beach.crc2.restore();
            Beach.wave(this.x - 280, this.y - 275);
            Beach.crc2.save();
            Beach.crc2.translate(this.x, this.y);
            Beach.crc2.restore();
            Beach.crc2.closePath();
        };
        return Shark;
    }());
    Beach.Shark = Shark;
})(Beach || (Beach = {}));
//# sourceMappingURL=Shark.js.map