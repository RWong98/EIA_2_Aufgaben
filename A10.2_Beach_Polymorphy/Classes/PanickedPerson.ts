namespace Beach {

    export class PanickedPerson {
        x: number;
        y: number;
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        //Panicked person. Ahhhh!
        draw(): void {
            console.log("Hallo panicked Person");

            //Person in water
            crc2.beginPath();
            crc2.arc(this.x + 5, this.y - 60, 10, 0, 2 * Math.PI);
            //Körper
            crc2.moveTo(this.x + 5, this.y - 20);
            crc2.lineTo(this.x + 5, this.y - 50);
            //Arm links
            crc2.moveTo(this.x + 5, this.y - 45);
            crc2.lineTo(this.x + 15, this.y - 70);
            //Arm rechts
            crc2.moveTo(this.x + 5, this.y - 45);
            crc2.lineTo(this.x + -15, this.y - 60);
            wave(this.x - 280, this.y - 390);
            crc2.strokeStyle = "black";
            crc2.resetTransform();
            crc2.stroke();
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.restore();
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.stroke();


        }
    }
    function wave(_x: number, _y: number): void {
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
}