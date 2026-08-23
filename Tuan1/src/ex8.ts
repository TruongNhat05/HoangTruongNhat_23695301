class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const products: Product[] = [
  new Product("Chuột máy tính", 25),
  new Product("Bàn phím cơ", 150),
  new Product("Màn hình", 200),
  new Product("Tai nghe", 80)
];

const expensiveProducts = products.filter(product => product.price > 100);
console.log("Sản phẩm có giá > 100:", expensiveProducts);