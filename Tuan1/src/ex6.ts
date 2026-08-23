class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

const myBook = new Book("Lập trình OOP", "Nguyễn Văn A", 2024);
console.log(`Tên sách: ${myBook.title}, Tác giả: ${myBook.author}, Năm: ${myBook.year}`);