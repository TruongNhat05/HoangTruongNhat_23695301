function simulateTask(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task done");
    }, time);
  });
}

async function executeSimulatedTask() {
  console.log("Bắt đầu gọi simulateTask(2000) bằng async/await...");
  const startTime = Date.now();

  const result = await simulateTask(2000);

  const duration = Date.now() - startTime;
  console.log(`Kết quả nhận được sau ${duration}ms: "${result}"`);
}

executeSimulatedTask();
