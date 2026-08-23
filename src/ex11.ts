class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} sủa: Gâu gâu!`);
  }
}

class Cat extends Animal {
  meow(): void {
    console.log(`${this.name} kêu: Meo meo!`);
  }
}

const dog = new Dog("Mứt");
const cat = new Cat("Miu");

dog.bark();
cat.meow();