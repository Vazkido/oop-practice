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
