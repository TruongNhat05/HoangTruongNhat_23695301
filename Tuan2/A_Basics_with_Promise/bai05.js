export function simulateTask(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task done");
    }, time);
  });
}

console.log("Bắt đầu chạy simulateTask(1500)...");

simulateTask(1500).then((result) => {
  console.log(`Kết quả sau 1500ms: "${result}"`);
});
