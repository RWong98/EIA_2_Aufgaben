/*
Aufgabe: 03.2 Memory Settings
Name: Ricco Wong
Matrikel: 269596
Quellen: mit Hilfe von Silvan
*/

namespace MemoryGame {
    window.addEventListener("load", handleLoad);

    let allCards: string[] = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10",
        "11", "11", "12", "12", "13", "13", "14", "14", "15", "15", "16", "16", "17", "17", "18", "18", "19", "19", "20", "20", "21", "21", "22", "22",
        "23", "23", "24", "24", "25", "25"];
    let newCards: string[] = [];
    let body: HTMLElement;
    let colorSelector: HTMLInputElement;
    let cardColor: string;
    let bodyColorSelector: HTMLInputElement; 
    let fontColor: string;
    let fontColorSelector: HTMLInputElement;
    let sizeSelector: HTMLInputElement;
    let cardSize: string;
    let chosenCards: string[] = [];
    let stepperSelector: HTMLInputElement;
    let cardFont: string;
    let minutes: number = 0;
    let seconds: number = 0;

    function handleLoad(_event: Event): void {
        document.getElementById("StartGame").addEventListener("click", startGame);
        colorSelector = <HTMLInputElement>document.querySelector("#color");
        bodyColorSelector = <HTMLInputElement>document.querySelector("#bodycolor");
        fontColorSelector = <HTMLInputElement>document.querySelector("#fontcolor");
        sizeSelector = <HTMLInputElement>document.querySelector("#slider");
        stepperSelector = <HTMLInputElement>document.querySelector("#stepper");
        body = document.querySelector("body");
    }

    function radioEntry(): void {
        let formData: FormData = new FormData(document.forms[0]);
        if (formData.get("radio") != null && formData.get("radio") != undefined) {
            cardFont = (formData.get("radio") + "");
        }
    }
    function startGame(): void {
        cardColor = colorSelector.value;
        body.style.backgroundColor = bodyColorSelector.value;
        fontColor = fontColorSelector.value;
        cardSize = sizeSelector.value;
        chooseCards();
        radioEntry();
        shuffleArray(chosenCards);
        body.removeChild(document.querySelector("#menu"));
        setTimer();
    }


    function chooseCards(): void {
        for (let i: number = 0; i < parseInt(stepperSelector.value); i++) {
            chosenCards.push(allCards[i]);
        }
        console.log(chosenCards);

    }


    function shuffleArray(_allCards: string[]): string[] {
        let randomCard: number;
        while (_allCards.length != 0) {
            randomCard = Math.floor(Math.random() * _allCards.length);
            newCards.push(_allCards[randomCard]);
            createCard(_allCards[randomCard]);
            _allCards.splice(randomCard, 1);

        }
        console.log(newCards);

        return newCards;
    }

    function createCard(_cardValue: string): void {
        let card: HTMLDivElement = document.createElement("div");
        card.style.backgroundColor = cardColor;
        card.style.color = cardColor;
        card.style.padding = cardSize + "px";
        card.style.fontFamily = cardFont;
        console.log(cardFont);
        card.addEventListener("click", () => { showCard(card); });
        let field: HTMLElement = document.getElementById("cardField");
        card.innerHTML = _cardValue;
        card.className = "Card " + _cardValue;
        field.appendChild(card);
    }

    let oneActiveCard: boolean = false;
    let currentCards: HTMLDivElement[] = [];


    function showCard(_card: HTMLDivElement): void {
        _card.style.color = fontColor;
        _card.style.pointerEvents = "none";
        _card.style.backgroundColor = "blue";
        currentCards.push(_card);
        if (oneActiveCard == false) {
            oneActiveCard = true;
        }
        else {
            document.querySelector("body").style.pointerEvents = "none";
            setTimeout(startTimer, 2000);
            oneActiveCard = false;
        }
    }

    function hideCards(): void {
        currentCards[0].style.backgroundColor = cardColor;
        currentCards[1].style.backgroundColor = cardColor;
        currentCards[0].style.color = cardColor;
        currentCards[1].style.color = cardColor;
        console.log(currentCards);
        if (currentCards[0].className == currentCards[1].className) {
            currentCards[0].style.visibility = "hidden";
            currentCards[1].style.visibility = "hidden";
            currentCards[0].setAttribute("deleted", "deleted");
            currentCards[1].setAttribute("deleted", "deleted");
            if (document.querySelectorAll("div div").length == document.querySelectorAll("[deleted = 'deleted']").length) {
                alert("Du hast gewonnen! In " + minutes + " Minuten und " + seconds + " Sekunden!");
                location.reload();
            }
        }
        currentCards[0].style.pointerEvents = "";
        currentCards[1].style.pointerEvents = "";
        currentCards = [];
        document.querySelector("body").style.pointerEvents = "";
    }

    function setTimer(): void {
        setInterval(timer, 1000);
    }
    function timer(): void {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            }
        document.querySelector("#timer").innerHTML = minutes + ":" + seconds;
        }

    function startTimer(): void {
        hideCards();
    }

}