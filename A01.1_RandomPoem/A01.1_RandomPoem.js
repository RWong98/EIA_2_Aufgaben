var RandomPoem;
(function (RandomPoem) {
    var subject = ["Isaac Clarke", "Dante", "Sebastian Castellanos", "Simon Jarrett", "Six", "Kratos", "Nathan Drake", "Heather Mason", "Hugh Jass", "Subject Delta", "Bully Maguire", "Ash Williams"];
    var predicate = ["shoots", "defeats", "runs from", "experiences an existential crisis and dread with", "karate-chops", "throws", "twerks on", "laughs at", "slays", "farts in the general direction of", "dances with", "sings with"];
    var object = ["Necromorphs.", "Demons.", "Deadites.", "a human conciousness in a machine body.", "Valkyries.", "me.", "you.", "Splicers.", "EIA2.", "butts.", "SCP-504.", "Marvin, the paranoid Android."];
    /* Funktion zum erstellen einer random Zahl */
    function makeRandom() {
        return Math.floor(Math.random() * subject.length);
    }
    getVerse(subject, predicate, object);
    /* Funktion zum erstellen eines kurzen poems aus Subjekt, Prädikat und Objekt */
    function getVerse(_subject, _predicate, _object) {
        for (var i = subject.length; i > 0; i--) {
            var chosensubject = makeRandom();
            var chosenpredicate = makeRandom();
            var chosenobject = makeRandom();
            console.log(_subject[chosensubject], _predicate[chosenpredicate], _object[chosenobject]);
            _subject.splice(chosensubject, 1);
            _predicate.splice(chosenpredicate, 1);
            _object.splice(chosenobject, 1);
        }
    }
})(RandomPoem || (RandomPoem = {}));
/*mit Hilfe von: Silvan*/ 
//# sourceMappingURL=A01.1_RandomPoem.js.map