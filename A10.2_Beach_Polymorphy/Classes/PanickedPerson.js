var Beach;
(function (Beach) {
    var PanickedPerson = /** @class */ (function () {
        function PanickedPerson(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Panicked person. Ahhhh!
        PanickedPerson.prototype.draw = function () {
            console.log("Hallo panicked Person");
            //Person in water
            Beach.crc2.beginPath();
            Beach.crc2.arc(this.x + 5, this.y - 60, 10, 0, 2 * Math.PI);
            //Körper
            Beach.crc2.moveTo(this.x + 5, this.y - 20);
            Beach.crc2.lineTo(this.x + 5, this.y - 50);
            //Arm links
            Beach.crc2.moveTo(this.x + 5, this.y - 45);
            Beach.crc2.lineTo(this.x + 15, this.y - 70);
            //Arm rechts
            Beach.crc2.moveTo(this.x + 5, this.y - 45);
            Beach.crc2.lineTo(this.x + -15, this.y - 60);
            wave(this.x - 280, this.y - 390);
            Beach.crc2.strokeStyle = "black";
            Beach.crc2.resetTransform();
            Beach.crc2.stroke();
            Beach.crc2.save();
            Beach.crc2.translate(this.x, this.y);
            Beach.crc2.restore();
            Beach.crc2.closePath();
            Beach.crc2.strokeStyle = "black";
            Beach.crc2.stroke();
        };
        return PanickedPerson;
    }());
    Beach.PanickedPerson = PanickedPerson;
    function wave(_x, _y) {
        Beach.crc2.save();
        Beach.crc2.translate(_x, _y);
        Beach.crc2.moveTo(245, 370);
        Beach.crc2.quadraticCurveTo(255, 360, 265, 370);
        Beach.crc2.moveTo(265, 370);
        Beach.crc2.quadraticCurveTo(275, 380, 285, 370);
        Beach.crc2.moveTo(285, 370);
        Beach.crc2.quadraticCurveTo(295, 360, 305, 370);
        Beach.crc2.moveTo(305, 370);
        Beach.crc2.quadraticCurveTo(315, 380, 325, 370);
        Beach.crc2.moveTo(325, 370);
        Beach.crc2.stroke();
        Beach.crc2.restore();
    }
})(Beach || (Beach = {}));
//# sourceMappingURL=PanickedPerson.js.map