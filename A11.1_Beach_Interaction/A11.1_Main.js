var Beach;
(function (Beach) {
    window.addEventListener("load", handleLoad);
    var allBeachObjects = [];
    Beach.sharkFrame = 0;
    Beach.panickedFrame = 0;
    Beach.personFrame = 100;
    Beach.seagullFrame = 300;
    Beach.sunFrame = 0;
    function handleLoad(_event) {
        Beach.canvas = document.querySelector("canvas");
        Beach.crc2 = Beach.canvas.getContext("2d");
        setInterval(startAnimation, 20);
        Beach.canvas.addEventListener("click", function (evt) { getMousePos(evt); });
        allBeachObjects = [];
        allBeachObjects.push(new Beach.Background(0, 0));
        allBeachObjects.push(new Beach.Sun(0, 75));
        allBeachObjects.push(new Beach.Cloud(400, 125, 150, 75));
        allBeachObjects.push(new Beach.Grass(getStartPosition(100, 500), getStartPosition(800, 1000)));
        allBeachObjects.push(new Beach.Seagull(getStartPosition(50, 450) - Beach.seagullFrame, getStartPosition(200, 400) - Beach.seagullFrame));
        allBeachObjects.push(new Beach.Person(getStartPosition(100, 300) - Math.sin(Beach.personFrame * 0.018) * 200, getStartPosition(750, 890)));
        allBeachObjects.push(new Beach.PanickedPerson(getStartPosition(20, 90), getStartPosition(600, 700), "black"));
        allBeachObjects.push(new Beach.Shark(getStartPosition(100, 630) - Beach.sharkFrame, getStartPosition(500, 590), "grey"));
    }
    function startAnimation() {
        if (Beach.panickedFrame == 130) {
            Beach.panickedFrame = -550;
        }
        Beach.panickedFrame++;
        Beach.personFrame++;
        if (Beach.seagullFrame == 320) {
            Beach.seagullFrame = 0;
        }
        Beach.seagullFrame++;
        Beach.sunFrame++;
        fillBeach();
    }
    //Place and animate objects on the beach.
    function fillBeach() {
        for (var _i = 0, allBeachObjects_1 = allBeachObjects; _i < allBeachObjects_1.length; _i++) {
            var oneBeachObject = allBeachObjects_1[_i];
            oneBeachObject.draw();
            oneBeachObject.move();
        }
    }
    function getMousePos(_evt) {
        var rect = Beach.canvas.getBoundingClientRect();
        var x = _evt.clientX - rect.left;
        var y = _evt.clientY - rect.top;
        for (var _i = 0, allBeachObjects_2 = allBeachObjects; _i < allBeachObjects_2.length; _i++) {
            var oneBeachObject = allBeachObjects_2[_i];
            oneBeachObject.react(x, y);
        }
    }
    function getStartPosition(min, max) {
        return max;
    }
})(Beach || (Beach = {}));
//# sourceMappingURL=A11.1_Main.js.map