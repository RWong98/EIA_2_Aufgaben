var oldFarm;
(function (oldFarm) {
    window.addEventListener("load", handleLoad);
    var FarmAnimal = /** @class */ (function () {
        function FarmAnimal(_name, _species, _food, _amount, _eatenFood, _sound) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.amount = _amount;
            this.eatenFood = _eatenFood;
            this.sound = _sound;
        }
        FarmAnimal.prototype.eat = function () {
            console.log(this.food, this.amount);
            document.getElementById("NurseryRhyme").innerHTML += "In the Futtertrog there is: " + this.amount + " kg " + this.food + " " + "<br>";
            document.getElementById("NurseryRhyme").innerHTML += "After eating, there is: " + (this.amount - this.eatenFood) + " kg " + this.food + " left. " + "<br>";
        };
        FarmAnimal.prototype.sing = function () {
            console.log(this.name, this.sound);
            document.getElementById("NurseryRhyme").innerHTML += this.name + " happily " + this.sound + "s: " + "<br>";
            document.getElementById("NurseryRhyme").innerHTML += "Old MacDonald had a farm Ee i ee i oh! " + "<br>" +
                "And on that farm he had a " + this.species + " Ee i ee i oh! " + "<br>" +
                "With a " + this.sound + " " + this.sound + " here " + "<br>" +
                "And a " + this.sound + " " + this.sound + " there " + "<br>" +
                "Here a " + this.sound + " there a " + this.sound + "<br>" +
                "Everywhere a " + this.sound + " " + this.sound + "<br>" +
                "Old MacDonald had a farm Ee i ee i oh!" + "<br>" + "<br>";
        };
        return FarmAnimal;
    }());
    function handleLoad() {
        // Nursery rhyme:
        // Old MacDonald had a farm, E-I-E-I-O!
        // And on his farm he had a cow, E-I-E-I-O!
        // With a moo-moo here and a moo-moo there,
        // Here a moo, there a moo,
        // Everywhere a moo-moo,
        // Old MacDonald had a farm, E-I-E-I-O!
        //Animals/Person I want to implement:
        //cow - moo; sheep - meeh; pig - oink; Old McDonald - Hi, Bye; dog - woof, duck - quack 
        var cow = new FarmAnimal("Sheepy the cow", "cow", "wheat", 100, 50, "moo");
        cow.eat();
        cow.sing();
        var pig = new FarmAnimal("Ducky the pig", "pig", "of all sorts of stuff", 500, 200, "oink");
        pig.eat();
        pig.sing();
        var sheep = new FarmAnimal("Piggy the sheep", "sheep", "grass", 300, 250, "määh");
        sheep.eat();
        sheep.sing();
        var mcdonald = new FarmAnimal("Old McDonald the farmer", "himself", "steak", 10, 3, "Howdy");
        mcdonald.eat();
        mcdonald.sing();
        var dog = new FarmAnimal("Cowy the dog", "dog", "catfood", 1000, 980, "woof");
        dog.eat();
        dog.sing();
        var duck = new FarmAnimal("Doggy the duck", "duck", "breadcrumbs", 200, 5, "quack");
        duck.eat();
        duck.sing();
    }
})(oldFarm || (oldFarm = {}));
//# sourceMappingURL=A09.1.js.map