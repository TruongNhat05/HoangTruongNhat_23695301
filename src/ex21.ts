class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const stringRepo = new Repository<string>();
stringRepo.add("Item 1");
stringRepo.add("Item 2");
console.log("Danh sách chuỗi:", stringRepo.getAll());

const numberRepo = new Repository<number>();
numberRepo.add(100);
numberRepo.add(200);
console.log("Danh sách số:", numberRepo.getAll());