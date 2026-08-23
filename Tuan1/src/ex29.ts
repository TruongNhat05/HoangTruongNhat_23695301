interface Movable {
  move(): void;
}

class Car implements Movable {
  move(): void {
    console.log("Ô tô di chuyển bằng 4 bánh trên đường.");
  }
}

class Robot implements Movable {
  move(): void {
    console.log("Robot di chuyển bằng khớp chân cơ khí.");
  }
}

const car: Movable = new Car();
const robot: Movable = new Robot();

car.move();
robot.move();