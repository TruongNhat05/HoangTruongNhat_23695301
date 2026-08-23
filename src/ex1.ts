class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayInfo(): void {
    console.log(`Tên: ${this.name}, Tuổi: ${this.age}`);
  }
}

const person1 = new Person("Hoàng Trương Nhật", 20);
person1.displayInfo();