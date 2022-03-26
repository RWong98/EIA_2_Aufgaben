namespace RandomPoem {
  let subject: string[] = ["Isaac Clarke", "Dante", "Sebastian Castellanos", "Simon Jarrett", "Six", "Kratos", "Nathan Drake", "Heather Mason", "Hugh Jass", "Subject Delta", "Bully Maguire", "Ash Williams"];
  let predicate: string[] = ["shoots", "defeats", "runs from", "experiences an existential crisis and dread with", "karate-chops", "throws", "twerks on", "laughs at", "slays", "farts in the general direction of", "dances with", "sings with"];
  let object: string[] = ["Necromorphs.", "Demons.", "Deadites.", "a human conciousness in a machine body.", "Valkyries.", "me.", "you.", "Splicers.", "EIA2.", "butts.", "SCP-504.", "Marvin, the paranoid Android."];

  /* Funktion zum erstellen einer random Zahl */
  function makeRandom(): number {
    return Math.floor(Math.random() * subject.length);
  }

  getVerse(subject, predicate, object);

  /* Funktion zum erstellen eines kurzen poems aus Subjekt, Prädikat und Objekt */
  function getVerse(_subject: string[], _predicate: string[], _object: string[]): void {
    for (let i: number = subject.length; i > 0; i--) {

      let chosensubject: number = makeRandom();
      let chosenpredicate: number = makeRandom();
      let chosenobject: number = makeRandom();

      console.log(_subject[chosensubject], _predicate[chosenpredicate], _object[chosenobject]);

      _subject.splice(chosensubject, 1);
      _predicate.splice(chosenpredicate, 1);
      _object.splice(chosenobject, 1);
    }
  }

}

/*mit Hilfe von: Silvan*/