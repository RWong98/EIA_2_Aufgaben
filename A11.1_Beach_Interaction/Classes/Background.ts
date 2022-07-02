namespace Beach {

    export class Background {
        x: number;
        y: number;
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        //Background.
        draw(): void {
            console.log("Background");
    
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "cyan");
            gradient.addColorStop(0.5, "lightblue");
            gradient.addColorStop(0.6, "darkblue");
            gradient.addColorStop(1, "yellow");
    
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        react(_x: number, _y: number): void {
            //test
            
        }

        move(): void {
            //test
        }
    }
}