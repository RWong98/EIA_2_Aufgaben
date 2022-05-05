var Canvas;
(function (Canvas) {
    window.addEventListener("load", start);
    function start() {
        var canvas = document.querySelector("canvas");
        canvas.width = 1400;
        canvas.height = 700;
        var crc2 = canvas.getContext("2d");
        //random for Triangle
        var randomN = Math.floor(Math.random() * 50);
        //For random Number
        function getRandomNumber(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        //Canvas and circle
        crc2.fillStyle = "#FF0000";
        crc2.scale(5, 5);
        crc2.fillRect(0, 0, 150, 100);
        crc2.beginPath();
        crc2.arc(getRandomNumber(5, 60), getRandomNumber(5, 60), getRandomNumber(5, 60), 0, 2.5 * Math.PI);
        crc2.strokeStyle = "blue";
        crc2.closePath();
        crc2.stroke();
        //Rectangle with shadow
        crc2.beginPath();
        // crc2.shadowColor = "black";
        // crc2.shadowBlur = 15;
        crc2.fillStyle = "yellow";
        crc2.fillRect(getRandomNumber(5, 80), getRandomNumber(5, 80), getRandomNumber(5, 80), getRandomNumber(5, 80));
        crc2.closePath();
        //Ellipse
        crc2.beginPath();
        crc2.ellipse(getRandomNumber(5, 50), getRandomNumber(5, 50), getRandomNumber(5, 50), getRandomNumber(5, 50), Math.PI / 4, 0, 2 * Math.PI);
        crc2.stroke();
        //Text
        crc2.font = "40px serif";
        crc2.fillStyle = "purple";
        crc2.fillText("Generative Art", getRandomNumber(40, 100), getRandomNumber(40, 100), 160);
        //StrokeText
        crc2.font = "30px sans-serif";
        crc2.strokeStyle = "black";
        crc2.strokeText("this is", getRandomNumber(20, 50), getRandomNumber(20, 50), 70);
        //Triangle
        crc2.beginPath();
        crc2.strokeStyle = "green";
        crc2.moveTo(randomN, 20);
        crc2.lineTo(getRandomNumber(20, 140), getRandomNumber(50, 140));
        crc2.stroke();
        crc2.lineTo(getRandomNumber(100, 80), getRandomNumber(50, 80));
        crc2.stroke();
        crc2.lineTo(randomN, 20);
        crc2.stroke();
        crc2.closePath();
        var path = new Path2D();
        path.arc(getRandomNumber(20, 60), getRandomNumber(20, 60), getRandomNumber(20, 60), 0, 2 * Math.PI);
        crc2.strokeStyle = "cyan";
        crc2.stroke(path);
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=A08.1_Canvas.js.map