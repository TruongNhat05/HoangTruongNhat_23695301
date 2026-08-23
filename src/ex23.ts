interface Payment {
  pay(amount: number): void;
}

class CashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Thanh toán ${amount} VNĐ bằng Tiền mặt.`);
  }
}

class CardPayment implements Payment {
  pay(amount: number): void {
    console.log(`Thanh toán ${amount} VNĐ bằng Thẻ ngân hàng.`);
  }
}

const cash: Payment = new CashPayment();
const card: Payment = new CardPayment();

cash.pay(500000);
card.pay(1200000);