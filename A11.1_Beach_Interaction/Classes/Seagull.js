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
    var Seagull = /** @class */ (function (_super) {
        __extends(Seagull, _super);
        function Seagull(_x, _y) {
            return _super.call(this, _x, _y) || this;
        }
        //Seagull gliding through the air. Into the sun. Meins! Meins! Meins!
        Seagull.prototype.draw = function () {
            // console.log("Hallo Seagull");
            Beach.crc2.beginPath();
            Beach.crc2.arc(this.x + 2, this.y + 0, 7, 3, 0.1);
            Beach.crc2.arc(this.x + 16, this.y + 0, 7, 3, 0.1);
            Beach.crc2.stroke();
        };
        Seagull.prototype.react = function (_x, _y) {
            //test
        };
        Seagull.prototype.move = function () {
            this.x = 400 - Beach.seagullFrame;
            this.y = 450 - Beach.seagullFrame;
        };
        return Seagull;
    }(Beach.Beachobject));
    Beach.Seagull = Seagull;
})(Beach || (Beach = {}));
//# sourceMappingURL=Seagull.js.map