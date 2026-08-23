class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  showInfo(): void {
    console.log(`Hãng: ${this.brand}, Mẫu: ${this.model}, Năm sản xuất: ${this.year}`);
  }
}

const car1 = new Car("Toyota", "Camry", 2022);
car1.showInfo();