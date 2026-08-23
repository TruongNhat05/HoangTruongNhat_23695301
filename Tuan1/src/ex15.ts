class Book {
  constructor(public title: string, public author: string) {}
}

class User {
  constructor(public name: string) {}
}

class Library {
  books: Book[] = [];
  users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Đã thêm sách "${book.title}" vào thư viện.`);
  }
}

const lib = new Library();
const b1 = new Book("Lập trình OOP", "Nguyễn Văn A");
const u1 = new User("Trương Nhật");

lib.addBook(b1);
lib.users.push(u1);