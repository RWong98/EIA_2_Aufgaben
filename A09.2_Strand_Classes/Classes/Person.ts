namespace Beach {

    export class Person {
        x: number;
        y: number;
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        //Person on beach. Just strollin' along.
        draw(): void {
            console.log("Hallo Person");

            crc2.beginPath();
            //Kopf
            crc2.arc(this.x + 5, this.y - 60, 10, 0, 2 * Math.PI);
            //Beine
            crc2.moveTo(this.x - 10, this.y + 0);
            crc2.lineTo(this.x + 5, this.y - 20);
            crc2.lineTo(this.x + 20, this.y + 0);
            //Körper
            crc2.moveTo(this.x + 5, this.y - 20);
            crc2.lineTo(this.x + 5, this.y - 50);
            //linker Arm
            crc2.moveTo(this.x + 5, this.y - 45);
            crc2.lineTo(this.x - 10, this.y - 30);
            //rechter Arm
            crc2.moveTo(this.x + 5, this.y - 45);
            crc2.lineTo(this.x + -15, this.y - 50);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.restore();
            crc2.closePath();


        }

    }
}