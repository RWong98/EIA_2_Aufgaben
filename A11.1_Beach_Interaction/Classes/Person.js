var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Beach;
(function (Beach) {
    var TASK;
    (function (TASK) {
        TASK[TASK["STILL"] = 0] = "STILL";
        TASK[TASK["MOVE"] = 1] = "MOVE";
    })(TASK || (TASK = {}));
    var Person = /** @class */ (function (_super) {
        __extends(Person, _super);
        function Person(_x, _y) {
            var _this = _super.call(this, _x, _y) || this;
            _this.task = TASK.STILL;
            return _this;
        }
        //Person on beach. Just strollin' along.
        Person.prototype.draw = function () {
            // console.log("Hallo Person");
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
        Person.prototype.react = function (_x, _y) {
            if (_x < 100 + this.x && _y < 750 + this.y) {
                this.task = TASK.MOVE;
            }
        };
        Person.prototype.move = function () {
            if (this.task == TASK.STILL) {
                this.x = 100;
            }
            else if (this.x == 100) {
                this.x = 300;
            }
        };
        return Person;
    }(Beach.Beachobject));
    Beach.Person = Person;
})(Beach || (Beach = {}));
//# sourceMappingURL=Person.js.map