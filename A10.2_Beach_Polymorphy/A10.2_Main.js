var Beach;
(function (Beach) {
    window.addEventListener("load", handleLoad);
    var allBeachObjects = [];
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
        // for (let s: number = 0; s < 4; s++) {}
        fillBeach();
    }
    //Place and animate objects on the beach.
    function fillBeach() {
        allBeachObjects = [];
        allBeachObjects.push(new Beach.Background(0, 0));
        allBeachObjects.push(new Beach.Sun(100, 75));
        allBeachObjects.push(new Beach.Cloud(400, 125, 150, 75));
        allBeachObjects.push(new Beach.Grass(getStartPosition(100, 500), getStartPosition(800, 1000)));
        allBeachObjects.push(new Beach.Seagull(getStartPosition(50, 450) - seagullFrame, getStartPosition(200, 400) - seagullFrame));
        allBeachObjects.push(new Beach.Person(getStartPosition(100, 300) - Math.sin(personFrame * 0.03) * 200, getStartPosition(750, 890)));
        allBeachObjects.push(new Beach.PanickedPerson(getStartPosition(20, 90) - panickedFrame, getStartPosition(600, 700)));
        allBeachObjects.push(new Beach.Shark(getStartPosition(100, 630) - sharkFrame, getStartPosition(500, 590)));
        for (var _i = 0, allBeachObjects_1 = allBeachObjects; _i < allBeachObjects_1.length; _i++) {
            var oneBeachObject = allBeachObjects_1[_i];
            oneBeachObject.draw();
        }
    }
    function getStartPosition(min, max) {
        return max;
    }
})(Beach || (Beach = {}));
//# sourceMappingURL=A10.2_Main.js.map