var Beach;
(function (Beach) {
    window.addEventListener("load", handleLoad);
    var sharkFrame = 0;
    var panickedFrame = 0;
    var personFrame = 100;
    var seagullFrame = 300;
    function handleLoad(_event) {
        Beach.canvas = document.querySelector("canvas");
        Beach.crc2 = Beach.canvas.getContext("2d");
        setInterval(startAnimation, 20);
    }
    function startAnimation() {
        if (sharkFrame == 680) {
            sharkFrame = 0;
        }
        sharkFrame++;
        if (panickedFrame == 130) {
            panickedFrame = -550;
        }
        panickedFrame++;
        personFrame++;
        if (seagullFrame == 320) {
            seagullFrame = 0;
        }
        seagullFrame++;
        drawBackground();
        for (var i = 0; i < 10; i++) {
            drawGrass({ x: getStartPosition(100, 500), y: getStartPosition(800, 1000) });
        }
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 400, y: 125 }, { x: 150, y: 75 });
        // for (let s: number = 0; s < 4; s++) {}
        var seagull = new Beach.Seagull(getStartPosition(50, 450) - seagullFrame, getStartPosition(200, 400) - seagullFrame);
        seagull.draw();
        var person = new Beach.Person(getStartPosition(100, 300) - Math.sin(personFrame * 0.03) * 200, getStartPosition(750, 890));
        person.draw();
        var panickedPerson = new Beach.PanickedPerson(getStartPosition(20, 90) - panickedFrame, getStartPosition(600, 700));
        panickedPerson.draw();
        var firstShark = new Beach.Shark(getStartPosition(100, 630) - sharkFrame, getStartPosition(500, 590));
        firstShark.draw();
    }
    function getStartPosition(min, max) {
        return max;
    }
    function drawBackground() {
        console.log("Background");
        var gradient = Beach.crc2.createLinearGradient(0, 0, 0, Beach.crc2.canvas.height);
        gradient.addColorStop(0, "cyan");
        gradient.addColorStop(0.5, "lightblue");
        gradient.addColorStop(0.6, "darkblue");
        gradient.addColorStop(1, "yellow");
        Beach.crc2.fillStyle = gradient;
        Beach.crc2.fillRect(0, 0, Beach.crc2.canvas.width, Beach.crc2.canvas.height);
    }
    //Sun
    function drawSun(_position) {
        console.log("Sun", _position);
        var r1 = 40;
        var r2 = 170;
        var gradient = Beach.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 70%, 1)");
        gradient.addColorStop(0.5, "HSLA(65, 70%, 60%, 0.5)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        Beach.crc2.save();
        Beach.crc2.translate(_position.x, _position.y);
        Beach.crc2.fillStyle = gradient;
        Beach.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Beach.crc2.fill();
        Beach.crc2.restore();
    }
    //Cloud
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        var nParticles = 75;
        var radiusParticles = 30;
        var particle = new Path2D();
        var gradient = Beach.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        Beach.crc2.save();
        Beach.crc2.translate(_position.x, _position.y);
        Beach.crc2.fillStyle = gradient;
        for (var drawn = 0; drawn < nParticles; drawn++) {
            Beach.crc2.save();
            var x = (Math.random() - 0.5) * _size.x;
            var y = (Math.random() * _size.y);
            Beach.crc2.translate(x, y);
            Beach.crc2.fill(particle);
            Beach.crc2.restore();
        }
        Beach.crc2.restore();
    }
    //small patches of grass
    function drawGrass(_position) {
        Beach.crc2.beginPath();
        Beach.crc2.moveTo(_position.x + 20, _position.y - 15);
        Beach.crc2.lineTo(_position.x + 10, _position.y + 5);
        Beach.crc2.lineTo(_position.x + 10, _position.y - 20);
        Beach.crc2.moveTo(_position.x + 10, _position.y - 30);
        Beach.crc2.lineTo(_position.x + 10, _position.y - 20);
        Beach.crc2.lineTo(_position.x + 20, _position.y - 30);
        Beach.crc2.lineTo(_position.x + 12, _position.y - 20);
        Beach.crc2.strokeStyle = "green";
        Beach.crc2.stroke();
    }
    //Little waveform below panicked person and sharkfin
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
    Beach.wave = wave;
})(Beach || (Beach = {}));
//# sourceMappingURL=A09.2.js.map