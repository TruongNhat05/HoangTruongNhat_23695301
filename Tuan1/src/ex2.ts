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

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  displayAllInfo(): void {
    console.log(`Tên: ${this.name}, Tuổi: ${this.age}, Xếp loại: ${this.grade}`);
  }
}

const student1 = new Student("Hoàng Trương Nhật", 20, "Giỏi");
student1.displayAllInfo();