namespace Beach {

    export class Cloud {
        x: number;
        y: number;
        scaleX: number;
        scaleY: number;
        constructor(_x: number, _y: number, _scaleX: number, _scaleY: number) {
            this.x = _x;
            this.y = _y;
            this.scaleX = _scaleX;
            this.scaleY = _scaleY;
        }

        //Cloudy with a chance of cloudballs.
        draw(): void {
            console.log("Cloud");
            let nParticles: number = 75;
            let radiusParticles: number = 30;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);
    
            particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
    
            crc2.save();
            crc2.translate(this.x, this.y);
    
            crc2.fillStyle = gradient;
            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * this.scaleX;
                let y: number = (Math.random() * this.scaleY);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
    
        }
    }
}