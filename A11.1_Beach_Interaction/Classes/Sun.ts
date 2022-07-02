namespace Beach {

    enum TASK {
        MOVE,
        STILLSTART,
        STILLEND,
        MOVEBACK
    }

    export class Sun extends Beachobject {
        x: number;
        y: number;
        color: string;
        private task: TASK = TASK.STILLSTART;
        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        //Stare into the Sun for prolonged periods of time for the optimal effect.
        draw(): void {
            // console.log("Sun");

            let r1: number = 40;
            let r2: number = 170;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

            gradient.addColorStop(0, "HSLA(60, 100%, 70%, 1)");
            gradient.addColorStop(0.5, "HSLA(65, 70%, 60%, 0.5)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
        react(_x: number, _y: number): void {
            let distanceX: number = Math.abs(this.x - _x);
            let distanceY: number = Math.abs(this.y - _y);
            console.log(distanceX, distanceY);
            
            if (distanceX < 200 && distanceY < 200) {

                sunFrame = 0;

                if (this.task == TASK.STILLEND) {
                    this.task = TASK.MOVEBACK;
                    console.log("Move back");
                    
                }
                else if (this.task == TASK.STILLSTART) {
                    this.task = TASK.MOVE;
                    console.log("Move");
                    
                }
                else if (this.task == TASK.MOVE || this.task == TASK.MOVEBACK) {
                    return;
                }
            }
        }

        move(): void {

            if (this.task == TASK.MOVE) {
                
                if (this.x < 400) {
                    this.x = + sunFrame;
                }
                else if (this.x >= 400) {
                    this.x = 401;
                    this.task = TASK.STILLEND;
                    console.log("Still end");
                    
                }
            }
            else if (this.task == TASK.MOVEBACK) {

                if (this.x > 0) {
                    this.x = 400 - sunFrame;
                }
                else if (this.x <= 0) {
                    this.x = -1;
                    this.task = TASK.STILLSTART;
                    
                }
            }

        }
    }
}