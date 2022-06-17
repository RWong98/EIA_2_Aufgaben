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