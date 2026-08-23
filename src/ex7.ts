class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.trim().length > 0) {
      this._name = value;
    }
  }
}

const user = new User("Trương Nhật");
console.log(`Tên ban đầu: ${user.name}`);
user.name = "Hoàng Trương Nhật";
console.log(`Tên sau cập nhật: ${user.name}`);