namespace Beach {

    export class Seagull extends Beachobject {
        x: number;
        y: number;
        constructor(_x: number, _y: number) {
            super(_x, _y)
;        }

        //Seagull gliding through the air. Into the sun. Meins! Meins! Meins!
        draw(): void {
            // console.log("Hallo Seagull");
            crc2.beginPath();
            crc2.arc(this.x + 2, this.y + 0, 7, 3, 0.1);
            crc2.arc(this.x + 16, this.y + 0, 7, 3, 0.1);
            crc2.stroke();


        }
        react(_x: number, _y: number): void {
            //test
            
        }
        move(): void {
            this.x = 400 - seagullFrame;
            this.y = 450 - seagullFrame;
        }
    }
}