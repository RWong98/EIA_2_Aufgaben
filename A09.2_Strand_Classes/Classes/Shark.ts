namespace Beach {

    export class Shark {
        x: number;
        y: number;
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        //Sharkfin with grey colour
        draw(): void {
            console.log("Hallo Shark. Fish, uh, people are friends. Not food!");

            crc2.save();
            let path: Path2D = new Path2D;
            path.moveTo(this.x - 30, this.y + 90);
            path.lineTo(this.x + 10, this.y + 40);
            path.lineTo(this.x + 30, this.y + 97);
            path.quadraticCurveTo(this.x + 19, this.y + 90, this.x + 10, this.y + 90);
            path.quadraticCurveTo(this.x - 5, this.y + 107, this.x - 20, this.y + 90);
            crc2.fillStyle = "grey";
            crc2.fill(path);
            crc2.restore();
            wave(this.x - 280, this.y - 275);
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.restore();
            crc2.closePath();
        }
    }
}