var Beach;
(function (Beach) {
    var Cloud = /** @class */ (function () {
        function Cloud(_x, _y, _scaleX, _scaleY) {
            this.x = _x;
            this.y = _y;
            this.scaleX = _scaleX;
            this.scaleY = _scaleY;
        }
        //Cloudy with a chance of cloudballs.
        Cloud.prototype.draw = function () {
            console.log("Cloud");
            var nParticles = 75;
            var radiusParticles = 30;
            var particle = new Path2D();
            var gradient = Beach.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
            particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            Beach.crc2.save();
            Beach.crc2.translate(this.x, this.y);
            Beach.crc2.fillStyle = gradient;
            for (var drawn = 0; drawn < nParticles; drawn++) {
                Beach.crc2.save();
                var x = (Math.random() - 0.5) * this.scaleX;
                var y = (Math.random() * this.scaleY);
                Beach.crc2.translate(x, y);
                Beach.crc2.fill(particle);
                Beach.crc2.restore();
            }
            Beach.crc2.restore();
        };
        return Cloud;
    }());
    Beach.Cloud = Cloud;
})(Beach || (Beach = {}));
//# sourceMappingURL=Cloud.js.map