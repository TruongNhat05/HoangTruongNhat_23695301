class Animal {
  protected makeSound(): void {
    console.log("Động vật phát ra âm thanh.");
  }
}

class Dog extends Animal {
  public bark(): void {
    this.makeSound();
    console.log("Chó sủa: Gâu gâu!");
  }
}

class Cat extends Animal {
  public meow(): void {
    this.makeSound();
    console.log("Mèo kêu: Meo meo!");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.bark();
cat.meow();