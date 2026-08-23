class Product {
  constructor(public name: string, public price: number) {}
}

class Order {
  products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  calculateTotal(): number {
    return this.products.reduce((total, p) => total + p.price, 0);
  }
}

const order = new Order();
order.addProduct(new Product("Áo thun", 150));
order.addProduct(new Product("Quần jeans", 350));

console.log(`Tổng giá trị đơn hàng: ${order.calculateTotal()} VNĐ`);