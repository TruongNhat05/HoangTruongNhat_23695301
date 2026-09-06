function delayTask(name, delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`- Hoàn thành [${name}] sau ${delayMs}ms`);
      resolve(`Kết quả của ${name}`);
    }, delayMs);
  });
}

async function runSequentially() {
  console.log("Bắt đầu thực hiện các tác vụ TUẦN TỰ (Sequential):");
  const startTime = Date.now();

  const res1 = await delayTask("Task A", 1000);

  const res2 = await delayTask("Task B", 1000);

  const res3 = await delayTask("Task C", 1000);

  const totalTime = Date.now() - startTime;
  console.log("\nTổng hợp kết quả:", [res1, res2, res3]);
  console.log(`=> Tổng thời gian chạy tuần tự: ~${totalTime}ms (xấp xỉ 3000ms vì chờ từng task)`);
}

runSequentially();
