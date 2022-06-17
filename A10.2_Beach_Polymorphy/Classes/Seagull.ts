namespace Beach {

    export class Seagull {
        x: number;
        y: number;
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        //Seagull gliding through the air. Into the sun. Meins! Meins! Meins!
        draw(): void {
            console.log("Hallo Seagull");
            crc2.beginPath();
            crc2.arc(this.x + 2, this.y + 0, 7, 3, 0.1);
            crc2.arc(this.x + 16, this.y + 0, 7, 3, 0.1);
            crc2.stroke();


        }

    }
}