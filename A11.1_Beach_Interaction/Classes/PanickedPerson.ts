namespace Beach {

    enum TASK {
        RIGHT, 
        LEFT
    }

    export class PanickedPerson extends Beachobject {
        x: number;
        y: number;
        color: string;
        private task: TASK = TASK.LEFT;
        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y);
            this.color = _color;
        }

        //Panicked person. Ahhhh!
        draw(): void {
            // console.log("Hallo panicked Person");

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

        react(_x: number, _y: number): void {
            let distanceX: number = Math.abs(this.x - _x);
            let distanceY: number = Math.abs(this.y - _y);
            console.log(distanceX, distanceY);
            
            if (distanceX < 50 && distanceY < 120) {
                this.task = TASK.LEFT;
                
                if (this.color == "grey") {
                    this.color = "black";
                    this.task = TASK.LEFT;
                }
                else if (this.color == "black") {
                    this.color = "grey";
                    this.task = TASK.RIGHT;
                }
            }
        }

        move(): void {
            this.y = 700;
            if (this.task == TASK.LEFT) {
                this.x = this.x - 1;
            }
            else if (this.task == TASK.RIGHT) {
                this.x = this.x + 1;
            }

            if (this.x == 680) {
                this.x = -4;
            }

            if (this.x == -5) {
                this.x = 679;
            }

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