const helloAsyncPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello Async");
  }, 2000);
});

console.log("Đang chờ 2 giây để nhận kết quả từ Promise...");

helloAsyncPromise.then((message) => {
  console.log("Kết quả nhận được:", message);
});
