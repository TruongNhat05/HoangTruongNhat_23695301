interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log(`${this.name} sủa: Gâu gâu!`);
  }
}

const myDog: Animal = new Dog("Cậu Vàng");
myDog.sound();