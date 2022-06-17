namespace Beach {

    export class Sun {
        x: number;
        y: number;
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        //Stare into the Sun for prolonged periods of time for the optimal effect.
        draw(): void {
            console.log("Sun");
    
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
    }
}