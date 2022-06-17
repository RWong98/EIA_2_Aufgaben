namespace Beach {

    export class Grass {
        x: number;
        y: number;
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        //Lil' Grasshälmchen.
        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x + 20, this.y - 15);
            crc2.lineTo(this.x + 10, this.y + 5);
            crc2.lineTo(this.x + 10, this.y - 20);
            crc2.moveTo(this.x + 10, this.y - 30);
            crc2.lineTo(this.x + 10, this.y - 20);
            crc2.lineTo(this.x + 20, this.y - 30);
            crc2.lineTo(this.x + 12, this.y - 20);
            crc2.strokeStyle = "green";
            crc2.stroke();
        }
    }
}