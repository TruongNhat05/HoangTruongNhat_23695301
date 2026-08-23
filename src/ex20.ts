interface Vehicle {
  brand: string;
  speed: number;
  drive(): void;
}

class Car implements Vehicle {
  constructor(public brand: string, public speed: number) {}

  drive(): void {
    console.log(`Ô tô ${this.brand} đang chạy với tốc độ ${this.speed} km/h.`);
  }
}

class Bike implements Vehicle {
  constructor(public brand: string, public speed: number) {}

  drive(): void {
    console.log(`Xe máy ${this.brand} đang chạy với tốc độ ${this.speed} km/h.`);
  }
}

const myCar: Vehicle = new Car("Toyota", 100);
const myBike: Vehicle = new Bike("Honda", 50);

myCar.drive();
myBike.drive();