var Beach;
(function (Beach) {
    window.addEventListener("load", handleLoad);
    var crc2;
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        for (var i = 0; i < 10; i++) {
            drawGrass({ x: getRandomNumber(100, 500), y: getRandomNumber(800, 1000) });
        }
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 400, y: 125 }, { x: 150, y: 75 });
        for (var s = 0; s < 4; s++) {
            drawSeagulls({ x: getRandomNumber(50, 450), y: getRandomNumber(200, 400) });
        }
        drawPerson({ x: getRandomNumber(100, 500), y: getRandomNumber(750, 1000) });
        drawSharkfin({ x: getRandomNumber(100, 500), y: getRandomNumber(500, 600) });
        panickedPerson({ x: getRandomNumber(20, 90), y: getRandomNumber(600, 700) });
    }
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function drawBackground() {
        console.log("Background");
        var gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "cyan");
        gradient.addColorStop(0.5, "lightblue");
        gradient.addColorStop(0.6, "darkblue");
        gradient.addColorStop(1, "yellow");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    //Sun
    function drawSun(_position) {
        console.log("Sun", _position);
        var r1 = 40;
        var r2 = 170;
        var gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 70%, 1)");
        gradient.addColorStop(0.5, "HSLA(65, 70%, 60%, 0.5)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    //Cloud
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        var nParticles = 75;
        var radiusParticles = 30;
        var particle = new Path2D();
        var gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (var drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            var x = (Math.random() - 0.5) * _size.x;
            var y = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    //Seagulls
    function drawSeagulls(_position) {
        console.log("Seagull", _position);
        crc2.beginPath();
        crc2.arc(_position.x + 2, _position.y + 0, 7, 3, 0.1);
        crc2.arc(_position.x + 16, _position.y + 0, 7, 3, 0.1);
        crc2.stroke();
    }
    //Person
    function drawPerson(_position) {
        crc2.beginPath();
        //Kopf
        crc2.arc(_position.x + 5, _position.y - 60, 10, 0, 2 * Math.PI);
        //Beine
        crc2.moveTo(_position.x - 10, _position.y + 0);
        crc2.lineTo(_position.x + 5, _position.y - 20);
        crc2.lineTo(_position.x + 20, _position.y + 0);
        //Körper
        crc2.moveTo(_position.x + 5, _position.y - 20);
        crc2.lineTo(_position.x + 5, _position.y - 50);
        //linker Arm
        crc2.moveTo(_position.x + 5, _position.y - 45);
        crc2.lineTo(_position.x - 10, _position.y - 30);
        //rechter Arm
        crc2.moveTo(_position.x + 5, _position.y - 45);
        crc2.lineTo(_position.x + -15, _position.y - 50);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
        crc2.closePath();
    }
    //Person in water
    function panickedPerson(_position) {
        crc2.beginPath();
        crc2.arc(_position.x + 5, _position.y - 60, 10, 0, 2 * Math.PI);
        //Körper
        crc2.moveTo(_position.x + 5, _position.y - 20);
        crc2.lineTo(_position.x + 5, _position.y - 50);
        //Arm links
        crc2.moveTo(_position.x + 5, _position.y - 45);
        crc2.lineTo(_position.x + 15, _position.y - 70);
        //Arm rechts
        crc2.moveTo(_position.x + 5, _position.y - 45);
        crc2.lineTo(_position.x + -15, _position.y - 60);
        wave(_position.x - 280, _position.y - 390);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.stroke();
    }
    //small patches of grass
    function drawGrass(_position) {
        crc2.beginPath();
        crc2.moveTo(_position.x + 20, _position.y - 15);
        crc2.lineTo(_position.x + 10, _position.y + 5);
        crc2.lineTo(_position.x + 10, _position.y - 20);
        crc2.moveTo(_position.x + 10, _position.y - 30);
        crc2.lineTo(_position.x + 10, _position.y - 20);
        crc2.lineTo(_position.x + 20, _position.y - 30);
        crc2.lineTo(_position.x + 12, _position.y - 20);
        crc2.strokeStyle = "green";
        crc2.fill();
        crc2.stroke();
    }
    //Sharkfin
    function drawSharkfin(_position) {
        crc2.beginPath();
        crc2.moveTo(_position.x + 10, _position.y + 40);
        crc2.lineTo(_position.x - 30, _position.y + 90);
        crc2.moveTo(_position.x + 10, _position.y + 40);
        crc2.lineTo(_position.x + 30, _position.y + 97);
        wave(_position.x - 280, _position.y - 276);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
        crc2.closePath();
    }
    //Little waveform below panicked person and sharkfin
    function wave(_x, _y) {
        crc2.save();
        crc2.translate(_x, _y);
        crc2.moveTo(245, 370);
        crc2.quadraticCurveTo(255, 360, 265, 370);
        crc2.moveTo(265, 370);
        crc2.quadraticCurveTo(275, 380, 285, 370);
        crc2.moveTo(285, 370);
        crc2.quadraticCurveTo(295, 360, 305, 370);
        crc2.moveTo(305, 370);
        crc2.quadraticCurveTo(315, 380, 325, 370);
        crc2.moveTo(325, 370);
        crc2.stroke();
        crc2.restore();
    }
})(Beach || (Beach = {}));
//# sourceMappingURL=A08.2.js.map