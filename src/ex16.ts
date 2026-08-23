class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getValue(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(100);
const stringBox = new Box<string>("TypeScript");

console.log(`Giá trị trong numberBox: ${numberBox.getValue()}`);
console.log(`Giá trị trong stringBox: ${stringBox.getValue()}`);