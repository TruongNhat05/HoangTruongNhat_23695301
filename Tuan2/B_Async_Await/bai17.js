function createDelayedPromise(value, delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Giá trị: "${value}" sau ${delayMs}ms`);
    }, delayMs);
  });
}

async function iterateWithForAwait() {
  const promises = [
    createDelayedPromise("Item 1", 500),
    createDelayedPromise("Item 2", 1000),
    createDelayedPromise("Item 3", 800),
    createDelayedPromise("Item 4", 300),
  ];

  console.log("Bắt đầu duyệt mảng Promises với cú pháp for await...of:\n");

  for await (const result of promises) {
    console.log("-> Đã nhận được:", result);
  }

  console.log("\nĐã hoàn thành duyệt tất cả Promises!");
}

iterateWithForAwait();
