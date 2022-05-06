/*
Aufgabe: 03.2 Memory Settings
Name: Ricco Wong
Matrikel: 269596
Quellen: mit Hilfe von Silvan
*/
var MemoryGame;
(function (MemoryGame) {
    window.addEventListener("load", handleLoad);
    var allCards = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10",
        "11", "11", "12", "12", "13", "13", "14", "14", "15", "15", "16", "16", "17", "17", "18", "18", "19", "19", "20", "20", "21", "21", "22", "22",
        "23", "23", "24", "24", "25", "25", "26", "26", "27", "27", "28", "28"];
    var newCards = [];
    var colorSelector;
    var cardColor;
    function handleLoad(_event) {
        document.getElementById("StartGame").addEventListener("click", startGame);
        colorSelector = document.querySelector("#color");
    }
    function startGame() {
        cardColor = colorSelector.value;
        shuffleArray(allCards);
    }
    function shuffleArray(_allCards) {
        var randomCard;
        while (_allCards.length != 0) {
            randomCard = Math.floor(Math.random() * _allCards.length);
            newCards.push(_allCards[randomCard]);
            createCard(_allCards[randomCard]);
            _allCards.splice(randomCard, 1);
        }
        return newCards;
    }
    function createCard(_cardValue) {
        var card = document.createElement("div");
        card.style.backgroundColor = cardColor;
        card.style.color = cardColor;
        card.addEventListener("click", function () { showCard(card); });
        var field = document.getElementById("cardField");
        card.innerHTML = _cardValue;
        card.className = "Card " + _cardValue;
        field.appendChild(card);
    }
    var oneActiveCard = false;
    var currentCards = [];
    function showCard(_card) {
        _card.style.color = "white";
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
    function hideCards() {
        currentCards[0].style.color = cardColor;
        currentCards[1].style.color = cardColor;
        console.log(currentCards);
        if (currentCards[0].className == currentCards[1].className) {
            currentCards[0].style.visibility = "hidden";
            currentCards[1].style.visibility = "hidden";
        }
        currentCards = [];
        document.querySelector("body").style.pointerEvents = "";
    }
    function startTimer() {
        hideCards();
    }
})(MemoryGame || (MemoryGame = {}));
// Work in Progress
//# sourceMappingURL=A03.js.map