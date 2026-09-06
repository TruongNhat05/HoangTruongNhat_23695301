function getHelloAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 2000);
  });
}

async function run() {
  console.log("Đang chờ 2 giây để lấy kết quả bằng async/await...");
  const message = await getHelloAsync();
  console.log("Kết quả nhận được:", message);
}

run();
