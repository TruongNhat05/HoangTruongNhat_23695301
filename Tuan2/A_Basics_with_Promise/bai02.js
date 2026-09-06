function getNumberAfterOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

console.log("Bắt đầu gọi hàm getNumberAfterOneSecond()...");

getNumberAfterOneSecond().then((number) => {
  console.log(`Kết quả resolve sau 1 giây là: ${number}`);
});
