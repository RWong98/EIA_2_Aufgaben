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
        TASK[TASK["RIGHT"] = 0] = "RIGHT";
        TASK[TASK["LEFT"] = 1] = "LEFT";
    })(TASK || (TASK = {}));
    var PanickedPerson = /** @class */ (function (_super) {
        __extends(PanickedPerson, _super);
        function PanickedPerson(_x, _y, _color) {
            var _this = _super.call(this, _x, _y) || this;
            _this.task = TASK.LEFT;
            _this.color = _color;
            return _this;
        }
        //Panicked person. Ahhhh!
        PanickedPerson.prototype.draw = function () {
            // console.log("Hallo panicked Person");
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
        PanickedPerson.prototype.react = function (_x, _y) {
            var distanceX = Math.abs(this.x - _x);
            var distanceY = Math.abs(this.y - _y);
            console.log(distanceX, distanceY);
            if (distanceX < 50 && distanceY < 120) {
                this.task = TASK.LEFT;
                if (this.color == "grey") {
                    this.color = "black";
                    this.task = TASK.LEFT;
                }
                else if (this.color == "black") {
                    this.color = "grey";
                    this.task = TASK.RIGHT;
                }
            }
        };
        PanickedPerson.prototype.move = function () {
            this.y = 700;
            if (this.task == TASK.LEFT) {
                this.x = this.x - 1;
            }
            else if (this.task == TASK.RIGHT) {
                this.x = this.x + 1;
            }
            if (this.x == 680) {
                this.x = -4;
            }
            if (this.x == -5) {
                this.x = 679;
            }
        };
        return PanickedPerson;
    }(Beach.Beachobject));
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