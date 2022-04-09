/*
Aufgabe: 02.1 Event Inspector
Name: Ricco Wong
Matrikel: 269596
Datum: 09.04.2022
Quellen: mit Hilfe von Silvan
*/
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.querySelector("body").addEventListener("click", logInfo);
        document.querySelector("body").addEventListener("keyup", logInfo);
        document.querySelector("#div0").addEventListener("click", logInfo);
        document.querySelector("#div0").addEventListener("keyup", logInfo);
        document.querySelector("#div1").addEventListener("click", logInfo);
        document.querySelector("#div1").addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        var x = _event.clientX;
        var y = _event.clientY;
        var eTarget = _event.target + "";
        document.querySelector("span").innerHTML = eTarget + x + "px" + y + "px";
        document.querySelector("span").style.top = (y + 20) + "px";
        document.querySelector("span").style.left = (x + 10) + "px";
    }
    function logInfo(_event) {
        console.log(_event.type, _event.target, _event.currentTarget, _event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=A02.1.js.map