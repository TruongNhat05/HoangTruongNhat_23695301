class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  manageTeam(): void {
    console.log(`Quản lý ${this.name} đang điều hành đội ngũ.`);
  }
}

class Developer extends Employee {
  writeCode(): void {
    console.log(`Lập trình viên ${this.name} đang viết code TypeScript.`);
  }
}

const manager = new Manager("Trương Nhật", 2000);
const dev = new Developer("Văn A", 1500);

manager.manageTeam();
dev.writeCode();