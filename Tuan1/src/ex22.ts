class Stack<T> {
  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log("Phần tử đỉnh (peek):", stack.peek());
console.log("Lấy phần tử ra (pop):", stack.pop());
console.log("Stack có rỗng không?", stack.isEmpty());