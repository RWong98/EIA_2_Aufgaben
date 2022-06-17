namespace Beach {
    export interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    export let canvas: HTMLCanvasElement | null;
    export let crc2: CanvasRenderingContext2D;
    let allBeachObjects: Beachobject[] = [];
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

        
        // for (let s: number = 0; s < 4; s++) {}
        fillBeach();
    }

    //Place and animate objects on the beach.
    function fillBeach(): void {
        allBeachObjects = [];
        allBeachObjects.push(new Background(0, 0));
        allBeachObjects.push(new Sun(100, 75));
        allBeachObjects.push(new Cloud(400, 125, 150, 75));
        allBeachObjects.push(new Grass(getStartPosition(100, 500), getStartPosition(800, 1000)));
        allBeachObjects.push(new Seagull(getStartPosition(50, 450) - seagullFrame, getStartPosition(200, 400) - seagullFrame));
        allBeachObjects.push(new Person(getStartPosition(100, 300) - Math.sin(personFrame * 0.03) * 200, getStartPosition(750, 890)));
        allBeachObjects.push(new PanickedPerson(getStartPosition(20, 90) - panickedFrame, getStartPosition(600, 700)));
        allBeachObjects.push(new Shark(getStartPosition(100, 630) - sharkFrame, getStartPosition(500, 590)));
        for (let oneBeachObject of allBeachObjects) {
            oneBeachObject.draw();
        }
    }

    function getStartPosition(min: number, max: number): number {
        return max;
    }

}