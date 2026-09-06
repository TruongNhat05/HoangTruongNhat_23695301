function makePromise(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Người chiến thắng: ${name} (hoàn thành sau ${delay}ms)`);
    }, delay);
  });
}

console.log("Bắt đầu cuộc đua giữa 3 Promise bằng Promise.race()...");

const runner1 = makePromise("Runner 1", 3000);
const runner2 = makePromise("Runner 2", 1000); // Nhanh nhất
const runner3 = makePromise("Runner 3", 2000);

Promise.race([runner1, runner2, runner3])
  .then((winner) => {
    console.log("Kết quả từ Promise.race():", winner);
  })
  .catch((error) => {
    console.error("Lỗi:", error);
  });
