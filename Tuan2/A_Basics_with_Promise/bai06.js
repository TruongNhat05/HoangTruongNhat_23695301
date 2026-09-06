function simulateTaskWithName(name, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} done after ${time}ms`);
    }, time);
  });
}

console.log("Khởi chạy 3 Promise song song bằng Promise.all()...");

const task1 = simulateTaskWithName("Task 1", 1000);
const task2 = simulateTaskWithName("Task 2", 2000);
const task3 = simulateTaskWithName("Task 3", 1500);

const startTime = Date.now();

Promise.all([task1, task2, task3])
  .then((results) => {
    const duration = Date.now() - startTime;
    console.log(`Tất cả task hoàn thành sau ~${duration}ms!`);
    console.log("Kết quả mảng trả về:", results);
  })
  .catch((error) => {
    console.error("Lỗi:", error);
  });
