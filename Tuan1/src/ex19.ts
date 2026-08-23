class Animal {
  makeSound(): void {
    console.log("Động vật phát ra tiếng kêu.");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Chó sủa: Gâu gâu!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Mèo kêu: Meo meo!");
  }
}

const animals: Animal[] = [new Animal(), new Dog(), new Cat()];
animals.forEach(animal => animal.makeSound());