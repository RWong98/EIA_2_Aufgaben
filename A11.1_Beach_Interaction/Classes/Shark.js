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
    var Shark = /** @class */ (function (_super) {
        __extends(Shark, _super);
        function Shark(_x, _y, _color) {
            var _this = _super.call(this, _x, _y) || this;
            _this.task = TASK.LEFT;
            _this.color = _color;
            return _this;
        }
        //Sharkfin with grey colour
        Shark.prototype.draw = function () {
            // console.log("Hallo Shark. Fish, uh, people are friends. Not food!");
            Beach.crc2.save();
            var path = new Path2D;
            path.moveTo(this.x - 30, this.y + 90);
            path.lineTo(this.x + 10, this.y + 40);
            path.lineTo(this.x + 30, this.y + 97);
            path.quadraticCurveTo(this.x + 19, this.y + 90, this.x + 10, this.y + 90);
            path.quadraticCurveTo(this.x - 5, this.y + 107, this.x - 20, this.y + 90);
            Beach.crc2.fillStyle = this.color;
            Beach.crc2.fill(path);
            Beach.crc2.restore();
            wave(this.x - 280, this.y - 275);
            Beach.crc2.save();
            Beach.crc2.translate(this.x, this.y);
            Beach.crc2.restore();
            Beach.crc2.closePath();
        };
        Shark.prototype.react = function (_x, _y) {
            var distanceX = Math.abs(this.x - _x);
            var distanceY = Math.abs(this.y - _y);
            console.log(distanceX, distanceY);
            if (distanceX < 50 && distanceY < 120) {
                this.task = TASK.LEFT;
                console.log("Treffer");
                if (this.color == "grey") {
                    this.color = "red";
                    this.task = TASK.LEFT;
                }
                else if (this.color == "red") {
                    this.color = "grey";
                    this.task = TASK.RIGHT;
                }
            }
        };
        Shark.prototype.move = function () {
            this.y = 500;
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
        return Shark;
    }(Beach.Beachobject));
    Beach.Shark = Shark;
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
//# sourceMappingURL=Shark.js.map