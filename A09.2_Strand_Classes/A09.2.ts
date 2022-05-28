namespace Beach {
    export interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    export let canvas: HTMLCanvasElement | null;
    export let crc2: CanvasRenderingContext2D;
    let sharkFrame: number = 0;
    let panickedFrame: number = 0;
    let personFrame: number = 100;
    let seagullFrame: number = 300;

    function handleLoad(_event: Event): void {
        canvas = document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        setInterval(startAnimation, 20);
    }


    function startAnimation(): void {
        if (sharkFrame == 680) {
            sharkFrame = 0;
        }
        sharkFrame ++;

        if (panickedFrame == 130) {
            panickedFrame = -550;
        }
        panickedFrame ++;

        personFrame++;

        if (seagullFrame == 320) {
            seagullFrame = 0;
        }
        seagullFrame++;


        drawBackground();
        
        drawGrass({ x: getStartPosition(100, 500), y: getStartPosition(800, 1000) });
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 400, y: 125 }, { x: 150, y: 75 });

        // for (let s: number = 0; s < 4; s++) {}

        let seagull: Seagull = new Seagull(getStartPosition(50, 450) - seagullFrame, getStartPosition(200, 400) - seagullFrame);
        seagull.draw();

        let person: Person = new Person(getStartPosition(100, 300) - Math.sin(personFrame * 0.03) * 200, getStartPosition(750, 890));
        person.draw();

        let panickedPerson: PanickedPerson = new PanickedPerson(getStartPosition(20, 90) - panickedFrame, getStartPosition(600, 700));
        panickedPerson.draw();

        let firstShark: Shark = new Shark(getStartPosition(100, 630) - sharkFrame, getStartPosition(500, 590));
        firstShark.draw();

    }

    function getStartPosition(min: number, max: number): number {
        return max;
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "cyan");
        gradient.addColorStop(0.5, "lightblue");
        gradient.addColorStop(0.6, "darkblue");
        gradient.addColorStop(1, "yellow");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    //Sun
    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 40;
        let r2: number = 170;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 70%, 1)");
        gradient.addColorStop(0.5, "HSLA(65, 70%, 60%, 0.5)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    //Cloud
    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);
        let nParticles: number = 75;
        let radiusParticles: number = 30;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticles);

        particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;
        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();

    }


    //small patches of grass
    function drawGrass(_position: Vector): void {
        crc2.beginPath();
        crc2.moveTo(_position.x + 20, _position.y - 15);
        crc2.lineTo(_position.x + 10, _position.y + 5);
        crc2.lineTo(_position.x + 10, _position.y - 20);
        crc2.moveTo(_position.x + 10, _position.y - 30);
        crc2.lineTo(_position.x + 10, _position.y - 20);
        crc2.lineTo(_position.x + 20, _position.y - 30);
        crc2.lineTo(_position.x + 12, _position.y - 20);
        crc2.strokeStyle = "green";
        crc2.stroke();
    }


    //Little waveform below panicked person and sharkfin
    export function wave(_x: number, _y: number): void {
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