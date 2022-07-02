namespace Beach {

    enum TASK {
        STILL,
        MOVE
    }

    export class Person extends Beachobject {
        x: number;
        y: number;
        private task: TASK = TASK.STILL;
        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        //Person on beach. Just strollin' along.
        draw(): void {
            // console.log("Hallo Person");

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
        react(_x: number, _y: number): void {
            if (_x < 100 + this.x && _y < 750 + this.y) {
                this.task = TASK.MOVE;
            }

        }
        move(): void {
            if (this.task == TASK.STILL) {
                this.x = 100;
            }
            else if (this.x == 100) {
                this.x = 300;
            }
        }

    }
}