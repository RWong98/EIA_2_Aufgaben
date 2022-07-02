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
        TASK[TASK["MOVE"] = 0] = "MOVE";
        TASK[TASK["STILLSTART"] = 1] = "STILLSTART";
        TASK[TASK["STILLEND"] = 2] = "STILLEND";
        TASK[TASK["MOVEBACK"] = 3] = "MOVEBACK";
    })(TASK || (TASK = {}));
    var Sun = /** @class */ (function (_super) {
        __extends(Sun, _super);
        function Sun(_x, _y) {
            var _this = _super.call(this, _x, _y) || this;
            _this.task = TASK.STILLSTART;
            return _this;
        }
        //Stare into the Sun for prolonged periods of time for the optimal effect.
        Sun.prototype.draw = function () {
            // console.log("Sun");
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
        Sun.prototype.react = function (_x, _y) {
            var distanceX = Math.abs(this.x - _x);
            var distanceY = Math.abs(this.y - _y);
            console.log(distanceX, distanceY);
            if (distanceX < 200 && distanceY < 200) {
                Beach.sunFrame = 0;
                if (this.task == TASK.STILLEND) {
                    this.task = TASK.MOVEBACK;
                    console.log("Move back");
                }
                else if (this.task == TASK.STILLSTART) {
                    this.task = TASK.MOVE;
                    console.log("Move");
                }
                else if (this.task == TASK.MOVE || this.task == TASK.MOVEBACK) {
                    return;
                }
            }
        };
        Sun.prototype.move = function () {
            if (this.task == TASK.MOVE) {
                if (this.x < 400) {
                    this.x = +Beach.sunFrame;
                }
                else if (this.x >= 400) {
                    this.x = 401;
                    this.task = TASK.STILLEND;
                    console.log("Still end");
                }
            }
            else if (this.task == TASK.MOVEBACK) {
                if (this.x > 0) {
                    this.x = 400 - Beach.sunFrame;
                }
                else if (this.x <= 0) {
                    this.x = -1;
                    this.task = TASK.STILLSTART;
                }
            }
        };
        return Sun;
    }(Beach.Beachobject));
    Beach.Sun = Sun;
})(Beach || (Beach = {}));
//# sourceMappingURL=Sun.js.map