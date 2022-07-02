namespace Beach {
    export interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    export let canvas: HTMLCanvasElement | null;
    export let crc2: CanvasRenderingContext2D;
    let allBeachObjects: Beachobject[] = [];
    export let sharkFrame: number = 0;
    export let panickedFrame: number = 0;
    export let personFrame: number = 100;
    export let seagullFrame: number = 300;
    export let sunFrame: number = 0;

    function handleLoad(_event: Event): void {
        canvas = document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        setInterval(startAnimation, 20);
        canvas.addEventListener("click", (evt) => {getMousePos(evt); });
        allBeachObjects = [];
        allBeachObjects.push(new Background(0, 0));
        allBeachObjects.push(new Sun(0, 75));
        allBeachObjects.push(new Cloud(400, 125, 150, 75));
        allBeachObjects.push(new Grass(getStartPosition(100, 500), getStartPosition(800, 1000)));
        allBeachObjects.push(new Seagull(getStartPosition(50, 450) - seagullFrame, getStartPosition(200, 400) - seagullFrame));
        allBeachObjects.push(new Person(getStartPosition(100, 300) - Math.sin(personFrame * 0.018) * 200, getStartPosition(750, 890)));
        allBeachObjects.push(new PanickedPerson(getStartPosition(20, 90), getStartPosition(600, 700), "black"));
        allBeachObjects.push(new Shark(getStartPosition(100, 630) - sharkFrame, getStartPosition(500, 590), "grey"));
    }


    function startAnimation(): void {

        if (panickedFrame == 130) {
            panickedFrame = -550;
        }
        panickedFrame ++;

        personFrame++;

        if (seagullFrame == 320) {
            seagullFrame = 0;
        }
        seagullFrame++;


        sunFrame++;

        fillBeach();
    }

    //Place and animate objects on the beach.
    function fillBeach(): void {
        for (let oneBeachObject of allBeachObjects) {
            oneBeachObject.draw();
            oneBeachObject.move();
        }
    }

    function getMousePos(_evt: MouseEvent): void {
        let rect: DOMRect = canvas.getBoundingClientRect();
        
        let x: number = _evt.clientX - rect.left;
        let y: number = _evt.clientY - rect.top;
    
        for (let oneBeachObject of allBeachObjects) {
            oneBeachObject.react(x, y);
        }
      }

    function getStartPosition(min: number, max: number): number {
        return max;
    }

}