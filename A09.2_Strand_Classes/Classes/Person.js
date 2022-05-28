var Beach;
(function (Beach) {
    var Person = /** @class */ (function () {
        function Person(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Person on beach. Just strollin' along.
        Person.prototype.draw = function () {
            console.log("Hallo Person");
            Beach.crc2.beginPath();
            //Kopf
            Beach.crc2.arc(this.x + 5, this.y - 60, 10, 0, 2 * Math.PI);
            //Beine
            Beach.crc2.moveTo(this.x - 10, this.y + 0);
            Beach.crc2.lineTo(this.x + 5, this.y - 20);
            Beach.crc2.lineTo(this.x + 20, this.y + 0);
            //Körper
            Beach.crc2.moveTo(this.x + 5, this.y - 20);
            Beach.crc2.lineTo(this.x + 5, this.y - 50);
            //linker Arm
            Beach.crc2.moveTo(this.x + 5, this.y - 45);
            Beach.crc2.lineTo(this.x - 10, this.y - 30);
            //rechter Arm
            Beach.crc2.moveTo(this.x + 5, this.y - 45);
            Beach.crc2.lineTo(this.x + -15, this.y - 50);
            Beach.crc2.strokeStyle = "black";
            Beach.crc2.stroke();
            Beach.crc2.save();
            Beach.crc2.translate(this.x, this.y);
            Beach.crc2.restore();
            Beach.crc2.closePath();
        };
        return Person;
    }());
    Beach.Person = Person;
})(Beach || (Beach = {}));
//# sourceMappingURL=Person.js.map