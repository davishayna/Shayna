// //functions can be hoisted to the top but not the class is not able to do so
// //Constructor Function
// function Animal(name) {
//     this.name = name;
//     this.eat = function() {
//       console.log(`${this.name} eats`)
//     }
// }
//
// Animal.prototype.talk = function() {
//   console.log('Blahzzy blah')
// }
// let corey = new Animal("corey")


// //Class syntax is ES5
// Animal.prototype.speak = function() {
//   console.log(this.name + " makes a noise");
// }
//
// let corey = new Animal("corey")
//
// corey.speak() // => "corey makes a noise"

//Static method ES5
// Animal.isAnimal = function() {
//
// }






// //Class is ES6 is just a constructor function that is syntactical sugar
// //Can start with an upperCase or lowercase letter
// class AnimalClass {
//   constructor(name)/*there can only be one constructor in any class.Creates the object*/ {
//       this.name = name;
//   }
// }
//
// let corey2 = new AnimalClass("corey")
//
//
class Animal2 {
  constructor(name, gender) {
      this.name = name;
      this.gender = gender
  }
  sleep() {
    console.log(this.name + " is sleeping")
  }
//Static method helps the class determine if any value is an instance of the class
//Static methods are not inherited.
  static isAnimal(value) {
    return value instanceof Animal2//subjects lives in the class itself
  }
}

class Human extends Animal2 /*Human gets everything that animal Has*/{
  constructor(name, gender, spokenLanguage, favMovie)/*name and gender have to be called in the constructor for super to work*/ {
    super(name, gender)//calls the Animal2(parent) constructor
    this.spokenLanguage = spokenLanguage,
    this.favMovie = favMovie
    this.money = 0
  }


  earnMoney() {
    this.money++
    console.log(`${this.name} earned money. Now ${this.gender} has ${this.money}`)
  }
}


class GuitarPlayer extends Human {
  constructor(
    name,
    gender,
    spokenLanguage,
    favMovie,
    songs,
    masteryLevel
  ) {
    super(name, gender, spokenLanguage, favMovie)
    this.songs = songs
    this.masteryLevel = masteryLevel
  }
}

let corey2 = new Human('Corey', 'Male', 'English', 'Jurassic Park')
console.log(corey2)
corey2.sleep()
corey2.earnMoney()
corey2.earnMoney()
corey2.earnMoney()
console.log(corey2.money)
console.log(Animal2.isAnimal(corey2))

let dog = new Animal2('Pluto', 'Male')
dog.earnMoney();


// //STATIC METHODS
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;
//
//     return Math.hypot(dx, dy);
//   }
// }
//
// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
//
// console.log(Point.distance(p1, p2)); // 7.0710678118654755
//
//
//
//
//
//
// //INHERITANCE
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name)
//     this.breed = breed
//   }
//
//   speak() {
//     console.log(this.name + " says woof woof")
//   }
//
//   fetch() {
//     console.log("Running to retrieve stick!")
//   }
// }
//
// let corey = new Dog("corey", "hound",)
//
// corey.speak() //=> "corey says woof woof"
// corey.eat() // => "nom nom nom"
// corey.fetch() // => "Running to retrieve stick!"
//
// let matt = new Animal("matt")
// matt.speak() //=> "matt makes a noise."
// matt.fetch() //=> TypeError: matt.fetch is not a function
