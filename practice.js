class Animal {
  //Constructor method to initialize object properties
  constructor(name, color, isWild, sound) {
    this.name = name;
    this.color = color;
    this.isWild = isWild;
    this.sound = sound;
  }
  // you can add your methods here
  makeSound() {
    console.log(`${this.name} ${this.sound}`);
  }
}

// INHERITANCE
class AnimalClassification extends Animal {
  //constructor method to initialize object properties
  constructor(name, order) {
    super(name);
    this.order = order;
  }
}

classifyByOrder(animalName) {
    const animalClass = animals.find((animal) => animal.name === animalName)

    if (animalClass){
      console.log(`${animalClass.name} is a ${animalClass.order}`);
    }else{
      console.log(`${animalName} class not found`);
    }
    return this;
}
