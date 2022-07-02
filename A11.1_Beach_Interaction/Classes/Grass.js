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
    var Grass = /** @class */ (function (_super) {
        __extends(Grass, _super);
        function Grass(_x, _y) {
            return _super.call(this, _x, _y) || this;
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
        Grass.prototype.react = function (_x, _y) {
            //test
        };
        Grass.prototype.move = function () {
            //test
        };
        return Grass;
    }(Beach.Beachobject));
    Beach.Grass = Grass;
})(Beach || (Beach = {}));
//# sourceMappingURL=Grass.js.map